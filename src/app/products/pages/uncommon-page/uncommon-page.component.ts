import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

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

  /** Async Pipe */
  public myObservable = interval(2000).pipe(
    map(() => Math.random()),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  attendClient() {
    this.clients.shift();
  }

}
