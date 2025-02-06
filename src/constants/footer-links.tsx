import Image from "next/image";
import { FooterLink } from "@/types/footer-link";

export const footer_links: FooterLink[] = [
  {
    label: "Product",
    children: [
      {
        href: "/",
        isNew: false,
        label: "Overview",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Features",
        component: null,
      },
      {
        href: "/",
        isNew: true,
        label: "Solutions",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Tutorials",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Pricing",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Releases",
        component: null,
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        href: "/",
        isNew: false,
        label: "About us",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Careers",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Press",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "News",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Media Kit",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Contact",
        component: null,
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        href: "/",
        isNew: false,
        label: "Blog",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Newsletter",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Events",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Help center",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Tutorials",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Support",
        component: null,
      },
    ],
  },
  {
    label: "Social",
    children: [
      {
        href: "/",
        isNew: false,
        label: "Twitter",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Linkedin",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Facebook",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Github",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "AngelList",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Dribbble",
        component: null,
      },
    ],
  },
  {
    label: "Legal",
    children: [
      {
        href: "/",
        isNew: false,
        label: "Terms",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Privacy",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Cookies",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Licenses",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Settings",
        component: null,
      },
      {
        href: "/",
        isNew: false,
        label: "Contact",
        component: null,
      },
    ],
  },
  {
    label: "Get the app",
    children: [
      {
        href: "/",
        isNew: false,
        label: "Pricing",
        component: (
          <Image
            width={50}
            height={50}
            alt="App Store"
            src={"/appstore.svg"}
            className="h-10 w-full object-contain"
          />
        ),
      },
      {
        href: "/",
        isNew: false,
        label: "Releases",
        component: (
          <Image
            width={50}
            height={50}
            alt="Play Store"
            src={"/playstore.svg"}
            className="h-10 w-full object-contain"
          />
        ),
      },
    ],
  },
];
