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
  "h-full rounded-none text-sm font-semibold text-muted-foreground shadow-none data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:shadow-none";;


export default function PaginaInicial () {
  return (
   <main className="flex min-h-dvh items-center justify-center bg-background p-3 font-sans">
      <section className="grid w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl md:min-h-[calc(100dvh-1.5rem)] md:grid-cols-2">
        <aside className="hidden flex-col justify-center bg-gradient rounded-lg border border-white/80 bg-sidebar-primary">
          <div className="flex items-center gap-3">
            { /* logo provisória */ }
            <div className="flex size-11 items-center justify-center rounded-lg border border-white/80 bg-sidebar-primary">
              <ChartColumnBig className="size-6 text-info-foreground"/>
            </div>

            <span className="text-3xl font-bold text-white">
              ValidaSEINFRA
            </span>
          </div>
          <h2 className="mt-10 max-w-md text-3xl font-bold leading-tight text-white">Gestão documental de obras,do envio à aprovação.</h2>
          <p className="mt-3 max-w-md text-lg leading-snug text-sidebar-foreground">
            Acompanhe processos, envie documentos e valide certidões em um único lugar - com histórico completo de cada obra.
          </p>
        </aside>
      </section>
   </main>
  )
} 