import { Injectable } from '@angular/core';
export interface IMenu{
  title:string,
  url:string,
  icon:string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
private listMenu:IMenu[]=[
  {
    title:'Carrito',
    url:'/carrito',
    icon: '/assets/icons/carrito.svg'
  },
  {
    title:'Buscar',
    url:'/buscar',
    icon: '/assets/icons/buscar.svg'
  },
  {
    title:'Productos',
    url:'/productos',
    icon: '/assets/icons/productos.svg'
  }
];
  constructor() { }
  getMenu():IMenu[]{
    return [...this.listMenu];
  }
  getMenuByUrl(url:string):IMenu{
    return this.listMenu.find(menu=>menu.url.toLowerCase()===url.toLowerCase())as IMenu;
  }
}
