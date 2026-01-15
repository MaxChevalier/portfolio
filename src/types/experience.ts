export type Mission = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  tasks: string[];
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  missions: Mission[];
};
