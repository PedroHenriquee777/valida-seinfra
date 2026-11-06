"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Lock, Mail } from "lucide-react";
import { Controller, useForm, useWatch } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { ProfileTabs } from "@/components/auth/profile-tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatCnpj } from "@/lib/formatters";
import { loginSchema, type LoginFormData } from "@/schemas/auth.schema";

export function LoginForm() {
  const {
    register: registrar,
    control: controle,
    handleSubmit: tratarEnvio,
    setValue: definirValor,
    clearErrors: limparErros,
    formState: { errors: erros, isSubmitting: enviando },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    // Erros só aparecem (e só são recalculados) ao clicar em "Continuar".
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      perfil: "empresa",
      cnpj: "",
      email: "",
      senha: "",
      lembrar: false,
    },
  });

  const perfil = useWatch({ control: controle, name: "perfil" });
  const ehEmpresa = perfil === "empresa";

  function trocarPerfil(novoPerfil: LoginFormData["perfil"]) {
    definirValor("perfil", novoPerfil);
    limparErros();
  }

  async function aoEnviar(dados: LoginFormData) {
    // TEMPORÁRIO: simula o envio para o estado de loading ficar visível.
    // Remover junto com o console.log quando integrar a API.
    await new Promise((resolver) => setTimeout(resolver, 1000));

    const credencial =
      dados.perfil === "empresa" ? { cnpj: dados.cnpj } : { email: dados.email };

    console.log({
      perfil: dados.perfil,
      ...credencial,
      senha: dados.senha,
      lembrar: dados.lembrar,
    });
  }

  return (
    <form
      id="login-form"
      noValidate
      onSubmit={tratarEnvio(aoEnviar)}
      className="mt-8 flex flex-col gap-6"
    >
      <ProfileTabs perfil={perfil} setPerfil={trocarPerfil} />

      <div className="flex flex-col gap-5">
        {ehEmpresa ? (
          <Controller
            name="cnpj"
            control={controle}
            render={({ field: campo }) => (
              <AuthField
                id="cnpj"
                label="CNPJ"
                type="text"
                placeholder="00.000.000/0000-00"
                icon={Mail}
                autoComplete="off"
                inputMode="numeric"
                maxLength={18}
                name={campo.name}
                ref={campo.ref}
                value={campo.value}
                onBlur={campo.onBlur}
                onChange={(evento) => campo.onChange(formatCnpj(evento.target.value))}
                error={erros.cnpj?.message}
              />
            )}
          />
        ) : (
          <AuthField
            id="email"
            label="E-mail corporativo"
            type="email"
            placeholder="seu.nome@empresa"
            icon={Mail}
            autoComplete="email"
            error={erros.email?.message}
            {...registrar("email")}
          />
        )}

        <AuthField
          id="senha"
          label="Senha"
          type="password"
          placeholder="Sua senha"
          icon={Lock}
          autoComplete="current-password"
          error={erros.senha?.message}
          {...registrar("senha")}
        />
      </div>

      <p className="rounded-lg bg-gray px-3 py-4 text-xs font-semibold leading-relaxed text-muted-foreground">
        Ao continuar, confirmo que concordo com os{" "}
        <Link href="/termos" className="text-blue-600 underline">
          Termos de Uso
        </Link>{" "}
        e a Política de{" "}
        <Link href="/privacidade" className="text-blue-600 underline">
          Segurança e Privacidade
        </Link>{" "}
        da plataforma.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Controller
            name="lembrar"
            control={controle}
            render={({ field: campo }) => (
              <Checkbox
                id="lembrar"
                name={campo.name}
                ref={campo.ref}
                checked={campo.value}
                onCheckedChange={(marcado) => campo.onChange(marcado)}
              />
            )}
          />

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

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={enviando}
          aria-busy={enviando}
          className="h-11 w-full cursor-pointer rounded-lg bg-blue-600 text-primary-foreground hover:bg-blue-600/90 sm:w-44"
        >
          {enviando ? (
            <>
              <LoaderCircle className="animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            "Continuar"
          )}
        </Button>
      </div>
    </form>
  );
}
