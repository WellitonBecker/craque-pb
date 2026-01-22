import Link from "next/link";
import { Button } from "../ui/button";
import { ChartColumn, ClipboardList, Trophy } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky flex flex-col items-center top-0 z-40 w-full py-2  dark:bg-[#0f1816]/95 backdrop-blur supports-backdrop-filter:bg-[background]/60 gap-2">
      <div className="max-w-4xl flex items-center justify-center w-full px-4">
        <div className="flex-1">
          <Link href={`/`} className="flex flex-row gap-2 items-center">
            <Trophy className="text-primary size-8" />
            <div className="flex flex-col">
              <h1 className="text-md font-semibold text-primary">
                Craque do PB
              </h1>
              <span className="text-muted/70 font-extralight text-[10px]">
                Pretinho Básico
              </span>
            </div>
          </Link>
        </div>
        <nav className="text-muted/70 text-[10px] hidden sm:flex sm:flex-row sm:gap-2 sm:items-center sm:justify-end">
          <Button
            className="font-normal hover:text-muted hover:bg-none"
            asChild
            variant={"ghost"}
          >
            <Link href={`/`}>
              <Trophy className="text-primary size-4" />
              Dashboard
            </Link>
          </Button>
          <Button
            className="font-normal hover:text-muted hover:bg-none"
            asChild
            variant={"ghost"}
          >
            <Link href={`/1/dashboard`}>
              <ClipboardList className="size-4" />
              Registros
            </Link>
          </Button>
          <Button
            className="font-normal hover:text-muted hover:bg-none"
            asChild
            variant={"ghost"}
          >
            <Link href={`/1/dashboard`}>
              <ChartColumn className="size-4" />
              Estatísticas
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
