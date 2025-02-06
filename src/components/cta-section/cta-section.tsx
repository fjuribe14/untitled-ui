import { Button } from "@/components/ui/button";
import { Padding } from "@/components/components";

export function CtaSection() {
  return (
    <section className=" bg-[#F9FAFB] py-24">
      <Padding className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-5xl">No long-term contracts.</h3>
          <h3 className="font-semibold text-5xl">No catches.</h3>
          <p className="text-xl text-neutral-500 mt-6 mb-12">Start your 30-day free trial today.</p>
          <div className="flex items-center space-x-3">
            <Button variant={"outline"}>Learn more</Button>
            <Button variant={"primary"}>Get started</Button>
          </div>
        </div>
        <div className="bg-neutral-300 h-[496px]">
          <div className="grid grid-cols-2"></div>
          <div className=""></div>
        </div>
      </Padding>
    </section>
  );
}
