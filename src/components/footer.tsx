import { Logo } from "./logo";
import { Badge } from "./ui/badge";
import { Padding } from "./padding";
import { footer_links } from "@/constants";

export function Footer() {
  return (
    <Padding className="flex flex-col justify-end space-y-16 pt-24 pb-8 lg:pb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
        {footer_links.map((_, index) => (
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
      <div className="flex flex-col md:flex-row lg:items-center lg:justify-between gap-4 pt-8 border-t ">
        <Logo />
        <span className="text-base font-light text-neutral-500">
          © 2077 Untitled UI. All rights reserved.
        </span>
      </div>
    </Padding>
  );
}
