import Image from "next/image";
import { Logo } from "./logo";
import { Padding } from "./padding";
import { Badge } from "./ui/badge";

export function Footer() {
  return (
    <Padding className="flex flex-col justify-end space-y-16 pt-24 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {links.map((_, index) => (
          <div key={index} className="flex flex-col items-start space-y-4 font-semibold">
            <h4>{_.label}</h4>
            {_.children.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-start gap-2 text-base text-primary">
                {item.component ?? item.label}

                {item.isNew && (
                  <Badge
                    className="text-xs border-2 text-primary border-primary"
                    variant={"outline"}>
                    new
                  </Badge>
                )}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-8 border-t ">
        <Logo />
        <span className="text-base font-light text-neutral-500">
          © 2077 Untitled UI. All rights reserved.
        </span>
      </div>
    </Padding>
  );
}

const links = [
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
    label: "Get the app",
    children: [
      {
        href: "/",
        isNew: false,
        label: "Pricing",
        component: (
          <Image
            className="h-10 w-full object-contain"
            src={"/appstore.svg"}
            alt="App Store"
            width={50}
            height={50}
          />
        ),
      },
      {
        href: "/",
        isNew: false,
        label: "Releases",
        component: (
          <Image
            className="h-10 w-full object-contain"
            src={"/playstore.svg"}
            alt="Play Store"
            width={50}
            height={50}
          />
        ),
      },
    ],
  },
];
