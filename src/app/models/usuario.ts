export interface Usuario {
  uid: string;
  id: string;
  nome: string;
  email: string;
  senha:string;
}

export function criaUsuario() {
  return {
    uid: "",
    id: "",
    nome: "",
    email: "",
    senha: ""
  };
}
