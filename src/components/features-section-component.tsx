import { Badge } from "./ui/badge";
import { Padding } from "./padding";
import { FeatureSectionProps } from "@/types";

export function FeaturesSectionComponent({
  badge,
  title,
  items,
  description,
}: FeatureSectionProps) {
  return (
    <Padding>
      <section className="flex flex-col gap-16 pb-24">
        <div className="max-w-2xl text-center mx-auto space-y-5">
          <div className="space-y-4">
            <Badge className="text-xs border-primary-200" variant={"primary"}>
              {badge}
            </Badge>

            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
          <p className="text-xl text-neutral-500">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {items.map(({ title, description, icon, action_label }, index) => (
            <div className="flex flex-col items-center justify-center text-center" key={index}>
              <div className="flex items-center justify-center w-16 h-16 border bg-white shadow-sm rounded-xl p-1">
                {icon}
              </div>
              <h4 className="text-xl font-bold mt-4">{title}</h4>
              <p className="text-base line-clamp-3 text-ellipsis text-neutral-500">{description}</p>

              <div className="text-primary cursor-pointer font-semibold mt-5">
                {`${action_label} ->`}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Padding>
  );
}
