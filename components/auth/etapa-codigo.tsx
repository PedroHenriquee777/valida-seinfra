"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import { formatCodigo } from "@/lib/formatters";
import { codigoSchema, type CodigoFormData } from "@/schemas/auth.schema";
import { KeyRound } from "lucide-react";

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

    return (
        <EtapaForm
            id="codigo-form"
            titulo="Código de verificação"
            descricao="Digite o código de verificação"
            enviando={enviando}
            onVoltar={onVoltar}
            onSubmit={tratarEnvio(aoEnviar)}
        >
            <Controller
                name="codigo"
                control={controle}
                render={({ field: campo}) => (
                    <AuthField
                        id="codigo"
                        label="Código"
                        type="text"
                        placeholder="000000"
                        icon={KeyRound}
                        autoComplete="one-time-code"
                        inputMode="numeric"
                        maxLength={6}
                        name={campo.name}
                        ref={campo.ref}
                        value={campo.value}
                        onBlur={campo.onBlur}
                        onChange={(evento) => campo.onChange(formatCodigo(evento.target.value))}
                    />
                )}
            />
        </EtapaForm>
    );
}