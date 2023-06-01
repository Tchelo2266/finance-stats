export interface Movimento {
  valor: string;
  tipoMovimento: string;
  usuario_id: string;
  descricao: string;
  dataMovimento: string;
}

export function criaMovimento() {
  return {
    valor: "",
    tipoMovimento: "",
    usuario_id: "",
    descricao: "",
    dataMovimento: "",
  };
}
