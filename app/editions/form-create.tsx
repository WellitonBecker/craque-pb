"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import z from "zod";
import {
  EditionID,
  EditionLabel,
  EditionLabelOptions,
} from "@/types/enum/enum-edition";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

const formEditionSchema = z.object({
  date: z.date(),
  edition: z.enum(EditionID),
  vote: z.int(),
  integral: z.int(),
});

const integralOptions = [
  { label: "Rafa Meneg", value: 10 },
  { label: "Léo", value: 20 },
  { label: "Adans", value: 30 },
  { label: "Caco", value: 40 },
  { label: "Júnior", value: 50 },
  { label: "Guto", value: 60 },
];

export default function FormCreate() {
  const [formCreateSheetIsOpen, setFormCreateSheetIsOpen] = useState(false);
  const formEdition = useForm<z.infer<typeof formEditionSchema>>({
    resolver: zodResolver(formEditionSchema),
    defaultValues: {
      date: new Date(),
      edition: EditionID["13H"] || EditionID["18H"],
      vote: undefined,
      integral: undefined,
    },
  });

  const handleFormCreateSheetOpenChange = () => {
    formEdition.reset();
    setFormCreateSheetIsOpen(false);
  };

  const onSubmitLogin = (data: z.infer<typeof formEditionSchema>) => {
    console.log(data);
  };

  return (
    <Dialog
      open={formCreateSheetIsOpen}
      onOpenChange={handleFormCreateSheetOpenChange}
    >
      <div className="flex justify-end mt-4">
        <Button
          className="bg-[#132e20]/60 hover:bg-[#132e20]/80 text-md text-muted border border-muted px-4 py-2 font-semibold"
          onClick={() => setFormCreateSheetIsOpen(true)}
        >
          Registrar Edição
        </Button>
      </div>
      <form
        id="form-project"
        onSubmit={formEdition.handleSubmit(onSubmitLogin)}
      >
        <DialogContent className="flex flex-col px-4 justify-between pb-4 bg-[#0f1816] text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Registrar Edição</DialogTitle>
          </DialogHeader>
          <Card className="w-full p-4 bg-white/10 border border-muted text-white">
            <CardContent>
              <FieldGroup className="items-center">
                <Controller
                  name="date"
                  control={formEdition.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="items-center"
                    >
                      <div className="max-w-60">
                        <Calendar
                          className="border rounded-xl"
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => {
                            const dateToday = new Date();
                            dateToday.setHours(0, 0, 0, 0);
                            return date > dateToday;
                          }}
                          locale={ptBR}
                        />
                      </div>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="edition"
                  control={formEdition.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="items-center"
                    >
                      <RadioGroup
                        defaultValue="comfortable"
                        className="w-fit flex flex-row gap-8 items-center justify-center"
                      >
                        {EditionLabelOptions.map((editionOption, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <RadioGroupItem
                              value={editionOption.id.toString()}
                              id={editionOption.id.toString()}
                            />
                            <Label htmlFor={editionOption.id.toString()}>
                              {EditionLabel[editionOption.id]}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <div className="flex gap-2 flex-col w-full">
                  {integralOptions.map((option, index) => (
                    <div
                      key={option.value}
                      className="flex flex-row w-full items-center border p-2 rounded-xl"
                    >
                      <Controller
                        name="integral"
                        control={formEdition.control}
                        render={({ field, fieldState }) => (
                          <Field className="items-center">
                            <FieldLabel>{option.label}</FieldLabel>
                            <Input
                              {...field}
                              disabled
                              value={option.value}
                              hidden
                            />
                          </Field>
                        )}
                      />
                      <Controller
                        name="vote"
                        control={formEdition.control}
                        render={({ field, fieldState }) => (
                          <Field
                            data-invalid={fieldState.invalid}
                            className="items-center flex-row justify-end gap-2"
                          >
                            <FieldLabel>Votou em</FieldLabel>
                            <Select>
                              <SelectTrigger className="w-full min-w-24">
                                <SelectValue placeholder="Selecione..." />
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                {integralOptions
                                  .filter((o) => o.value != option.value)
                                  .map((o, index) => (
                                    <SelectItem
                                      key={o.value}
                                      value={o.value.toString()}
                                    >
                                      {o.label}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </Field>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </FieldGroup>
            </CardContent>
          </Card>
          <DialogFooter>
            <div className="w-full flex gap-2 justify-end mt-8">
              <Button
                type="submit"
                form="form-project"
                className="flex-1 rounded-xl bg-primary/60 hover:bg-primary/40 text-white px-4 py-2 font-semibold border border-primary/40 hover:border-primary"
              >
                Salvar
              </Button>
              <DialogClose>
                <Button className="rounded-xl border-none" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
