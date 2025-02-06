import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function HeroChartArea({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col p-8", className)}>
      <h4 className="text-lg font-semibold">Users over time</h4>
      <Image src="/chart-area.svg" alt="Chart" width={800} height={800} />
      {children}
    </div>
  );
}
