"use client";

import React from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

export function FaqItemCollapse({
  body,
  title,
  open = false,
}: {
  open?: boolean;
  body: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2 border-b">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <CollapsibleTrigger asChild>
          <span className="cursor-pointer hover:text-primary text-neutral-500">
            {isOpen ? <CircleMinus className="h-4 w-4" /> : <CirclePlus className="h-4 w-4" />}
          </span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="px-4 text-base text-neutral-500 pb-8">
        {body}
      </CollapsibleContent>
    </Collapsible>
  );
}
