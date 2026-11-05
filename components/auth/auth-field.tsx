import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthFieldProps = Omit<ComponentProps<"input">, "id" | "type"> & {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  icon: LucideIcon;
  error?: string;
};

export function AuthField({
    id,
    label,
    icon: Icon,
    error,
    ...inputsProps
}: AuthFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-sm font-semibold text-muted-foreground"
      >
        {label}
      </Label>

      <div className="relative">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...inputsProps}
          className="h-13 rounded-lg border-input !bg-primary-foreground pl-9 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}


