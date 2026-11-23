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