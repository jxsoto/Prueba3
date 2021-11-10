import { Component, OnInit } from '@angular/core';
import {Regiones,ListaRegiones} from '../../interfaces/regiones'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ListaRegiones=ListaRegiones;
  constructor() { }

  ngOnInit(): void {
  }

}
