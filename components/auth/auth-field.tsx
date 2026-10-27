import type { LucideIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthFieldProps = {
    id: string;
    name: string;
    label: string;
    type: "email" | "password";
    placeholder: string;
    icon: LucideIcon;
    autoComplete?: string;
};

export function AuthField({
    id,
    name,
    label,
    type,
    placeholder,
    icon: Icon,
    autoComplete,   
}: AuthFieldProps) {
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
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="h-13 rounded-lg border-input bg-card pl-9 text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
    );
}



