import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Padding } from "@/components/components";

export function CtaSection() {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <Padding className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-5xl">No long-term contracts.</h3>
          <h3 className="font-semibold text-5xl">No catches.</h3>
          <p className="text-xl text-neutral-500 mt-6 mb-12">Start your 30-day free trial today.</p>
          <div className="flex items-center space-x-3">
            <Button variant={"outline"}>Learn more</Button>
            <Button variant={"primary"}>Get started</Button>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="flex justify-center items-end gap-4">
            <Image
              alt="cta-1"
              width={400}
              height={400}
              src="/cta-1.jpg"
              className="h-40 w-40 object-cover object-center"
            />
            <Image
              alt="cta-2"
              width={400}
              height={400}
              src="/cta-2.jpg"
              className="h-60 w-40 object-cover object-center"
            />
          </div>
          <div className="flex justify-center items-start gap-4">
            <Image
              alt="cta-3"
              width={400}
              height={400}
              src="/cta-3.png"
              className="h-32 w-48 object-cover object-center"
            />
            <Image
              alt="cta-4"
              width={400}
              height={400}
              src="/cta-4.jpg"
              className="h-60 w-40 object-cover object-center"
            />
            <Image
              alt="cta-5"
              width={400}
              height={400}
              src="/cta-5.jpg"
              className="h-32 w-48 object-cover object-center"
            />
          </div>
        </div>
      </Padding>
    </section>
  );
}
