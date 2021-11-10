import { Component, OnInit } from '@angular/core';
import {ListaClimaAra,ListaClimaBio,ListaClimaMet,ListaClimaVal,Climareg} from '../../interfaces/climareg';
import {Route,ActivatedRoute} from '@angular/router';
import {ListaRegiones} from '../../interfaces/regiones';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ListaClimaVal=ListaClimaVal;
  ListaClimaMet=ListaClimaMet;
  ListaClimaBio=ListaClimaBio;
  ListaClimaAra=ListaClimaAra;
  ListaRegiones=ListaRegiones;
  id:number=0;
  Region:any;
  grados:any;
  constructor(private ruta:ActivatedRoute) { 

    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];

    })
    
    
  }

  ngOnInit(): void {

    this.Region=ListaRegiones.find(objeto=>objeto.id==this.id);

  }

  cambiargrados(){
    this.grados=ListaClimaAra.find(objeto=>objeto.grados==this.grados);
    this.grados=(this.grados*1.8)+32;
    return this.grados;
  }
}
