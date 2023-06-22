export interface Movimento {
  data: string;
  descricao: string;
  tipoMovimento: string;
  valor: string;
  id: string;
}

export function create() {
  return {
    data: '',
    descricao: '',
    tipoMovimento: '',
    valor:'',
    id: '',
  };
}