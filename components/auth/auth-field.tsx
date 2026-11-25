"use client";

import { useState, type ComponentProps } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
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
  ...inputProps
}: AuthFieldProps) {
  const errorId = `${id}-error`;
  const isPassword = type === "password";
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
          type={isPassword && isPasswordVisible ? "text" : type}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
          className={cn(
            "h-13 rounded-lg border-input !bg-primary-foreground text-foreground placeholder:text-muted-foreground",
            Icon && "pl-9",
            isPassword && "pr-12",
          )}
        />

        {isPassword && (
          <div className="absolute inset-y-0 right-1 flex items-center">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsPasswordVisible((visible) => !visible)}
              aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
              aria-pressed={isPasswordVisible}
              className="cursor-pointer text-muted-foreground hover:text-foreground"
            >
              {isPasswordVisible ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
            </Button>
          </div>
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