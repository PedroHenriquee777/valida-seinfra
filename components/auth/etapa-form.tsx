import type { ComponentProps, ReactNode } from "react";
import { ChevronLeft, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button"

type EtapaFormProps = {
    id: string;
    titulo: string;
    descricao: string;
    enviando: boolean;
    onVoltar: () => void;
    onSubmit: ComponentProps<"form">["onSubmit"];
    children: ReactNode;
};

export function EtapaForm({
    id,
    titulo,
    descricao,
    enviando,
    onVoltar,
    onSubmit,
    children,
}: EtapaFormProps){

};