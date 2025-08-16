import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDate = (date: Date | string, config?: Intl.DateTimeFormatOptions): string => {
 const defaultOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  };
  const options = config ? config : defaultOptions;
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleString('en-Us', options);
}