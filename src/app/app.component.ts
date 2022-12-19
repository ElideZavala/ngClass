import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dirNgClass';
  fondoAmarillo = false;
  letraGrande = false;

  checkFondo() {
    this.fondoAmarillo = !this.fondoAmarillo;
  }

  checkLetra() {
    this.letraGrande = !this.letraGrande;
  }

  asignaClases() {
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };

    return classes;
  }
}
