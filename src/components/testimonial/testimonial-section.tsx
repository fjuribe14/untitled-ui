import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageAndComponent } from "@/components/image-and-component";

export function TestimonialSection() {
  return (
    <ImageAndComponent image="/testimonial-1.jpeg">
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image alt="Star" width={20} height={20} key={index} src={"/star.svg"} />
          ))}
        </div>

        <h5 className="text-xl lg:text-4xl text-white mb-8">
          Love the simplicity of the service and the prompt customer support. We can’t imagine
          working without it.
        </h5>

        <span className="text-base lg:text-lg text-white mb-1">— Renee Wells</span>
        <span className="text-sm lg:text-base font-extralight text-white mb-8">
          Product Designer, Quotient
        </span>

        <div className="flex space-x-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-3 w-3  rounded-full",
                index !== 0 && "bg-primary",
                index === 0 && "bg-primary-50"
              )}></div>
          ))}
        </div>
      </div>
    </ImageAndComponent>
  );
}
