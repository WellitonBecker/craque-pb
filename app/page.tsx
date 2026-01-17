import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans text-white ">
      <main className="flex min-h-screen w-full max-w-6xl flex-col px-4 ">
        <div className="h-16 ">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-zinc-300 font-light">
            Estatísticas do Pretinho Básico
          </p>
        </div>
        <Card className="gap-2 bg-[#132e20] bg-linear-to-tr from-[#132e20] via-[#060a09] to-[#132e20] border border-green-800/30 shadow-2xl shadow-primary/20">
          <CardHeader>
            <CardTitle className="text-start text-sm uppercase font-semibold text-primary">
              <Trophy className="inline-block mr-2 h-6 w-6" />
              Craque da última edição
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row gap-6 items-center">
            <Avatar className="size-40 border-2 border-primary/50">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-between h-full gap-4 text-muted/80">
              <h1 className="text-4xl font-bold text-primary">Potter</h1>
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
      </main>
    </div>
  );
}
