import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/personas';

@Component({
  selector: 'app-show-persona',
  templateUrl: './show-persona.component.html',
  styleUrls: ['./show-persona.component.css']
})
export class ShowPersonaComponent implements OnInit {
  personas: Persona[] = [
  ];

  ngOnInit(): void {
    this.llernarPersona()
  }

  llernarPersona() {
    this.personas = [
      {
       
        dni: 1341134,
        nombre: 'brayan arevalo',
        direccion: 'calle 34',
        ciudad: 'riohacha',
        tipodepersonas: 'natural',
        telefono: '300414134',
      },
      {
        
        dni: 1143134413,
        nombre: 'ever osorio',
        direccion: 'calle 40',
        ciudad: "riohacha",
        tipodepersonas: "natural",
        telefono: "32323223",

      }
    ]
  }
}
