"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { StepForm } from "@/components/auth/step-form";
import { emailSchema, type EmailFormData } from "@/schemas/auth.schema";

type EmailStepProps = {
  onBack: () => void;
  onComplete: () => void;
};

export function EmailStep({ onBack, onComplete }: EmailStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { email: "" },
  });

  async function onSubmit(data: EmailFormData) {
    // temporario: so simula o envio. remover junto com o console.log ao integrar a API.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    onComplete();
  }

  return (
    <StepForm
      id="email-form"
      title="Recuperação de senha"
      description="Digite o email para recuperação."
      isSubmitting={isSubmitting}
      onBack={onBack}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthField
        id="email"
        label="E-mail"
        type="email"
        placeholder="seu.nome@gmail.com"
        icon={Mail}
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />
    </StepForm>
  );
}