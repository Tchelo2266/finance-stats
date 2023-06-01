export interface Movimento {
  id: string;
  descricao: string;
  tipoMovimento: number;
  data: string;
  valor: number;
}

export function create() {
  return {
    id: '',
    descricao: '',
    tipoMovimento: 0,
    data: '',
    valor: 0
  };
}