import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Padding } from "../padding";

export function TestimonialSection() {
  return (
    <Padding className="py-24">
      <section className="lg:flex lg:items-stretch w-full h-[450px] bg-primary-800 rounded-3xl overflow-hidden">
        <Image
          width={500}
          height={500}
          alt="Testimonial"
          src="/testimonial-1.jpeg"
          className="w-2/5 h-full object-cover object-center flex-shrink-0"
        />
        <div className="flex flex-col justify-center flex-1 p-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image alt="Star" width={20} height={20} key={index} src={"/Star.svg"} />
              ))}
            </div>

            <h5 className="text-4xl text-white mb-8">
              Love the simplicity of the service and the prompt customer support. We can’t imagine
              working without it.
            </h5>

            <span className="text-lg text-white mb-1">— Renee Wells</span>
            <span className="text-base font-extralight text-white mb-8">
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
        </div>
      </section>
    </Padding>
  );
}
