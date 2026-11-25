"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { StepForm } from "@/components/auth/step-form";
import { formatCode } from "@/lib/formatters";
import { codeSchema, type CodeFormData } from "@/schemas/auth.schema";

type CodeStepProps = {
  defaultCode: string;
  onCodeChange: (code: string) => void; 
  onBack: () => void;
  onComplete: () => void;
};

export function CodeStep({defaultCode, onCodeChange, onBack, onComplete }: CodeStepProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CodeFormData>({
    resolver: zodResolver(codeSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: { code: defaultCode },
  });

  async function onSubmit(data: CodeFormData) {
    // temporario: simula o envio. remover junto com o console.log ao integrar a API.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    onComplete();
  }

  return (
    <StepForm
      id="code-form"
      title="Código de verificação"
      description="Digite o código de verificação."
      isSubmitting={isSubmitting}
      onBack={onBack}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <AuthField
            id="code"
            label="Código"
            type="text"
            placeholder="000000"
            icon={KeyRound}
            autoComplete="one-time-code"
            inputMode="numeric"
            maxLength={6}
            name={field.name}
            ref={field.ref}
            value={field.value}
            onBlur={field.onBlur}
            onChange={(event) => {
              const formattedCode = formatCode(event.target.value);
              field.onChange(formattedCode);
              onCodeChange(formattedCode);
            }}
            error={errors.code?.message}
          />
        )}
      />
    </StepForm>
  );
}