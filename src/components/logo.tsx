import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image className="h-8 w-8" src="/Logomark.svg" alt="Untitled UI" width={100} height={100} />
      <h1 className="text-lg font-bold">Untitled UI</h1>
    </div>
  );
}
