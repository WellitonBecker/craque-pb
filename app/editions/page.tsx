import FormCreate from "./form-create";
import TableEditions from "./table";

const dataVotes = [
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Rafa Meneg",
  },
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Léo",
  },
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Adans",
  },
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Rafa Meneg",
  },
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Léo",
  },
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Adans",
  },
  {
    date: "27/01/2026",
    edition: "13h",
    vote: "Porã",
    integral: "Rafa Meneg",
  },
];

export default function EditionsPage() {
  return (
    <div className="flex-1 bg-black font-sans text-white py-4 px-4 flex flex-col gap-8">
      <FormCreate />
      <TableEditions dataVotes={dataVotes} />
    </div>
  );
}
