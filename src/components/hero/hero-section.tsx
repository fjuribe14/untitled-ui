import { Padding } from "../padding";

export function HeroSection() {
  return (
    <Padding>
      <section className="flex flex-col h-[1080px] py-8">
        <div className="relative rounded-3xl w-full h-[674px] bg-neutral-200">
          <div className="rounded-xl w-full max-w-[800px] h-[460px] absolute top-[80%] left-1/2 -translate-x-1/2 bg-neutral-300">
            <div className="relative w-full h-full">
              <div className="bg-neutral-400 rounded-full w-60 h-60 absolute -bottom-4 -right-20"></div>
            </div>
          </div>
        </div>
      </section>
    </Padding>
  );
}
