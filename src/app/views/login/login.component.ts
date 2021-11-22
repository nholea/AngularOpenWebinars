import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  hide: boolean = true;
  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {}

  submit(): void {
    console.log('Usuario Introducido');
  }
}
