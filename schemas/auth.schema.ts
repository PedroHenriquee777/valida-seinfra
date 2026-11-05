import { z } from "zod";

import { isValidCnpj } from "@/lib/validators";

export const loginSchema = z
  .object({
    perfil: z.enum(["empresa", "setor"]),
    cnpj: z.string(),
    email: z.string(),
    senha: z
      .string()
      .min(1, "Informe a senha")
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
    remember: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.perfil === "empresa") {
      if (!data.cnpj.trim()) {
        ctx.addIssue({ code: "custom", path: ["cnpj"], message: "Informe o CNPJ" });
      } else if (!isValidCnpj(data.cnpj)) {
        ctx.addIssue({ code: "custom", path: ["cnpj"], message: "CNPJ inválido" });
      }
      return;
    }
    if (!data.email.trim()) {
      ctx.addIssue({ code: "custom", path: ["email"], message: "Informe o e-mail corporativo" });
    } else if (!z.email().safeParse(data.email).success) {
      ctx.addIssue({ code: "custom", path: ["email"], message: "E-mail inválido" });
    }
  });
export type LoginFormData = z.infer<typeof loginSchema>;