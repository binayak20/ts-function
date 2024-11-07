export function addArgs(...args: number[]): number {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(addArgs(1, 2));

export function addArray(values: number[], currency?: string): string | number {
  const sum = values.reduce((acc, num) => acc + num, 0);
  if (currency) {
    const formattedSum = new Intl.NumberFormat("en-US", { style: "currency", currency: currency }).format(sum);
    return formattedSum;
  }
  return sum;
}
console.log(addArray([2, 3], "USD"));

export function addObj(numObj: { [key: string]: number }): number {
  let sum = 0;
  for (let key in numObj) {
    sum += numObj[key];
  }
  return sum;
}
console.log(addObj({ a: 1, b: 2, c: 3 }));
