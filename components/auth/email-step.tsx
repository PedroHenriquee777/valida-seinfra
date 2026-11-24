"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import {
    identificacaoSchema,
    type IdentificacaoFormData,
}   from "@/schemas/auth.schema"

type EtapaIdentificacaoProps = {
    onVoltar: () => void;
    onConcluir: () => void;
};

export function EtapaIdentificacao({
  onVoltar,
  onConcluir,
}: EtapaIdentificacaoProps) {
  const {
    register: registrar,
    handleSubmit: tratarEnvio,
    formState: { errors: erros, isSubmitting: enviando },
  } = useForm<IdentificacaoFormData>({
    resolver: zodResolver(identificacaoSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { email: "" },
  });
  async function aoEnviar(data: IdentificacaoFormData) {
    // temporario: simula o envio. Remover junto com o console.log ao integrar a API.
    await new Promise((resolver) => setTimeout(resolver, 1000));
    console.log(data);
    onConcluir();
  }

  return (
    <EtapaForm
        id = "identificacao-form"
        titulo = "Recuperação de senha"
        descricao = "Digite o email para recuperação"
        enviando = {enviando}
        onVoltar = {onVoltar}
        onSubmit = {tratarEnvio(aoEnviar)}
    >
        <AuthField
            id = "email"
            label = "E-mail"
            type = "email"
            placeholder= "seu.nome@gmail.com"
            icon = { Mail }
            autoComplete = "email"
            error = {erros.email?.message}
            {...registrar("email")}
        />
    </EtapaForm>
  );
}
