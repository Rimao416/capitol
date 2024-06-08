// orange rgb (255,190,119)
// GREEN rgb(22,103,27)
// BLUE rgb (86,85, 100)

import { VscRemoteExplorer } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { SiGitextensions } from "react-icons/si";
export interface FeatureDataInterface {
  icon: JSX.Element;
  title: string;
  description: string;
  color?: string;
}
export const featureData: FeatureDataInterface[] = [
  {
    icon: <VscRemoteExplorer />,
    title: "Exploration",
    description:
      "Si quelque chose arrive à votre maison ou à toute structure attachée à votre propriété, nous couvrons les réparations sur la reconstruction.",
    color: "green",
  },
  {
    icon: <TfiWrite />,
    title: "Missions de travail",
    description:
      "Découvrez notre plateforme dédiée aux missions de travail, conçue pour faciliter la gestion de vos projets temporaires et de vos missions freelances.",
    color: "orange",
  },
  {
    icon: <SiGitextensions />,
    title: "Sejours prolongés",
    description:
      "Profitez de notre service de séjours prolongés, spécialement conçu pour répondre aux besoins des voyageurs souhaitant séjourner plus longtemps.",
    color: "blue",
  },
];
