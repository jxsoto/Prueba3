import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component'
import {InfoclimaComponent} from '../app/componentes/infoclima/infoclima.component';

const routes: Routes = [

  {path:"detalleClima/:id", component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"infoClima",component:InfoclimaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
