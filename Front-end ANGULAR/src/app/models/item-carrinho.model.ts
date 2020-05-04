
/*Modelo do item que aparecerá no carrinho*/

class ItemCarrinho{
    constructor(
        public id: number,
        public imagens:object,
        public title: string,
        public description:string,
        public price:number,
        public quantidade:number,
        
    ){}
}

export {ItemCarrinho }