import Image from "next/image";

export function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <div className="flex flex-nowrap items-center text-lg font-bold gap-3">
      <Image className="h-8 w-8" src="/Logomark.svg" alt="Untitled UI" width={100} height={100} />
      {showText && <h1 className="whitespace-nowrap">Untitled UI</h1>}
    </div>
  );
}
