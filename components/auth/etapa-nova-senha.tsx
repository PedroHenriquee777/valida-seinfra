"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import {
  novaSenhaSchema,
  type NovaSenhaFormData,
} from "@/schemas/auth.schema";

type EtapaNovaSenhaProps = {
  onVoltar: () => void;
  onConcluir: () => void;
};

export function EtapaNovaSenha({ onVoltar, onConcluir }: EtapaNovaSenhaProps) {
  const {
    register: registrar,
    handleSubmit: tratarEnvio,
    formState: { errors: erros, isSubmitting: enviando },
  } = useForm<NovaSenhaFormData>({
    resolver: zodResolver(novaSenhaSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { senha: "", confirmarSenha: "" },
  });

  async function aoEnviar(data: NovaSenhaFormData) {
    // TEMPORÁRIO: simula o envio. Remover junto com o console.log ao integrar a API.
    await new Promise((resolver) => setTimeout(resolver, 1000));
    console.log(data);
    onConcluir();
  }