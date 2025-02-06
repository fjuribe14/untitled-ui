export type FooterLink = {
  label: string;
  children: FooterLinkChild[];
};

export type FooterLinkChild = {
  href: string;
  isNew: boolean;
  label: string;
  component: React.ReactNode | null;
};
