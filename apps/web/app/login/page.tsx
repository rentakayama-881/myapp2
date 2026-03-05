import Link from 'next/link';
import { PasswordInput } from '../../components/auth/password-input';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container flex min-h-screen items-center justify-center py-fluid-sm">
        <section className="w-full max-w-md rounded-xl border border-border bg-card/70 p-6 shadow-sm">
          <div className="mb-6">
            <h1 className="font-display text-2xl font-medium tracking-tight">Login</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Gunakan email atau username dan password untuk melanjutkan.
            </p>
          </div>

          <form className="grid gap-4" noValidate>
            <div className="grid gap-2">
              <label htmlFor="login-identifier" className="text-sm font-medium text-secondary-foreground">
                Email atau Username
              </label>
              <input
                id="login-identifier"
                name="identifier"
                type="text"
                autoComplete="username"
                placeholder="nama@domain.com atau username"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-ring"
                required
              />
            </div>

            <PasswordInput
              id="login-password"
              name="password"
              label="Password"
              autoComplete="current-password"
              placeholder="Masukkan password"
              minLength={12}
              hint="Password minimal 12 karakter."
              required
            />

            <button
              type="submit"
              className="group/button mt-2 inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-85"
            >
              Login
            </button>
          </form>

          <p className="mt-5 text-sm text-muted-foreground">
            Belum punya akun?{' '}
            <Link href="/register" className="font-medium text-foreground hover:text-secondary-foreground">
              Register
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
