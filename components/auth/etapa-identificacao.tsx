"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import {
    type IdentificacaoFormData,
}   from "@/schemas/auth.schema"
