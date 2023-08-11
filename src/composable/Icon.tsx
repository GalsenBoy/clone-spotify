import { icons } from "lucide-react";

type IconProps = {
  name: string;
  color: string;
  size: number;
  className?: string;
};

export default function Icon({ name, color, size, className }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons]; // Assertion de type
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon className={className} color={color} size={size} />;
}
