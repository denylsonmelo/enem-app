import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-detalhamento-aluno',
  templateUrl: './detalhamento-aluno.component.html',
  styleUrls: ['./detalhamento-aluno.component.scss'],
  standalone: true,
})
export class DetalhamentoAlunoComponent implements OnInit {
  @Input() dado: Aluno;

  constructor() {
    this.dado = new Aluno('nome_teste', 18, 'url_teste');
  }

  ngOnInit() {}
}
