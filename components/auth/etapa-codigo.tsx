"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { AuthField } from "@/components/auth/auth-field";
import { EtapaForm } from "@/components/auth/etapa-form";
import { formatCodigo } from "@/lib/formatters";
import { codigoSchema, type CodigoFormData } from "@/schemas/auth.schema";