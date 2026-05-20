export interface CareerEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ProjectEntry {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
}
