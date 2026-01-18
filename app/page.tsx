import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  CalendarIcon,
  Clock,
  Crown,
  Frown,
  Heart,
  Trophy,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans text-white py-4 ">
      <main className="flex min-h-screen w-full max-w-4xl min-w-xs flex-col px-4 gap-4 ">
        <div className="h-16 ">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-zinc-300 font-light">
            Estatísticas do Pretinho Básico
          </p>
        </div>
        <Card className="gap-2 bg-[#132e20] bg-linear-to-tr from-[#132e20] via-[#0f1816] to-[#132e20] border border-[#14201d]">
          <CardHeader>
            <CardTitle className="text-start text-sm uppercase font-semibold text-primary">
              <Trophy className="inline-block mr-2 h-6 w-6" />
              Craque da última edição
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-6 items-center">
            <Avatar className="size-40 border-2 border-primary/50">
              <AvatarImage src="/pora.png" alt="Porã Bernardes" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center sm:items-start justify-between h-full gap-4 text-muted/80">
              <h1 className="text-4xl font-bold text-primary">Porã</h1>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">16/01/2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Turno 13h</span>
                </div>
              </div>
              <Badge className="px-6 py-2 bg-primary/10 text-primary font-semibold text-lg border border-green-800/30">
                8<span className="text-sm text-muted/80">votos recebidos</span>
              </Badge>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="gap-2 bg-[#132e20] bg-linear-to-tr from-[#132e20] via-[#0f1816] to-[#132e20] border-[#14201d]">
            <CardHeader>
              <CardTitle className="text-start text-sm w-full flex justify-between uppercase font-semibold text-muted/70">
                Maior Vencedor
                <Crown className="inline-block mr-2 h-4 w-4 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-2 items-center">
              <Avatar className="size-14 border-2 border-primary/50">
                <AvatarImage src="/pora.png" alt="Porã Bernardes" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-xl font-bold text-muted">Porã</h1>
                <div className="flex text-sm gap-1">
                  <span className="text-primary">8</span>
                  <span className="text-muted/70">títulos</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="gap-2 bg-[#4a3317] bg-linear-to-tr from-[#4a3317] via-[#0f1816] to-[#4a3317] border-[#14201d]">
            <CardHeader>
              <CardTitle className="text-start text-sm w-full flex justify-between uppercase font-semibold text-muted/70">
                Maior Puxa saco
                <Heart className="inline-block mr-2 h-4 w-4 text-amber-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-2 items-center">
              <Avatar className="size-14 border-2 border-amber-500/50">
                <AvatarImage src="/pora.png" alt="Porã Bernardes" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-xl font-bold text-muted">Porã</h1>
                <div className="flex text-sm gap-1">
                  <span className="text-amber-400">4x → Fetter</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="gap-2 bg-[#4a1a17] bg-linear-to-tr from-[#4a1a17] via-[#0f1816] to-[#4a1a17] border-[#14201d]">
            <CardHeader>
              <CardTitle className="text-start text-sm w-full flex justify-between uppercase font-semibold text-muted/70">
                O Injustiçado
                <Frown className="inline-block mr-2 h-4 w-4 text-red-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-2 items-center">
              <Avatar className="size-14 border-2 border-red-500/50">
                <AvatarImage src="/pora.png" alt="Porã Bernardes" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-xl font-bold text-muted">Porã</h1>
                <div className="flex text-sm gap-1">
                  <span className="text-red-500">8</span>
                  <span className="text-muted/70">votos sem título</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="gap-2 bg-[#0f1816] border-[#14201d]">
          <CardHeader>
            <CardTitle className="text-start text-sm w-full uppercase font-semibold text-muted/70">
              <CalendarIcon className="inline-block mr-2 h-6 w-6" />
              Últimas Edições
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {[1, 2, 3, 4, 5].map((edition, i) => (
              <div
                key={i}
                className="flex w-full gap-4 hover:bg-[#14201d] py-2 px-4 rounded-lg cursor-pointer not-first:border-t not-first:border-[#14201d]"
              >
                <Avatar className="size-12">
                  <AvatarImage src="/pora.png" alt="Porã Bernardes" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col items-start justify-between text-muted/80 ">
                  <h1 className="text-lg font-medium text-muted">Porã</h1>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs font-extralight">
                        16/01/2026
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs font-extralight">13h</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
