import type { Metadata } from "next";

import { RecuperarSenha } from "@/components/auth/recuperar-senha";
import { AuthLayout } from "@/components/layout/auth-layout";

export const metadata: Metadata = {
  title: "Recuperação de senha | ValidaSEINFRA",
};

export default function EsqueciSenhaPage() {
  return (
    <AuthLayout>
      <RecuperarSenha />
    </AuthLayout>
  );
}