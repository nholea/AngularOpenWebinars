import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { ListadoComponent } from './views/listado/listado.component';
import { LoginComponent } from './views/login/login.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: "Login", component:LoginComponent},
  {path: "Listado", component:ListadoComponent},
  {path: "Nosotros", component:AcercaDeNosotrosComponent},

  {path:"", redirectTo: "/Listado", pathMatch:"full"},
  {path:"**", component:PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
