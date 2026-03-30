import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(number: string, message?: string) {
  const baseUrl = "https://wa.me/";
  const cleanNumber = number.replace(/\D/g, "");
  const url = new URL(`${baseUrl}${cleanNumber}`);
  if (message) {
    url.searchParams.set("text", message);
  }
  return url.toString();
}

export function getCanonicalUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sterlingedge.co.uk";
  return `${baseUrl}${path}`;
}
