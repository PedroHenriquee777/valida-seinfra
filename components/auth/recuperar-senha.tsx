"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { EtapaCodigo } from "@/components/auth/etapa-codigo";
import { EtapaIdentificacao } from "@/components/auth/etapa-identificacao";
import { EtapaNovaSenha } from "@/components/auth/etapa-nova-senha";
import { Button } from "@/components/ui/button";

type Etapa = "identificacao" | "codigo" | "nova-senha";

const ETAPA_ANTERIOR: Record<Etapa, Etapa | null> = {
  identificacao: null,
  codigo: "identificacao",
  "nova-senha": "codigo",
};

export function RecuperarSenha() {
  const roteador = useRouter();
  const [etapa, setEtapa] = useState<Etapa>("identificacao");

  function voltar() {
    const anterior = ETAPA_ANTERIOR[etapa];

    if (anterior) {
      setEtapa(anterior);
      return;
    }

    roteador.push("/login");
  }
 return (
    <>
      {etapa === "nova-senha" && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={voltar}
          className="cursor-pointer self-start rounded-md border-blue-600 text-blue-600 hover:text-blue-600"
        >
          <ChevronLeft aria-hidden="true" />
          Voltar
        </Button>
      )}

      <div className="mx-auto my-auto w-full max-w-xl py-8">
        {etapa === "identificacao" && (
          <EtapaIdentificacao
            onVoltar={voltar}
            onConcluir={() => setEtapa("codigo")}
          />
        )}

        {etapa === "codigo" && (
          <EtapaCodigo
            onVoltar={voltar}
            onConcluir={() => setEtapa("nova-senha")}
          />
        )}

        {etapa === "nova-senha" && (
          <EtapaNovaSenha
            onVoltar={voltar}
            onConcluir={() => roteador.push("/login")}
          />
        )}
      </div>
    </>
  );
}
