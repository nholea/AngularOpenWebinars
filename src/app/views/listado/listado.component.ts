import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listadoEntradas: Entrada[];
  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen: 'En esta lección realizaremos una pequeña introducción',
      },
      {
        titulo: 'TypeScript como lenguaje para Angular',
        resumen: 'Breve recorrido por el lenguaje de Angular',
      },
      {
        titulo: 'Componentes en Angular',
        resumen: 'Aprenderemos a usar los componentes en Angular',
      },
    ];
  }

  ngOnInit(): void {}

  mostrarTitulo(titulo:string){
    alert(`Entrada seleccionada: ${{titulo}}`)
  }
}
