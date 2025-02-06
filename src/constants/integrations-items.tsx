import Image from "next/image";
import { FeatureItems } from "@/types";

export const integrations_items: FeatureItems[] = [
  {
    title: "Notion integration",
    action_label: "View integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Image height={80} width={80} src={"/notion.svg"} alt={"Notion"} />,
  },
  {
    title: "Slack integration",
    action_label: "View integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Image height={80} width={80} src={"/slack.svg"} alt={"Slack"} />,
  },
  {
    title: "Google Drive integration",
    action_label: "View integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Image height={80} width={80} src={"/google_drive.svg"} alt={"Google Drive"} />,
  },
  {
    title: "Intercom integration",
    action_label: "View integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Image height={80} width={80} src={"/intercom.svg"} alt={"Intercom"} />,
  },
  {
    title: "Jira integration",
    action_label: "View integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Image height={80} width={80} src={"/jira.svg"} alt={"Jira"} />,
  },
  {
    title: "Dropbox integration",
    action_label: "View integration",
    description: "Work faster and smarter by integrating directly with Notion, right in the app.",
    icon: <Image height={80} width={80} src={"/dropbox.svg"} alt={"Dropbox"} />,
  },
];
