import React from "react";
import { Badge } from "../ui/badge";
import { Padding } from "../padding";

export function FeaturesSection() {
  return (
    <Padding>
      <section className="flex flex-col gap-16 pb-24">
        <div className="max-w-2xl w-full text-center mx-auto space-y-5">
          <div className="space-y-4">
            <Badge className="text-xs border-primary-200" variant={"primary"}>
              Features
            </Badge>

            <h1 className="text-4xl font-bold">Cutting-edge features for advanced analytics</h1>
          </div>
          <p className="text-xl text-neutral-500">
            Powerful, self-serve product and growth analytics to help you convert, engage, and
            retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[1, 2, 3].map((item, index) => (
            <div className="flex flex-col items-center justify-center text-center" key={index}>
              <div className="w-16 h-16 bg-neutral-200 border border-neutral-300 rounded-xl"></div>
              <h4 className="text-xl font-bold mt-4">Integrations</h4>
              <p className="text-base line-clamp-2 text-ellipsis text-neutral-500">
                Work faster and smarter by integrating directly with Notion, right in the app.
              </p>

              <div className="text-primary cursor-pointer font-semibold mt-5">
                {"View integration ->"}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Padding>
  );
}
