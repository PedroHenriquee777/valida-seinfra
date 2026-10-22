import type { Metadata } from "next";
import Link from "next/link";
import { ChartColumnBig, Lock, Mail} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function PaginaInicial () {
  return (
   <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
      <button className="h-30 w-50 text-white bg-amber-500 border-4 rounded-[25]">Bidding</button>
   </div>
  )
} 