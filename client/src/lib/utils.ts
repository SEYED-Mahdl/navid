import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format numeric values to Persian numerals
export function toPersianNumbers(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (match) => persianDigits[parseInt(match)]);
}

// Format rating to stars (1-5 scale)
export function formatRating(rating: number, max: number = 50): number {
  return (rating / max) * 5;
}

// Get full stars count for ratings
export function getFullStars(rating: number): number {
  return Math.floor(rating);
}

// Get half stars count for ratings
export function getHalfStars(rating: number): number {
  return Math.round(rating) > Math.floor(rating) ? 1 : 0;
}

// Get empty stars count for ratings
export function getEmptyStars(rating: number): number {
  return 5 - Math.ceil(rating);
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours > 0) {
    return `${toPersianNumbers(hours)} ساعت و ${toPersianNumbers(remainingMinutes)} دقیقه`;
  }
  
  return `${toPersianNumbers(remainingMinutes)} دقیقه`;
}
