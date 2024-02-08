const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Bebida{
    constructor(bebida, copo, gelo, tamanho, entrega){
        this.bebida = bebida;
        this.copo = copo;
        this.gelo = gelo;
        this.tamanho = tamanho;
        this.entrega = entrega;
    }

}

let bebidaEscolhida = new Bebida

escolherBebidas()

function escolherBebidas() {
    rl.question('Escolha sua bebida, Refrigerantes: Coca, Guaraná, Suco de Uva ou Suco de Laranja: ', (bebida) => {
            
        if (bebida === 'Coca' || bebida === 'Guaraná'){

            console.log(`Sua bebida Refrigerante ${bebida} será servida no copo de papel.`)  
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'papel'

            pedrasDeGelo(6)
            

        } else {

            console.log(`Sua bebida Suco de ${bebida} será servida no copo de plástico.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'plástico'

            pedrasDeGelo(12)
            
        }
          
    });
}

function pedrasDeGelo(pedrasDeGelo) {
    rl.question('Você gostaria de pedras de gelo, Sim ou Não ? ', (resposta) =>{
        if(resposta === 'Sim') {
            console.log(`Você recebeu ${pedrasDeGelo} pedras de gelo`)
            bebidaEscolhida.gelo = pedrasDeGelo 
        } else {
            console.log('Você optou por beber sem gelo')
            bebidaEscolhida.gelo = 0
        }

        tamanhoDoCopo()
    })
}

function tamanhoDoCopo(){
    rl.question('Escolha o tamanho do copo, 300ml, 500ml, 700ml: ', (tamanhoml) => {
        console.log(`Seu tamanho foi de ${tamanhoml}`)
        bebidaEscolhida.tamanho = tamanhoml

        formaDeEntrega() 
    })
}

function formaDeEntrega(){
    rl.question('Escolha sua forma de entrega, delivery ou comer no local: ', (entrega) => {

        console.log(`Você escolheu a entrega por ${entrega}`)
        bebidaEscolhida.entrega = entrega

        console.log(`Seu pedido foi a bebida ${bebidaEscolhida.bebida}, no copo de ${bebidaEscolhida.copo}, com ${bebidaEscolhida.gelo} pedras de gelo, no copo de tamanho ${bebidaEscolhida.tamanho}, com a entrega sendo feita em ${bebidaEscolhida.entrega} `)
    })
}

