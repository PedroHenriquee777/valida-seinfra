import type { Metadata } from "next";

import { RecoveryPassword } from "@/components/auth/recovery-password";
import { AuthLayout } from "@/components/layout/auth-layout";

export const metadata: Metadata = {
  title: "Recuperação de senha | ValidaSEINFRA",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <RecoveryPassword />
    </AuthLayout>
  );
}