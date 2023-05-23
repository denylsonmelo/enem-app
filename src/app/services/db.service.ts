import { Injectable } from '@angular/core';
import { Usuario } from '../models/modelos.interface';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getUsuarioLogado(): Usuario {
    let pesquisa = localStorage.getItem('usuarioLogado');
    if (pesquisa) {
      let usuario = JSON.parse(pesquisa);
      return usuario;
    } else {
      throw new Error('Usuario nao logado');
    }
  }
}
