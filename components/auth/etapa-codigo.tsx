"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import { formatCodigo } from "@/lib/formatters";
import { codigoSchema, type CodigoFormData } from "@/schemas/auth.schema";

type EtapaCodigoProps = {
    onVoltar: () => void;
    onConcluir: () => void;
};

export function EtapaCodigo({ onVoltar, onConcluir }: EtapaCodigoProps) {
    const {
        control: controle,
        handleSubmit: tratarEnvio,
        formState: { errors: erros, isSubmitting: enviando },
    } = useForm<CodigoFormData>({
        resolver: zodResolver(codigoSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: { codigo: "" }
    });

    async function aoEnviar(data: CodigoFormData){
    // temporario: simula o envio. remover junto com o console.log ao integrar a API.
    await new Promise((resolver) => setTimeout(resolver, 1000));
    console.log(data);
    onConcluir();
    }
}