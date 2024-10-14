import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  /** i18nSelect Pipe */
  public name: string = 'Jhonny';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  /** i18nPlural Pipe */
  public clients: string[] = ['Jhonny', 'Melissa', 'Luis', 'Maria', 'Juan', 'Jose', 'Carlos', 'Ana', 'Raquel', 'Pedro'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando en el evento',
    '=1': 'tenemos un cliente esperando en el evento',
    '=2': 'tenemos 2 clientes esperando en el evento',
    'other': 'tenemos # clientes esperando en el evento'
  }

  /** KeyValue Pipe */
  public person = {
    name: 'Jhonny',
    age: 30,
    gender: 'male',
    address: 'Caracas, Venezuela'
  }

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  attendClient() {
    this.clients.shift();
  }

}
