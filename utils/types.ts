export interface Link {
  id: number;
  url: string;
  type: string | null;
}

export interface Project {
  id: number;
  name: string;
  role: string;
  description: string;
  links: Link[];
}
