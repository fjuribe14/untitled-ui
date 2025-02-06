import { Padding } from "@/components/padding";
import { FaqItemCollapse } from "./faq-item-collapse";

export function FaqSection() {
  return (
    <Padding className="py-24">
      <section className="flex flex-col gap-16">
        <div className="max-w-3xl text-center mx-auto space-y-5 mb-16">
          <h1 className="text-4xl font-bold">Frequently asked questions</h1>
          <p className="text-xl text-neutral-500">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="max-w-3xl w-full mx-auto space-y-5 ">
          {[
            "Is there a free trial available?",
            "Can I change my plan later?",
            "What is your cancellation policy?",
            "Can other info be added to an invoice?",
            "How does billing work?",
            "How do I change my account email?",
          ].map((title, index) => (
            <FaqItemCollapse
              key={index}
              title={title}
              open={index === 0}
              body={`Yes, you can try us for free for 30 days. If you want, we’ll provide you with a
                  free, personalized 30-minute onboarding call to get you up and running as soon as
                  possible.`}
            />
          ))}
        </div>
      </section>
    </Padding>
  );
}
