import React from "react";
import { features_items } from "@/constants";
import { FeatureSectionProps } from "@/types";
import { FeaturesSectionComponent } from "../features-section-component";

export function FeaturesSection() {
  const featureSectionProps: FeatureSectionProps = {
    badge: "Features",
    items: features_items,
    title: "Cutting-edge features for advanced analytics",
    description:
      " Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
  };

  return <FeaturesSectionComponent {...featureSectionProps} />;
}
