import { Injectable } from '@angular/core';
import { ICartProduct } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itens : ICartProduct[] = []

  constructor() { }

  getCart(){
    this.itens = JSON.parse(localStorage.getItem('cart') || '[]')
    return this.itens
  }

  addCart(product : ICartProduct){
    this.itens.push(product)
    localStorage.setItem('cart', JSON.stringify(this.itens))
  }

  removeItemFromCart(idProduct: number){
    this.itens = this.itens.filter(item => item.id !== idProduct)
    localStorage.setItem('cart', JSON.stringify(this.itens))
  }

  clearCart(){
    this.itens = []
    localStorage.clear()
  }
}
