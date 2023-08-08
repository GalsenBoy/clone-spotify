import { icons } from "lucide-react";

type IconProps = {
  name: string;
  color: string;
  size: number;
};

export default function Icon({ name, color, size }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons]; // Assertion de type
  if (!LucideIcon) {
    // Gérer le cas où l'icône n'est pas trouvée
    return null;
  }
  return <LucideIcon color={color} size={size} />;
}
