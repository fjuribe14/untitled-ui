import React from "react";
import { Padding } from "../padding";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TestimonialCarouselSection() {
  return (
    <Padding className="relative overflow-hidden py-24">
      <section className="flex flex-col gap-16">
        <div className="flex gap-8">
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
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-[480px] w-[360px] flex-shrink-0 bg-slate-200"></div>
            ))}
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
