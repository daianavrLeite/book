import { Component, OnInit, Input } from '@angular/core';
import{CarrinhoService} from'../services/carrinho'
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { ItemCarrinho } from '../models/item-carrinho.model';
import { Book } from '../models/models';
import { FormBuilder,  Validators } from '@angular/forms';
 
@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})


export class OrderBuyComponent implements OnInit {

public arr=[]
 
form = this.fb.group({
  address: [null, Validators.required],
  number:  [null, Validators.required],
  complement:[null, Validators.required],
  paymentMethod: [0, Validators.required]
})

     /*foi criado um atributo itensCarrinho que será do tipo ItemCarrinho que será um array*/
  public itensCarrinho:ItemCarrinho[]= []

  /*inicializara o servico no contrutor*/
  constructor(private carrinhoService:CarrinhoService, private fb:FormBuilder) { }

  /*itensCarrinho vai receber carrinhoService e aquele metodo que esá no servico CarrinhoService*/
  ngOnInit() {
    this.itensCarrinho=this.carrinhoService.exibirItens()
    console.log(this.itensCarrinho)
    // console.log('ARRAY CARRINHO' ,this.carrinhoService.exibirItens())
  }

  public addItem(para:Book){
    this.carrinhoService.incluirItem(para)
  }

  public removeItem(para:Book){
    this.carrinhoService.removerItem(para)
    
  }

  public purchase():void{
    if (this.carrinhoService.totalCarrinhoCompras() <= 0) {
      this.zerar()
  
    }
      console.log(this.form.value)
      this.arr.push(this.form.value)
      console.log(this.arr)
    
  }

  public zerar():void{
    this.itensCarrinho=[]
    this.carrinhoService.itens=[]
  }

}
