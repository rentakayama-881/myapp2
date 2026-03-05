'use client';

import { useId, useState } from 'react';

interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  hint?: string;
}

function EyeIcon({ hidden }: { hidden: boolean }) {
  if (hidden) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
        aria-hidden
      >
        <path d="m2 2 20 20" />
        <path d="M10.58 10.58A2 2 0 0 0 13.42 13.42" />
        <path d="M9.88 5.09A10.26 10.26 0 0 1 12 4c7 0 10 8 10 8a14.27 14.27 0 0 1-3.3 4.39" />
        <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 8 10 8a9.74 9.74 0 0 0 5.39-1.61" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function PasswordInput({ label, hint, id: providedId, className, ...props }: PasswordInputProps) {
  const generatedId = useId();
  const inputId = providedId ?? generatedId;
  const [hidden, setHidden] = useState(true);

  return (
    <div className="grid gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-secondary-foreground">
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          type={hidden ? 'password' : 'text'}
          className={[
            'w-full rounded-lg border border-border bg-background px-3 py-2.5 pr-11 text-sm text-foreground',
            'placeholder:text-muted-foreground/70 focus-ring',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />

        <button
          type="button"
          onClick={() => setHidden((state) => !state)}
          className="absolute inset-y-0 right-0 inline-flex items-center justify-center px-3 text-muted-foreground hover:text-foreground"
          aria-label={hidden ? 'Tampilkan password' : 'Sembunyikan password'}
        >
          <EyeIcon hidden={hidden} />
        </button>
      </div>

      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
