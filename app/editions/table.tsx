import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface TableEditionsProps {
  dataVotes: {
    date: string;
    edition: string;
    vote: string;
    integral: string;
  }[];
}

export default function TableEditions({ dataVotes }: TableEditionsProps) {
  return (
    <Card className="bg-[#132e20] bg-linear-to-tr from-[#132e20] via-[#0f1816] to-[#132e20] border-[#14201d]">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-none">
              <TableHead className="text-muted/80 text-[1rem] font-bold w-25">
                Data
              </TableHead>
              <TableHead className="text-muted/80 text-[1rem] font-bold w-16">
                Edição
              </TableHead>
              <TableHead className="text-muted/80 text-[1rem] font-bold">
                Integrante
              </TableHead>
              <TableHead className="text-muted/80 text-[1rem] font-bold">
                Voto
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataVotes.map((invoice, i) => (
              <TableRow key={i}>
                <TableCell className="text-muted/80">{invoice.date}</TableCell>
                <TableCell className="text-muted/80">
                  {invoice.edition}
                </TableCell>
                <TableCell className="text-muted/80">
                  {invoice.integral}
                </TableCell>
                <TableCell className="text-muted/80">{invoice.vote}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
