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