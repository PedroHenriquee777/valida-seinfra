
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
  "h-full cursor-pointer rounded-none text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary";

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
