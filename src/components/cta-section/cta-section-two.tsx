import Image from "next/image";
import { Padding } from "@/components/components";
import { Button } from "../ui/button";

export function CtaSectionTwo() {
  return (
    <Padding className="py-24">
      <section className="lg:flex lg:items-stretch w-full h-[450px] bg-primary-800 rounded-3xl overflow-hidden">
        <Image
          width={500}
          height={500}
          alt="Testimonial"
          src="/testimonial-2.jpeg"
          className="w-2/5 h-full object-cover object-center flex-shrink-0 order-1"
        />
        <div className="flex flex-col justify-center flex-1 p-16 order-0">
          <div className="flex flex-col">
            <h5 className="text-4xl font-semibold text-white mb-5">Give us a shot</h5>

            <span className="text-xl font-extralight text-white mb-12">
              Join over 4,000+ startups already growing with Untitled.
            </span>

            <div className="flex space-x-3">
              <Button variant={"outline"}>Learn more</Button>
              <Button variant={"primary"}>Get started</Button>
            </div>
          </div>
        </div>
      </section>
    </Padding>
  );
}
