export function isValidCPF(cpf: string) {
  const auxCpf = cpf.replace(/[^\d]+/g, "");
  if (auxCpf.length !== 11 || !!auxCpf.match(/(\d)\1{10}/)) return false;
  const numCpf = auxCpf.split("").map((el) => +el);
  const rest = (count: number) =>
    ((numCpf
      .slice(0, count - 12)
      .reduce((sun, el, index) => sun + el * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === numCpf[9] && rest(11) === numCpf[10];
}
