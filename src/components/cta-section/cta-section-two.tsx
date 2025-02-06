import { ImageAndComponent } from "@/components/components";
import { Button } from "../ui/button";

export function CtaSectionTwo() {
  return (
    <ImageAndComponent image="/testimonial-2.jpeg" imagePosition="right">
      <div className="flex flex-col">
        <h5 className="text-3xl lg:text-4xl font-semibold text-white mb-5">Give us a shot</h5>

        <span className="text-base lg:text-xl font-extralight text-white mb-12">
          Join over 4,000+ startups already growing with Untitled.
        </span>

        <div className="flex space-x-3">
          <Button variant={"outline"}>Learn more</Button>
          <Button variant={"primary"}>Get started</Button>
        </div>
      </div>
    </ImageAndComponent>
  );
}
