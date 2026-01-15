export type Project = {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  status: "Terminé" | "En cours" | "À venir";
  link?: string;
  github?: string;
  img?: string;
  type: "Projet d'étude" | "Projet personnel" | "Projet d'étude / Personnel";
  role?: string;
};