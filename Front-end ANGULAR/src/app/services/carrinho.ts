import {ItemCarrinho} from '../models/item-carrinho.model'
import { Injectable } from '@angular/core'
import { Book } from '../models/models'

/*foi criado um servico chamado carrinho*/

@Injectable({
    providedIn:'root'
  })
export class CarrinhoService{
  /*foi criado um atributo itens que será do tipo ItemCarrinho que será um array*/
    public itens: ItemCarrinho[]=[]
    

    /*foi criado um método que receberá os itens*/
    public exibirItens():ItemCarrinho[]{
      console.log('item recebida no exibir lista', this.itens)
       return this.itens
        
    }

    public incluirItem(item:Book):void{
         let itemCarrinho: ItemCarrinho= new ItemCarrinho(
            item.id,
            item.image[0],
            item.title,
            item.description,
            item.price,
            1

         )
        //verificar se o item em questao ja nao exista dentro de this.itens

        let itemCarrinhoEncontrado= this.itens.find((item:ItemCarrinho)=>item.id===itemCarrinho.id)

        if(itemCarrinhoEncontrado){
          itemCarrinhoEncontrado.quantidade +=1
        }else{
          this.itens.push(itemCarrinho)
        }
     
        // console.log('item recebida no servico', item)
    }

    public removerItem(parametro:Book):void{
      let itemCarrinhoEncontrado=this.itens.find((item:ItemCarrinho)=>item.id===parametro.id)
      itemCarrinhoEncontrado.quantidade--
      if(itemCarrinhoEncontrado.quantidade<0){
        itemCarrinhoEncontrado.quantidade=0
      }
    }

    public totalCarrinhoCompras():number{
      let total:number=0
      this.itens.map((item:ItemCarrinho)=>{
        total= total+(item.price*item.quantidade)
      })
      return total
    }
}