"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { StepForm } from "@/components/auth/step-form";
import {
  newPasswordSchema,
  type NewPasswordFormData,
} from "@/schemas/auth.schema";

type NewPasswordStepProps = {
  onBack: () => void;
  onComplete: () => void;
};

export function NewPasswordStep({ onBack, onComplete }: NewPasswordStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordFormData>({
    resolver: zodResolver(newPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { password: "", confirmPassword: "" },
  });

  async function onSubmit(data: NewPasswordFormData) {
    // temporario: simula o envio. remover junto com o console.log ao integrar a API.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    onComplete();
  }

  return (
    <StepForm
      id="new-password-form"
      title="Nova senha"
      description="Escreva a sua nova senha."
      isSubmitting={isSubmitting}
      onBack={onBack}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthField
        id="password"
        label="Senha"
        type="password"
        placeholder="Exemplar123@!"
        icon={Lock}
        autoComplete="new-password"
        error={errors.password?.message}
        {...register("password")}
      />

      <AuthField
        id="confirm-password"
        label="Confirmar senha"
        type="password"
        placeholder="Sua senha"
        icon={Lock}
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
    </StepForm>
  );
}