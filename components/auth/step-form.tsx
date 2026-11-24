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
}: EtapaFormProps) {
    return (
        <>
                <h1 className="text-3xl font-bold text-primary">{titulo}</h1>

                <p className="mt-4 text-lg font-semibold text-primary">{descricao}</p>

                <form
                    id={id}
                    noValidate
                    onSubmit={onSubmit}
                    className="mt-8 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-5">{children}</div>
        
                    <div className="flex justify-center gap-4">
                        <Button
                        type="button"
                        variant="outline"
                        disabled={enviando}
                        onClick={onVoltar}
                        className="h-11 flex-1 cursor-pointer rounded-lg border-blue-600 text-blue-600 hover:text-blue-600 sm:w-44 sm:flex-none"
                    >
                        <ChevronLeft aria-hidden="true" />
                        Voltar
                    </Button>

                    <Button
                        type="submit"
                        disabled={enviando}
                        aria-busy={enviando}
                        className="h-11 flex-1 cursor-pointer rounded-lg    bg-blue-600 text-primary-foreground hover:bg-blue-600/90 sm:w-44 sm:flex-none"
                    >
                        {enviando ? (
                            <>
                                <LoaderCircle className="animate-spin"  aria-hidden="true"/>
                                Enviando...
                            </>
                        ) : (
                            "Continuar" 
                        )}
                    </Button>
                </div>
            </form>
        </>
    );
}