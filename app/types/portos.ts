// this for declaring any type of variable, NOTE: this is good for practices and avoid using the word "any" in entire variable.

export type Menu = {
  name: string;
  offsetY: number;
};

export type SocialMedia = {
  link: string;
  icon: string;
};

export type Navbars = {
  frontLogo?: string;
  backLogo?: string;
  title: string;
  data?: Menu[];
};

export type Metadata = {
  title: string;
  description: string;
};

export type Education = {
  name: string;
  major: string;
  gpa?: string;
  time: string;
  image: string;
};

export type Educations = {
  data: Education[];
};

export type Achievement = {
  name: string;
  time: string;
  description: string;
};

export type Achievements = {
  data: Achievement[];
};

export type Experience = {
  name: string;
  time: string;
  position: string;
  type: string;
  description: string;
  showMore: boolean;
};

export type Experiences = {
  data: Experience[];
};

export type Homes = {
  greeting: string;
  name: string;
  passion: Array<string>;
  description: string;
  image: string;
  sm: SocialMedia[];
};

export type Projects = {
  content: any;
  id: number;
  title: string;
  description: string;
  thumbnail: string[];
  slug: string;
  repository?: string;
  website?: string[];
  category?: string;
  tag: string[];
};

export type Tags = {
  id: number;
  name: string;
  image?: string;
};

export type Tool = {
  name: string;
  icon?: string;
};
