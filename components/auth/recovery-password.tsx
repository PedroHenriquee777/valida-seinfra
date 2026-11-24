"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { CodeStep } from "@/components/auth/code-step";
import { EmailStep } from "@/components/auth/email-step";
import { NewPasswordStep } from "@/components/auth/new-password-step";

type Step = "email" | "code" | "new-password";

const PREVIOUS_STEP: Record<Step, Step | null> = {
  email: null,
  code: "email",
  "new-password": "code",
};

export function RecoveryPassword() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");

  function goBack() {
    const previous = PREVIOUS_STEP[step];

    if (previous) {
      setStep(previous);
      return;
    }

    router.push("/login");
  }

  return (
    <div className="mx-auto my-auto w-full max-w-xl py-6 sm:py-8">
      {step === "email" && (
        <EmailStep onBack={goBack} onComplete={() => setStep("code")} />
      )}

      {step === "code" && (
        <CodeStep onBack={goBack} onComplete={() => setStep("new-password")} />
      )}

      {step === "new-password" && (
        <NewPasswordStep
          onBack={goBack}
          onComplete={() => router.push("/login")}
        />
      )}
    </div>
  );
}