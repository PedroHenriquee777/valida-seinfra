// Cada dígito do CNPJ é multiplicado por um peso, e esses pesos são fixos.
// Esta lista vale para o 1º dígito verificador (olha os 12 primeiros números).
const WEIGHTS_FIRST = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

// Mesma ideia para o 2º dígito verificador, mas agora com 13 números,
// porque o 1º dígito verificador entra na conta.
const WEIGHTS_SECOND = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

/** calcula um digito verificador do CNPJ **/
function calcCheckDigit(base: string, weights: number[]): number {
  // Multiplica cada número pelo peso da sua posição e soma tudo.
  const sum = base
    .split("")
    .reduce((acc, digit, i) => acc + Number(digit) * weights[i], 0);

  // O que sobra da divisão por 11 define o dígito.
  const rest = sum % 11;

  // Se sobrar menos de 2, o dígito é 0. Senão, é 11 menos o que sobrou.
  return rest < 2 ? 0 : 11 - rest;
}

/** calcula os dois digitos verificadores do CNPJ a partir dos 12 primeiros digitos **/
export function calcCnpjCheckDigits(base: string): {
  first: number;
  second: number;
} {
  const first = calcCheckDigit(base, WEIGHTS_FIRST);

  // Para o 2º dígito, o 1º que acabamos de calcular é colocado no fim da base.
  const second = calcCheckDigit(`${base}${first}`, WEIGHTS_SECOND);

  return { first, second };
}
