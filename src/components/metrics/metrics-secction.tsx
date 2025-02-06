import React from "react";
import { Padding } from "../padding";

export function MetricsSection() {
  return (
    <Padding className="py-24">
      <section id="metrics" className="flex flex-col gap-16">
        <div className="max-w-2xl space-y-5 text-center mx-auto">
          <h1 className="text-4xl font-bold"> Unleash the full power of data</h1>
          <p className="text-xl text-neutral-500">
            Everything you need to convert, engage, and retain more users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-16 py-16 w-full lg:h-[250px] bg-primary-50">
          {[
            {
              label: "400+",
              title: "Projects completed",
            },
            {
              label: "600%",
              title: "Return on investment",
            },
            {
              label: "10k",
              title: "Global downloads",
            },
          ].map((item, index) => (
            <div
              className="flex flex-col items-center justify-center text-center space-y-3 font-bold"
              key={index}>
              <span className="text-6xl font-bold text-primary">{item.label}</span>
              <p className="text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </Padding>
  );
}
