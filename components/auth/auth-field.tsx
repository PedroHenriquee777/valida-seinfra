"use client";

import { useState, type ComponentProps } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type AuthFieldProps = Omit<ComponentProps<"input">, "id" | "type"> & {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  icon?: LucideIcon;
  error?: string;
};

export function AuthField({
    id,
    label,
    type,
    icon: Icon,
    error,
    ...inputsProps
}: AuthFieldProps) {
  const errorId = `${id}-error`;
  const ehSenha = type === "password";
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-sm font-semibold text-muted-foreground"
      >
        {label}
      </Label>

      <div className="relative">
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
        )}

        <Input
          id={id}
          type={ehSenha && senhaVisivel ? "type" : type}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...inputsProps}
          className={cn("h-13 rounded-lg border-input !bg-primary-foreground pl-9 text-foreground placeholder:text-muted-foreground", Icon && "pl-9", ehSenha && "pr-10",
          )}
        />

        {ehSenha && (
          <button
            type="button"
            onClick={() => setSenhaVisivel((visivel) => !visivel)}
            aria-label={senhaVisivel ? "Ocultar senha" : "Mostrar senha"}
            aria-pressed={senhaVisivel}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-md p-1.5 text-muted-foreground hover:text-foreground"
          >
            {senhaVisivel ? (
              <EyeOff aria-hidden="true" className="size-4" />
            ) : (
              <Eye aria-hidden="true" className="size-4" />
            )}
          </button>
        )}

      </div>

      {error && (
        <p id={errorId} role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}


