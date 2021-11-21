import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listadoEntradas!: Entrada[];
  constructor(private entradaService: EntradaService) {}

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (data:Entrada[]) => {
        this.listadoEntradas = data;
      },
      (error: Error) => {
        console.log("Error:", error)
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  mostrarTitulo(titulo: string) {
    alert(`Entrada seleccionada: ${{ titulo }}`);
  }
}
