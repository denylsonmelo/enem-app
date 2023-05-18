import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilPage implements OnInit {
  areaSelecionada = 'conquistas';

  usuario = {
    nome: 'Nome do Usuário',
    imagemUrl: 'assets/perfis/mulher01.svg',
    quests: [
      {
        nome: 'quest 01',
        objetivo: 'objetivo 01',
      },
      {
        nome: 'quest 02',
        objetivo: 'objetivo 02',
      },
    ],
  };

  constructor() {}

  ngOnInit() {}

  trocaAreaSelecionada(evento: any) {
    console.log(`evento: ${evento.detail.value}`);
    console.log(`area selecionada: ${this.areaSelecionada}`);
  }
}
