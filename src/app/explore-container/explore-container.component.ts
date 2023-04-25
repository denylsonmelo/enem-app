import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
})
export class ExploreContainerComponent {
  @Input() name?: string = 'valor interno';
  //@Input('nomeParametro') nome?: string = 'valor interno';

  variavelInterna = true;
  metodo() {}
}
