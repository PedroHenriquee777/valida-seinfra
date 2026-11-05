import { onlyDigits } from "@/lib/formatters";

const WEIGHTS_FIRST = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const WEIGHTS_SECOND = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/** calcula um digito verificador do CNPJ **/
function calcCheckDigit(base: string, weights: number[]): number {
  const sum = base
    .split("")
    .reduce((acc, digit, i) => acc + Number(digit) * weights[i], 0);

  const rest = sum % 11;

  return rest < 2 ? 0 : 11 - rest;
}

/**verifica se um CNPJ é valido. aceita com ou sem mascara **/
export function isValidCnpj(value: string): boolean {
  const digits = onlyDigits(value);

  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;

  const first = calcCheckDigit(digits.slice(0, 12), WEIGHTS_FIRST);
  const second = calcCheckDigit(digits.slice(0, 13), WEIGHTS_SECOND);

  return first === Number(digits[12]) && second === Number(digits[13]);
}