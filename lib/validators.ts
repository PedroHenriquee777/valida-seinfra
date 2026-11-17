import { calcCnpjCheckDigits } from "@/lib/calculators";
import { onlyDigits } from "@/lib/formatters";

/**verifica se um CNPJ é valido. aceita com ou sem mascara **/
export function isValidCnpj(value: string): boolean {
  const digits = onlyDigits(value);

  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;

  const { first, second } = calcCnpjCheckDigits(digits.slice(0, 12));

  return first === Number(digits[12]) && second === Number(digits[13]);
}
