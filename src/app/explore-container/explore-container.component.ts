import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DetalhamentoAlunoComponent } from '../components/detalhamento-aluno/detalhamento-aluno.component';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [CommonModule, DetalhamentoAlunoComponent],
  standalone: true,
})
export class ExploreContainerComponent {
  @Input() name?: string = 'valor interno';
  //@Input('nomeParametro') nome?: string = 'valor interno';

  variavelTexto = 'texto padrao inicial';
  variavelDupla = 'dois caminhos';
  variavelInterna = true;

  variavelArray: Array<Aluno> = [
    {
      nome: 'aluno 01',
      idade: 22,
      url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVzc29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=cover&w=500&q=60',
    },
    {
      nome: 'aluno 02',
      idade: 23,
      url: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVzc29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=cover&w=500&q=60',
    },
    {
      nome: 'aluno 03',
      idade: 24,
      url: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVzc29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=cover&w=500&q=60',
    },
    {
      nome: 'aluno 04',
      idade: 25,
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVzc29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=cover&w=500&q=60',
    },
  ];

  metodo(valor: any) {
    console.log(valor);

    this.variavelDupla = valor;
    //console.log(`de dentro ExplorerCOntainer --> ${this.variavelInterna}`);

    this.variavelInterna = !this.variavelInterna;
    //console.log(`variavel alterada --> ${this.variavelInterna}`);
  }

  indice = 0;
  alunoSelecionado: Aluno = this.variavelArray[this.indice];

  anterior() {
    this.indice--;
    if (this.indice < 0) this.indice = this.variavelArray.length - 1;

    this.selecionarAluno();
  }
  proximo() {
    this.indice++;
    if (this.indice >= this.variavelArray.length) this.indice = 0;

    this.selecionarAluno();
  }
  private selecionarAluno() {
    this.alunoSelecionado = this.variavelArray[this.indice];
  }
}
