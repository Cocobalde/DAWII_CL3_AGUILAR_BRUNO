import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number | undefined;

  calcularPromedio() {

    const notas = [this.nota1, this.nota2, this.nota3, this.nota4];
    const notaMenor = Math.min(...notas);
    const notasFiltradas = notas.filter(nota => nota !== notaMenor);
    this.promedio = notasFiltradas[0] * 0.2 + notasFiltradas[1] * 0.3 + notasFiltradas[2] * 0.5;
  }
}
