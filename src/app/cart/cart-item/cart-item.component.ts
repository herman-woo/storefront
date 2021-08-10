import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/models/Orders';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:Order;
  @Output() removeOrder: EventEmitter<Order> = new EventEmitter;
  constructor(private cartService:CartService) {
      this.item = {
        order_id:0,
        product_id:0,
        product_name:"",
        product_price:0,
        order_qty:0,
        order_price:0
      }
   }


  ngOnInit(): void {
  }
  removeSelf(order:Order):void {
    this.removeOrder.emit(order)
  }
}
