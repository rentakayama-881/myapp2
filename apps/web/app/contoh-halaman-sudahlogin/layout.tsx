import { MemberShell } from '../../components/app-shell/member-shell';

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MemberShell>{children}</MemberShell>;
}
