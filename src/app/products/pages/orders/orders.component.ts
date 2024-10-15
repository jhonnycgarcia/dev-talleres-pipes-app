import { Component } from '@angular/core';

@Component({
  selector: 'products-orders',
  templateUrl: './orders.component.html',
  styles: ``
})
export class OrdersComponent {

  public isUpperCase: boolean = false;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}
