'use client';

import { FormEvent, useMemo, useState } from 'react';

type Mode = 'scrape' | 'crawl' | 'crawl-job';

interface ApiEnvelope {
  success: boolean;
  data?: unknown;
  error?: unknown;
}

const defaultApiBase =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000/v1';

export default function HomePage() {
  const [mode, setMode] = useState<Mode>('scrape');
  const [apiBaseUrl, setApiBaseUrl] = useState(defaultApiBase);
  const [apiKey, setApiKey] = useState('');
  const [url, setUrl] = useState('https://example.com');
  const [maxPages, setMaxPages] = useState(20);
  const [maxDepth, setMaxDepth] = useState(2);
  const [renderJavaScript, setRenderJavaScript] = useState(false);
  const [waitForMs, setWaitForMs] = useState(300);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [jobId, setJobId] = useState('');
  const [error, setError] = useState<string | null>(null);

  const endpointHint = useMemo(() => {
    if (mode === 'scrape') {
      return '/scraper/scrape';
    }
    if (mode === 'crawl') {
      return '/scraper/crawl';
    }
    return '/scraper/crawl/jobs';
  }, [mode]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload =
        mode === 'scrape'
          ? {
              url,
              formats: ['markdown', 'metadata', 'links'],
              timeoutMs: 15000,
              onlyMainContent: true,
              renderJavaScript,
              waitForMs,
            }
          : {
              url,
              maxPages,
              maxDepth,
              sameDomain: true,
              ignoreQueryParams: true,
              includeSubdomains: false,
              includeContent: mode !== 'crawl-job',
              renderJavaScript,
              waitForMs,
              formats:
                mode === 'crawl-job'
                  ? ['metadata', 'links']
                  : ['markdown', 'metadata', 'links'],
            };

      const data = await sendRequest(endpointHint, payload, apiBaseUrl, apiKey);
      setResult(data);

      if (mode === 'crawl-job') {
        const maybeJobId = (data as ApiEnvelope)?.data as { id?: string } | undefined;
        if (maybeJobId?.id) {
          setJobId(maybeJobId.id);
        }
      }
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : 'request failed unexpectedly';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  async function checkJobStatus() {
    if (!jobId.trim()) {
      setError('Job ID wajib diisi');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await sendRequest(
        `/scraper/crawl/jobs/${jobId.trim()}`,
        undefined,
        apiBaseUrl,
        apiKey,
      );
      setResult(response);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : 'failed to check job status';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <section className="mb-8 rounded-2xl border border-neutral-300 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">
          Firecrawl-style Scraper Playground
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Mode: scrape page, crawl sync, crawl async job (Redis queue jika `REDIS_URL` aktif).
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={submit}
          className="space-y-4 rounded-2xl border border-neutral-300 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-2">
            <label className="text-sm font-medium">Mode</label>
            <div className="flex flex-wrap gap-2">
              {(['scrape', 'crawl', 'crawl-job'] as Mode[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value)}
                  className={`rounded-lg border px-3 py-2 text-sm transition ${
                    mode === value
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <Field
            label="API Base URL"
            value={apiBaseUrl}
            onChange={setApiBaseUrl}
            placeholder="http://localhost:4000/v1"
          />
          <Field
            label="x-api-key"
            value={apiKey}
            onChange={setApiKey}
            placeholder="dev-change-this"
          />
          <Field
            label="Target URL"
            value={url}
            onChange={setUrl}
            placeholder="https://example.com"
          />

          {mode !== 'scrape' && (
            <div className="grid grid-cols-2 gap-3">
              <NumberField
                label="Max Pages"
                value={maxPages}
                onChange={setMaxPages}
                min={1}
                max={500}
              />
              <NumberField
                label="Max Depth"
                value={maxDepth}
                onChange={setMaxDepth}
                min={0}
                max={8}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <ToggleField
              label="Render JavaScript"
              checked={renderJavaScript}
              onChange={setRenderJavaScript}
            />
            <NumberField
              label="Wait For (ms)"
              value={waitForMs}
              onChange={setWaitForMs}
              min={0}
              max={10000}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Running...' : `Run ${endpointHint}`}
            </button>
            <span className="text-xs text-neutral-500">Endpoint: {endpointHint}</span>
          </div>

          {mode === 'crawl-job' && (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="mb-2 text-sm font-medium">Check Async Job</p>
              <div className="flex gap-2">
                <input
                  value={jobId}
                  onChange={(event) => setJobId(event.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm"
                  placeholder="paste job id"
                />
                <button
                  type="button"
                  onClick={checkJobStatus}
                  disabled={loading}
                  className="rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Check
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}
        </form>

        <section className="rounded-2xl border border-neutral-300 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-600">
            Response
          </h2>
          <pre className="max-h-[640px] overflow-auto rounded-xl bg-neutral-950 p-4 text-xs text-green-100">
            {JSON.stringify(result, null, 2) || 'No response yet'}
          </pre>
        </section>
      </section>
    </main>
  );
}

async function sendRequest(
  path: string,
  payload: unknown,
  apiBaseUrl: string,
  apiKey: string,
) {
  const endpoint = `${apiBaseUrl.replace(/\/$/, '')}${path}`;
  const method = payload === undefined ? 'GET' : 'POST';

  const response = await fetch(endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(apiKey.trim() ? { 'x-api-key': apiKey.trim() } : {}),
    },
    body: payload === undefined ? undefined : JSON.stringify(payload),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      typeof body?.message === 'string'
        ? body.message
        : `request failed (${response.status})`;
    throw new Error(message);
  }

  return body;
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Field({ label, value, onChange, placeholder }: FieldProps) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 px-3 py-2"
      />
    </label>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

function NumberField({ label, value, onChange, min, max }: NumberFieldProps) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        min={min}
        max={max}
        className="w-full rounded-lg border border-neutral-300 px-3 py-2"
      />
    </label>
  );
}

interface ToggleFieldProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function ToggleField({ label, checked, onChange }: ToggleFieldProps) {
  return (
    <label className="flex items-center justify-between rounded-lg border border-neutral-300 px-3 py-2 text-sm">
      <span className="font-medium">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4"
      />
    </label>
  );
}
