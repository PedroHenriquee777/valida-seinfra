import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabClass =
  "h-full rounded-none text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="setor">
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