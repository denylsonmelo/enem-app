import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/models/modelos.interface';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilPage implements OnInit {
  areaSelecionada = 'conquistas';

  usuario: Usuario;
  // {
  //   nome: 'Nome do Usuário',
  //   imagemUrl: 'assets/perfis/mulher01.svg',
  //   quests: [
  //     {
  //       nome: 'quest 01',
  //       objetivo: 'objetivo 01',
  //       cor: '#326598',
  //       imagemUrl: 'assets/perfis/mulher.svg',
  //       inicial: '50',
  //       final: '100',
  //       finalizado: true,
  //     },
  // {
  //   nome: 'quest 02',
  //   objetivo: 'objetivo 02',
  // },
  //   ],
  //   amigos: [
  //     {
  //       nome: 'amigo 01',
  //       imagemUrl: 'assets/perfis/mulher01.svg',
  //     },
  //     {
  //       nome: 'amigo 02',
  //       imagemUrl: 'assets/perfis/mulher01.svg',
  //     },
  //     {
  //       nome: 'amigo 03',
  //       imagemUrl: 'assets/perfis/mulher01.svg',
  //     },
  //   ],
  // };

  constructor(private banco: DbService) {
    this.usuario = banco.getUsuarioLogado();
  }

  ngOnInit() {}

  trocaAreaSelecionada(evento: any) {
    console.log(`evento: ${evento.detail.value}`);
    console.log(`area selecionada: ${this.areaSelecionada}`);
  }
}
