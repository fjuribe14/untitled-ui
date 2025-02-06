import Image from "next/image";
import { Padding } from "./padding";
import { cn } from "@/lib/utils";

export function ImageAndComponent({
  children,
  image = "/testimonial-1.jpeg",
  imagePosition = "left",
}: {
  image?: string;
  imagePosition?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <Padding className="py-24">
      <section className="flex flex-col lg:flex-row lg:items-stretch w-full h-fit lg:h-[450px] bg-primary-800 rounded-3xl overflow-hidden">
        <Image
          width={500}
          height={500}
          alt="Testimonial"
          src={image}
          className={cn(
            "w-full h-[250px] lg:w-2/5 lg:h-full object-cover object-center flex-shrink-0",
            imagePosition === "right" && "lg:order-1"
          )}
        />
        <div className="flex flex-col justify-center flex-1 p-16">{children}</div>
      </section>
    </Padding>
  );
}
