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
