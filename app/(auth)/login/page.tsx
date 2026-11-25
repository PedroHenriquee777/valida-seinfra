import type { Metadata } from "next";
import Image from "next/image";
import { ChartColumnBig} from "lucide-react";

import { LoginForm } from "@/components/auth/login-form";
import { AuthLayout } from "@/components/layout/auth-layout";

export const metadata: Metadata = {
  title: "Acessar plataforma | ValidaSEINFRA"
}

export default function PaginaInicial () {
  return (
     <AuthLayout>
      <div className="mx-auto w-full max-w-xl md:my-auto">
        <h1 className="text-3xl font-bold text-primary">
          Acessar plataforma
        </h1>

        <p className="mt-4 text-lg font-semibold text-primary">
          Preencha com os seus dados
        </p>

        <LoginForm />
      </div>
    </AuthLayout>
  );
}