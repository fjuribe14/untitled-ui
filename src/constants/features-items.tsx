import Image from "next/image";
import { FeatureItems } from "@/types";

export const features_items: FeatureItems[] = [
  {
    title: "Share team inboxes",
    action_label: "Learn more",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: (
      <Image
        width={80}
        height={80}
        className="h-6 w-6"
        alt={"Message Chat Circle"}
        src={"/message-chat-circle.svg"}
      />
    ),
  },
  {
    title: "Deliver instant answers",
    action_label: "Learn more",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: <Image className="h-6 w-6" height={80} width={80} src={"/zap.svg"} alt={"Zap"} />,
  },
  {
    title: "Manage your team with reports",
    action_label: "Learn more",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icon: (
      <Image
        width={80}
        height={80}
        className="h-6 w-6"
        alt={"Chart Breakout Square"}
        src={"/chart-breakout-square.svg"}
      />
    ),
  },
];
