import {
  ShoppingCart,
  Shirt,
  Coffee,
  HeartPulse,
  Sparkles,
  Wrench,
  Fuel,
  Home,
  Gamepad2,
  Cpu,
  Sofa,
  Dumbbell,
  GraduationCap,
  Landmark,
  Receipt,
  Film,
  MoreHorizontal,
  Wallet,
  Gift,
  Briefcase,
} from "lucide-react";

// Expense categories
export const CATEGORY_ICONS = {
  Food: Coffee,
  Groceries: ShoppingCart,
  Clothing: Shirt,
  Coffee: Coffee,
  Health: HeartPulse,
  Cosmetics: Sparkles,
  "Car Maintenance": Wrench,
  Petrol: Fuel,
  "Home Maintenance": Home,
  Gaming: Gamepad2,
  Electronics: Cpu,
  Furniture: Sofa,
  Gym: Dumbbell,
  School: GraduationCap,
  University: Landmark,
  Bills: Receipt,
  Entertainment: Film,
  Other: MoreHorizontal,
  // Income categories
  Salary: Wallet,
  Gift: Gift,
  Freelance: Briefcase,
};

export function getCategoryIcon(category) {
  return CATEGORY_ICONS[category] || MoreHorizontal;
}