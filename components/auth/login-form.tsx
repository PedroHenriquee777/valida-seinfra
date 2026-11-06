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
    register,
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      perfil: "empresa",
      cnpj: "",
      email: "",
      senha: "",
      lembrar: false,
    },
  });
  const perfil = useWatch({ control, name: "perfil" });
  const isEmpresa = perfil === "empresa";

  function handleChangePerfil(novoPerfil: LoginFormData["perfil"]) {
    setValue("perfil", novoPerfil);
    clearErrors();
  }
  async function onSubmit(data: LoginFormData) {
    // TEMPORÁRIO: simula o envio para o estado de loading ficar visível.
    // Remover junto com o console.log quando integrar a API.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const credencial =
      data.perfil === "empresa" ? { cnpj: data.cnpj } : { email: data.email };

    console.log({
      perfil: data.perfil,
      ...credencial,
      senha: data.senha,
      remember: data.remember,
    });
  }

  return(
 <form
      id="login-form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex flex-col gap-6"
    >
      <ProfileTabs perfil={perfil} setPerfil={handleChangePerfil} />

      <div className="flex flex-col gap-5">
        {isEmpresa ? (
          <Controller
            name="cnpj"
            control={control}
            render={({ field }) => (
              <AuthField
                id="cnpj"
                label="CNPJ"
                type="text"
                placeholder="00.000.000/0000-00"
                icon={Mail}
                autoComplete="off"
                inputMode="numeric"
                maxLength={18}
                name={field.name}
                ref={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onChange={(e) => field.onChange(formatCnpj(e.target.value))}
                error={errors.cnpj?.message}
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
            error={errors.email?.message}
            {...register("email")}
          />
        )}

        <AuthField
          id="senha"
          label="Senha"
          type="password"
          placeholder="Sua senha"
          icon={Lock}
          autoComplete="current-password"
          error={errors.senha?.message}
          {...register("senha")}
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
            name="remember"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="lembrar"
                name={field.name}
                ref={field.ref}
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked)}
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
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="h-11 w-full cursor-pointer rounded-lg bg-blue-600 text-primary-foreground hover:bg-blue-600/90 sm:w-44"
        >
          {isSubmitting ? (
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