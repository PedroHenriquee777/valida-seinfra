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
    lembrar: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // ctx.addIssue centralizado
    const addError = (campo: "cnpj" | "email", mensagem: string) => {
      ctx.addIssue({ code: "custom", path: [campo], message: mensagem });
    };

    if (data.perfil === "empresa") {
      const cnpj = data.cnpj.trim();

      if (!cnpj) {
        addError("cnpj", "Informe o CNPJ");
      } else if (!isValidCnpj(cnpj)) {
        addError("cnpj", "CNPJ inválido");
      }
      return;
    }

    const email = data.email.trim();

    if (!email) {
      addError("email", "Informe o e-mail corporativo");
    } else if (!z.email().safeParse(email).success) {
      addError("email", "E-mail inválido");
    }
  });

export type LoginFormData = z.infer<typeof loginSchema>;

export const identificacaoSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Informe o e-mail")
    .refine((valor) => z.email().safeParse(valor).success, "E-mail inválido"),
});

export type IdentificacaoFormData = z.infer<typeof identificacaoSchema>;

export const codigoSchema = z.object({
  codigo: z
    .string()
    .min(1, "Informe o código")
    .regex(/^\d{6}$/, "O código deve ter 6 dígitos"),
});

export type CodigoFormData = z.infer<typeof codigoSchema>;

export const novaSenhaSchema = z
.object({
  senha: z
  .string()
  .min(1, "Informe a nova senha")
  .min(8, "A senha deve ter pelo menos 8 caracteres"),
  ConfirmarSenha: z.string().min(1, "Repita a senha"),
})
.refine((dados) => dados.senha === dados.ConfirmarSenha, {
  path: ["confirmarSenha"],
  message: "As senhas não coincidem",
});

export type NovaSenhaFormData = z.infer<typeof novaSenhaSchema>;