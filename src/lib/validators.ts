export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => /^[+]?[\d\s-]{10,15}$/.test(v.trim());
export const isFilled = (v: string, min = 2) => v.trim().length >= min;

export type Errors = Record<string, string>;

export function validate(
  fields: Record<string, string>,
  rules: Record<string, "name" | "email" | "phone" | "text" | "optional">,
): Errors {
  const errors: Errors = {};
  for (const [key, rule] of Object.entries(rules)) {
    const value = fields[key] ?? "";
    if (rule === "optional") continue;
    if (rule === "name" && !isFilled(value)) errors[key] = "Please enter at least 2 characters";
    if (rule === "email" && !isEmail(value)) errors[key] = "Enter a valid email address";
    if (rule === "phone" && !isPhone(value)) errors[key] = "Enter a valid 10-digit phone number";
    if (rule === "text" && !isFilled(value, 5)) errors[key] = "Please add a little more detail";
  }
  return errors;
}
