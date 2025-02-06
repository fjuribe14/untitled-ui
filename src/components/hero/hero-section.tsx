import Image from "next/image";
import { HeroForm } from "./hero-form";
import { Padding } from "@/components/padding";
import { HeroChartArea } from "./hero-chart-area";

export function HeroSection() {
  return (
    <Padding className="pt-8 pb-24">
      <section className="flex flex-col lg:h-[1080px] -mx-6">
        <div className="relative flex flex-col lg:rounded-3xl w-full lg:h-[674px] bg-primary-800 py-8 px-5">
          <div className="flex flex-col max-w-3xl m-auto text-center">
            <h1 className="text-4xl lg:text-7xl font-bold text-neutral-50">Grow your users.</h1>
            <h1 className="text-4xl lg:text-7xl font-bold text-neutral-50 mb-6">Smarter.</h1>
            <p className="text-md lg:text-xl text-neutral-300 font-light mb-12">
              Powerful, self-serve product and growth analytics to help you convert, engage, and
              retain more users. Trusted by over 4,000 startups.
            </p>

            <HeroForm className="max-w-md w-full mx-auto" />
          </div>

          <div className="hidden lg:block border rounded-xl shadow-2xl w-full max-w-[280px] lg:max-w-[800px] h-32 lg:h-[460px] absolute top-[80%] left-1/2 -translate-x-1/2 bg-white">
            <HeroChartArea className="relative w-full h-full">
              <Image
                src="/chart-donut.svg"
                alt="Chart"
                width={800}
                height={800}
                className="rounded-full w-60 h-60 absolute -bottom-4 -right-20"
              />
            </HeroChartArea>
          </div>
        </div>
      </section>
    </Padding>
  );
}
