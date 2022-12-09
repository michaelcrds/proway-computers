import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { FlashMessagesService } from 'src/app/flash-messages.service';
import { ICartProduct, IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto : IProduto | undefined
  quantidade = 1

  constructor(
    private produtosService : ProdutosService,
    private route : ActivatedRoute,
    private flashMessages : FlashMessagesService,
    private cartService : CartService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const idProduct = Number(routeParams.get('id'))
    this.produto = this.produtosService.getOne(idProduct)
  }

  adicionarAoCarrinho(){
    this.flashMessages.notificar(`${this.produto?.descricao} adicionado ao carrinho!`)
    const product : ICartProduct = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.cartService.addCart(product)
  }
}
