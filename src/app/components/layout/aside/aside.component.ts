import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Persona',
        icon: 'pi pi-fw pi-users',
        routerLink:"/personas"
      },
      {
        label: 'Multas',
        icon: 'pi pi-fw pi-paperclip',
        routerLink:"/multas"
      },
      {
        label: 'Vehiculos',
        icon: 'pi pi-fw pi-car',
        routerLink:"/vehiculos"
      },
      {
        label: 'Documentos',
        icon: 'pi pi-fw pi-file',
        routerLink:"/documentos"
      },
      {
        label: 'Involucrar',
        icon: 'pi pi-fw pi-sync',
        routerLink:"/involucrar"
      }
    ]
  }
}