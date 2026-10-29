
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type ProfileTabsProps = {
  perfil: "empresa" | "setor";
  setPerfil: (perfil: "empresa" | "setor") => void;
};

const tabClass =
  "h-full min-w-0 cursor-pointer whitespace-normal break-words px-1 text-xs font-semibold leading-tight text-center text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary sm:text-sm";

export function ProfileTabs({
  perfil,
  setPerfil,
}: ProfileTabsProps) {
  return (
    <Tabs
      value={perfil}
      onValueChange={(value) => {
        if (value === "empresa" || value === "setor") {
          setPerfil(value);
        }
      }}
    >
      <TabsList className="grid h-11 w-full grid-cols-2 overflow-hidden rounded-lg border border-border bg-card p-0">
        <TabsTrigger value="empresa" className={tabClass}>
          Empresa
        </TabsTrigger>

        <TabsTrigger value="setor" className={tabClass}>
          Administrador e Setores
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
