import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estacionamiento',
  imports: [FormsModule],
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent {
  horas: number = 0;
  minutos: number = 0;
  resultado: number | undefined;

  calcularCosto() {
    this.resultado = this.horas * 1500 + Math.ceil(this.minutos / 60) * 1500;
  }
}
