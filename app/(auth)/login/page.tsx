import type { Metadata } from "next";
import Image from "next/image";
import { ChartColumnBig} from "lucide-react";

import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Acessar plataforma | ValidaSEINFRA"
}

export default function PaginaInicial () {
  return (
    <main className="min-h-dvh w-full bg-background">
      <section className="grid min-h-dvh w-full grid-cols-1 md:grid-cols-2">
        <aside className="flex flex-col justify-center bg-gradient-to-b from-sidebar to-sidebar-gradient-end p-6 sm:p-10 md:p-12 lg:p-20">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Logo do ValidaSEINFRA"
              width={220}
              height={48}
              priority
              className="h-auto w-full max-w-15 object-contain"
            />
          <span className="text-3xl font-bold text-white">
            ValidaSEINFRA
          </span>
          
          </div>
          
          <h2 className="mt-10 max-w-md text-3xl font-bold leading-tight text-white">
            Gestão documental de obras, do envio à aprovação
          </h2>

          <p className="mt-3 max-w-md text-lg leading-snug text-sidebar-foreground">
            Acompanhe processos, envie documentos e valide certidões em um único lugar - com histórico completo de cada obra.
          </p>
        </aside>

        <div className="flex flex-col justif-center bg-background px-6 py-10 sm:px-10 md:px-8 lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-3xl font-bold text-primary">
              Acessar plataforma
            </h1>

            <p className="mt-4 text-lg font-semibold text-primary">
              Preencha com os seus dados
            </p>

            <LoginForm/>
          </div>
        </div>
      </section>
    </main>
  )
}