import { LucideIcon } from "lucide-react";

export default interface ButtonProps {
    buttonType: string;
    text: string;
    func: () => void;
    icon?: LucideIcon;
}