import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FlashMessagesService } from '../flash-messages.service';
import { ICartProduct } from '../produtos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  cartItens : ICartProduct[] = []
  total = 0

  constructor(
    private cartService: CartService,
    private flashMessage : FlashMessagesService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.cartItens = this.cartService.getCart()
    this.calculateTotal()
  }

  removeItemFromCart(idProduct : number){
    this.cartItens = this.cartItens.filter(item => item.id !== idProduct)
    this.cartService.removeItemFromCart(idProduct)
    this.calculateTotal()
  }

  calculateTotal(){
    this.total = this.cartItens.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  buy(){
    this.flashMessage.notificar('Compra realizada com sucesso!')
    this.cartService.clearCart()
    this.router.navigate(['produtos'])
  }
}
