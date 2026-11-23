"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import {
  novaSenhaSchema,
  type NovaSenhaFormData,
} from "@/schemas/auth.schema";

type EtapaNovaSenhaProps = {
  onVoltar: () => void;
  onConcluir: () => void;
};