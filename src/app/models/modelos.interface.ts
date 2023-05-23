export interface Usuario {
  nome: string;
  imagemUrl: string;
  //quests: Array<Quest>;
  //amigos: Array<Amigo>;
}

export interface Amigo {
  nome: string;
  imagemUrl: string;
}

export interface Quest {
  nome: string;
  objetivo: string;
  cor: string;
  imagemUrl: string;
  inicial: string;
  final: string;
  finalizado: boolean;
}
