"use client";

import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";

import { AuthField } from "@/components/auth/auth-field";
import { ProfileTabs } from "@/components/auth/profile-tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const [perfil, setPerfil] = useState<"empresa" | "setor">("empresa");
const isEmpresa = perfil === "empresa";

export function LoginForm() {
  return (
    <form
      id="login-form"
      className="mt-8 flex flex-col gap-6"
    >
      <ProfileTabs />

      <div className="flex flex-col gap-5">
        <AuthField
          id="email"
          name="email"
          label="E-mail corporativo"
          type="email"
          placeholder="seu.nome@gmail.com"
          icon={Mail}
          autoComplete="email"
        />

        <AuthField
          id="senha"
          name="password"
          label="Senha"
          type="password"
          placeholder="Sua senha"
          icon={Lock}
          autoComplete="current-password"
        />
      </div>

      <p className="rounded-lg bg-muted px-3 py-4 text-xs font-semibold leading-relaxed text-muted-foreground">
        Ao continuar, confirmo que concordo com os{" "}
        <Link
          href="/termos"
          className="text-blue-600 underline"
        >
          Termos de Uso
        </Link>{" "}
        e a Política de{" "}
        <Link
          href="/privacidade"
          className="text-blue-600 underline"
        >
          Segurança e Privacidade
        </Link>{" "}
        da plataforma.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="lembrar" name="remember" />

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
          type="button"
          className="h-11 w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 sm:w-44"
        >
          Continuar
        </Button>
      </div>
    </form>
  );
}