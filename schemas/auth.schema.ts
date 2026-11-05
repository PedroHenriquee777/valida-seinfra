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