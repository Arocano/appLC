import { Injectable } from '@angular/core';
export interface IMenu{
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu: IMenu[] = [
    {
      title: 'Agencias',
      url: '/busqueda',
      icon: '/assets/icons/agencia.svg'
    },
    {
      title: 'Canales',
      url: '/carro',
      icon: '/assets/icons/canal.svg'
    },
    {
      title: 'Clientes',
      url: '/inicio',
      icon: '/assets/icons/cliente.svg'
    }

 ];
  constructor() { }
  getMenu(): IMenu[]{
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu{
    return this.listMenu.find(menu => menu.url.toLowerCase() === url.toLowerCase()) as IMenu;
  }
}
