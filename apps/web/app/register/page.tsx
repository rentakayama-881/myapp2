import Link from 'next/link';
import { PasswordInput } from '../../components/auth/password-input';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container flex min-h-screen items-center justify-center py-fluid-sm">
        <section className="w-full max-w-md rounded-xl border border-border bg-card/70 p-6 shadow-sm">
          <div className="mb-6">
            <h1 className="font-display text-2xl font-medium tracking-tight">Register</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Lengkapi data berikut untuk membuat akun baru.
            </p>
          </div>

          <form className="grid gap-4" noValidate>
            <div className="grid gap-2">
              <label htmlFor="register-username" className="text-sm font-medium text-secondary-foreground">
                Username
              </label>
              <input
                id="register-username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Masukkan username"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-ring"
                required
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="register-email" className="text-sm font-medium text-secondary-foreground">
                Email
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nama@domain.com"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-ring"
                required
              />
            </div>

            <PasswordInput
              id="register-password"
              name="password"
              label="Password"
              autoComplete="new-password"
              placeholder="Minimal 12 karakter"
              minLength={12}
              hint="Password minimal 12 karakter."
              required
            />

            <button
              type="submit"
              className="group/button mt-2 inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-85"
            >
              Register
            </button>
          </form>

          <p className="mt-5 text-sm text-muted-foreground">
            Sudah punya akun?{' '}
            <Link href="/login" className="font-medium text-foreground hover:text-secondary-foreground">
              Login
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
