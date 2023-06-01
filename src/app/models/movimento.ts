export interface Movimento {
  data: string;
  descricao: string;
  tipoMovimento: number;
  valor: number;
  id: string;
}

export function create() {
  return {
    data: '',
    descricao: '',
    tipoMovimento: 0,
    valor: 0,
    id: '',
  };
}