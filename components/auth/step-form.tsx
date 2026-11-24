import type { ComponentProps, ReactNode } from "react";
import { ChevronLeft, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

type StepFormProps = {
  id: string;
  title: string;
  description: string;
  isSubmitting: boolean;
  onBack: () => void;
  onSubmit: ComponentProps<"form">["onSubmit"];
  children: ReactNode;
};

export function StepForm({
  id,
  title,
  description,
  isSubmitting,
  onBack,
  onSubmit,
  children,
}: StepFormProps) {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h1>

      <p className="mt-3 text-base font-semibold text-primary sm:mt-4 sm:text-lg">
        {description}
      </p>

      <form
        id={id}
        noValidate
        onSubmit={onSubmit}
        className="mt-6 flex flex-col gap-6 sm:mt-8"
      >
        <div className="flex flex-col gap-5">{children}</div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button
            type="button"
            variant="outline"
            disabled={isSubmitting}
            onClick={onBack}
            className="h-11 w-full cursor-pointer rounded-lg border-blue-600 text-blue-600 hover:text-blue-600 sm:w-44"
          >
            <ChevronLeft aria-hidden="true" />
            Voltar
          </Button>

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
    </>
  );
}