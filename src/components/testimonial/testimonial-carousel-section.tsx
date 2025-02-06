import React from "react";
import Image from "next/image";
import { Padding } from "../padding";
import { Button } from "../ui/button";
import { testimonial_carousel_items } from "@/constants";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export function TestimonialCarouselSection() {
  return (
    <Padding className="relative overflow-hidden py-24">
      <section className="flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl font-bold">Don’t just take our word for it</h1>
            <p className="text-xl text-neutral-500">
              Hear from some of our amazing customers who are automating their finances.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant={"outline"}>Our customers</Button>
            <Button variant={"primary"}>Create account</Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="w-full flex gap-8">
            {testimonial_carousel_items.map(
              ({ image, name, job_company, job_title, testimonial }, index) => (
                <div
                  key={index}
                  className="group cursor-pointer relative h-[480px] w-[360px] flex-shrink-0 bg-slate-200 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    width={800}
                    height={1120}
                    className="object-cover"
                  />

                  <div className="absolute h-fit w-full left-0 bottom-0">
                    <div className="backdrop-blur-sm bg-white/30 text-white border px-5 py-6 m-6">
                      <div className="group-hover:h-fit group-hover:mb-6 transition-all duration-500 ease-out h-0 text-xl font-semibold">
                        <span className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-out">
                          {testimonial}
                        </span>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star className="h-5 w-5 fill-white" key={index} />
                        ))}
                      </div>
                      <div className="text-3xl font-semibold mb-3">{name}</div>
                      <div className="text-lg font-semibold">{job_title}</div>
                      <div className="font-extralight">{job_company}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="flex gap-8">
            <Button className="h-14 w-14 rounded-full" variant={"outline"} size={"icon"}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button className="h-14 w-14 rounded-full" variant={"outline"} size={"icon"}>
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </Padding>
  );
}
