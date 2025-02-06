import { cn } from "@/lib/utils";

export function Padding({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("px-default lg:px-lg", className)}>{children}</div>;
}
