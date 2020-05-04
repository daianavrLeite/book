import { Component, OnInit, Output, EventEmitter, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/models';
import { BooksServices } from '../services/servicos';
import {CarrinhoService} from '../services/carrinho'


@Injectable({
  providedIn:'root'
})


@Component({
  selector: 'app-oferta-individual',
  templateUrl: './oferta-individual.component.html',
  styleUrls: ['./oferta-individual.component.css']
})
export class OfertaIndividualComponent implements OnInit {


  public ofertaIndividual:Book
  @Input()
  successMessage:string

  constructor(private carrinhoService:CarrinhoService, private rota:ActivatedRoute, private ofertaServico:BooksServices) { }

  ngOnInit() {
    // this.ofertaServico.getBooksPorPorId( this.rota.snapshot.params['id'])
    // .then((book:Book)=>{
    //   this.ofertaIndividual=book
    //   console.log("resposta",book)
    // })

     this.ofertaServico.getBooksPorPorId(this.rota.snapshot.params['id']).subscribe(
      (book:Book)=>this.ofertaIndividual=book,
      (param:any)=>console.log(param)

    )
   
    
     console.log('ARRAY CARRINHO oferta individual' ,this.carrinhoService.exibirItens())
  }
  

  public adicionarItemCarrinho():void{
    this.carrinhoService.incluirItem(this.ofertaIndividual)
    console.log(this.carrinhoService.exibirItens())
    this.successMessage= "item was successfully added."
    // console.log(this.ofertaIndividual)
  }
 
 


}
