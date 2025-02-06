import { FeatureSectionProps } from "@/types";
import { integrations_items } from "@/constants";
import { FeaturesSectionComponent } from "../features-section-component";

export function IntegrationsSection() {
  const featureSectionProps: FeatureSectionProps = {
    badge: "Integrations",
    items: integrations_items,
    title: "Get more value from your tools",
    description:
      "Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.",
  };

  return <FeaturesSectionComponent {...featureSectionProps} />;
}
