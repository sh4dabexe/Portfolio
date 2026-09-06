export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  badge?: string;
  primary?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    handle: "@sh4dabexe",
    url: "https://instagram.com/sh4dabexe",
    badge: "Most Active",
    primary: true,
  },
  {
    platform: "Telegram",
    handle: "@sh4dabexe",
    url: "https://t.me/sh4dabexe",
    badge: "Direct Chat",
    primary: true,
  },
  {
    platform: "GitHub",
    handle: "sh4dabexe",
    url: "https://github.com/sh4dabexe",
    badge: "Code & Repos",
  },
  {
    platform: "LinkedIn",
    handle: "Shadab Alam",
    url: "https://www.linkedin.com/in/sh4dabexe/",
    badge: "Connect",
  }
];
