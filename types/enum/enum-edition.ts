export enum EditionID {
  "13H" = 1,
  "18H" = 2,
}

export const EditionLabel: Record<EditionID, string> = {
  [EditionID["13H"]]: "13h",
  [EditionID["18H"]]: "18h",
};

export const EditionLabelOptions = [
  {
    id: EditionID["13H"],
    label: EditionLabel[EditionID["13H"]],
  },
  {
    id: EditionID["18H"],
    label: EditionLabel[EditionID["18H"]],
  },
];
