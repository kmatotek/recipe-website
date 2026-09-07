export function formatQuantity(quantity: number): string {
  const whole = Math.floor(quantity);
  const decimal = quantity - whole;

  const fractions = [
    { value: 1 / 8, symbol: "⅛" },
    { value: 1 / 4, symbol: "¼" },
    { value: 1 / 3, symbol: "⅓" },
    { value: 3 / 8, symbol: "⅜" },
    { value: 1 / 2, symbol: "½" },
    { value: 5 / 8, symbol: "⅝" },
    { value: 2 / 3, symbol: "⅔" },
    { value: 3 / 4, symbol: "¾" },
    { value: 7 / 8, symbol: "⅞" },
  ];

  const match = fractions.find(
    (fraction) => Math.abs(decimal - fraction.value) < 0.01,
  );

  if (match) {
    return whole > 0
      ? `${whole} ${match.symbol}`
      : match.symbol;
  }

  return quantity.toString();
}