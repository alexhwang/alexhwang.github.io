import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Alex Hwang",
  EMAIL: "alexhwang at stanford.edu",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 10,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Alex Hwang — Stanford Applied Physics PhD student",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Alex Hwang — Stanford Applied Physics PhD student — Blog ",
};

export const WORK: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "My academic and research background.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my research projects and side projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/alexyhwang",
  },
  {
    NAME: "Google Scholar",
    HREF: "https://scholar.google.com/citations?user=0g3wHc0AAAAJ&hl=en",
  }
];
