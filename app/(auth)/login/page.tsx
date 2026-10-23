import type { Metadata } from "next";
import Link from "next/link";
import { ChartColumnBig, Lock, Mail} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Acessar plataforma | ValidaSEINFRA"
}

const tabClass =
  "h-full rounded-none text-sm font-semibold text-muted-foreground shadow-none data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:shadow-none";


export default function PaginaInicial () {
  return (
   <main className="flex min-h-dvh items-center justify-center bg-background p-3 font-sans">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl md:min-h-[calc(100dvh-1.5rem)] md:grid-cols-2">
        {/* painel*/}
        <aside className="flex flex-col justify-center bg-gradient-to-b from-sidebar to-sidebar-gradient-end p-6 sm:p-10 md:p-20">
          <div className="flex items-center gap-3">
            { /* logo provisória */ }
            <div className="flex size-11 items-center justify-center rounded-lg border border-white/80 bg-sidebar-primary">
              <ChartColumnBig className="size-6 text-info-foreground"/>
            </div>

            <span className="text-3xl font-bold text-white">
              ValidaSEINFRA
            </span>
          </div>
          <h2 className="mt-10 max-w-md text-3xl font-bold leading-tight text-white">Gestão documental de obras, do envio à aprovação.</h2>
          <p className="mt-3 max-w-md text-lg leading-snug text-sidebar-foreground">
            Acompanhe processos, envie documentos e valide certidões em um único lugar - com histórico completo de cada obra.
          </p>
        </aside>

        { /* formulario */ }
        <div className="flex flex-col justify-center bg-background p-6 sm:p-10 md:p-8 lg:p-14">
          <h1 className="text-3xl font-bold text-primary">
            Acessar plataforma
          </h1>

          <p className="mt-5 text-lg font-semibold text-primary">
            Preencha com os seus dados
          </p>
          
          <form className="mt-5 space-y-5">
            { /* seleçao de perfil */ }
            <Tabs defaultValue = "setor">
              <TabsList className = "grid h-11 w-full grid-cols-2 overflow-hidden rounded-lg border border-border bg-card p-0">
                <TabsTrigger value="empresa" className={tabClass}>
                  Empresa
                </TabsTrigger>
                
                <TabsTrigger value="setor" className={tabClass}>
                  Administrador e Setores
                </TabsTrigger>
                  
              </TabsList>
            </Tabs>

            { /* campo email */ }
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-muted-foreground">
                E-mail corporativo
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/>
                
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="@empresa.com"
                  className="h-13 rounded-lg border-input bg-card pl-9 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          { /* campo senha */ }
          <div className="space-y-2">
            <label
              htmlFor="senha"
              className="text-sm font-semibold text-muted-foreground"
            >
              Senha
            </label>
            
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/>

              <Input
                id="senha"
                type="password"
                autoComplete="current-password"
                placeholder="Sua senha"
                className="h-13 rounded-lg border-input bg-card pl-9 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          { /* termos de uso */ }
            <p className="rounded-lg bg-muted px-3 py-4 text-xs font-semibold leading-relaxed text-muted-foreground">
              Ao continuar confirmo que concordo com os{" "}
              <Link
                href="/termos"
                className="text-blue-600 underline"
              >
                Termos de Uso
              </Link>{" "}
              e a Política de{" "}
              <Link
                href="/privacidade"
                className="text-blue-600 underline"
              >
                Segurança e Privacidade
              </Link>{" "}
              da plataforma.
            </p>

          {/* lembrar de mim e recuperaçao de senha */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Checkbox id="lembrar" />

                <Label
                  htmlFor="lembrar"
                  className="text-sm font-normal text-muted-foreground"
                >
                  Lembrar de mim
                </Label>
              </div>

              <Link
                href="/esqueci-senha"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Esqueci minha senha
              </Link>
            </div>

            {/* botão visual, ainda sem envio real */}
            <div className="flex justify-end">
              <button
                type="button"
                className="h-11 w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600 sm:w-44"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </section>
   </main>
  )
} 