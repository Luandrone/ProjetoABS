const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Bebida {
    constructor(bebida, copo, gelo, tamanho, entrega, tampa) {
        this.bebida = bebida;
        this.copo = copo;
        this.gelo = gelo;
        this.tamanho = tamanho;
        this.entrega = entrega;
        this.entrega = tampa;
    }

}

let bebidaEscolhida = new Bebida

escolherBebidas()


function escolherBebidas() {

    pergunta('Escolha sua bebida, Refrigerantes: Coca, Guaraná, Suco de Uva ou Suco de Laranja: ', (bebida) => {

        if (bebida !== 'Coca' && bebida !== 'Guaraná' && bebida !== 'Suco de Uva' && bebida !== 'Suco de Laranja') {
            mostrarMensagem('Você digitou uma opção inválida! Digite Coca, Guaraná, Suco de Uva ou Suco de Laranja. Digite novamente: ')
            escolherBebidas()
        }

        else if (bebida === 'Coca' || bebida === 'Guaraná') {

            mostrarMensagem(`Sua bebida Refrigerante ${bebida} será servida no copo de papel.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'papel'
            pedrasDeGelo(6)

        }

        else {

            mostrarMensagem(`Sua bebida Suco de ${bebida} será servida no copo de plástico.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'plástico'

            pedrasDeGelo(12)

        }

    }
    )

}

function pedrasDeGelo(pedras) {
    pergunta('Você gostaria de pedras de gelo, Sim ou Não ? ', (resposta) => {

        if (resposta !== 'Sim' && resposta !== 'Não') {
            mostrarMensagem('Você digitou uma opção inválida! Digite Sim ou Não. Digite novamente: ')
            pedrasDeGelo(pedras)
        }

        else if (resposta === 'Sim') {
            mostrarMensagem(`Você recebeu ${pedras} pedras de gelo`)
            bebidaEscolhida.gelo = pedras
        }

        else {
            mostrarMensagem('Você optou por beber sem gelo')
            bebidaEscolhida.gelo = '0'
        }

        tamanhoDoCopo()
    })
}

function tamanhoDoCopo() {
    pergunta('Escolha o tamanho do copo, 300ml, 500ml, 700ml: ', (tamanhoMl) => {

        if (tamanhoMl !== '300ml' && tamanhoMl !== '500ml' && tamanhoMl !== '700ml') {
            mostrarMensagem('Você digitou uma opção inválida! Digite 300ml, 500ml ou 700ml. Digite novamente: ')
            tamanhoDoCopo()
        }

        else {

            mostrarMensagem(`Seu tamanho foi de ${tamanhoMl}`)
            bebidaEscolhida.tamanho = tamanhoMl
        }

        formaDeEntrega()
    })
}

function formaDeEntrega() {
    pergunta('Escolha sua forma de entrega, 1 delivery ou 2 comer no local: ', (entrega) => {
        
        if(entrega != '1' && entrega != '2'){
            mostrarMensagem('Você digitou uma opção inválida')
            formaDeEntrega()
        } else if (entrega === '1') {
                mostrarMensagem('Você receberá uma tampa sem furo')
                bebidaEscolhida.tampa = 'tampa sem furo'
            }

            else {
                mostrarMensagem('Você receberá uma tampa com furo')
                bebidaEscolhida.tampa = 'tampa com furo'
            }
        

        bebidaEscolhida.entrega = entrega
        mostrarMensagem(`Você escolheu a entrega por ${entrega}`)

        montarBebida()
})
}

function pergunta(frase, escolha) {
    rl.question(frase, escolha)
}

function mostrarMensagem(mensagem) {
    console.log(mensagem)
}

function montarBebida(){
    mostrarMensagem(`Seu pedido foi a bebida ${bebidaEscolhida.bebida}, no copo de ${bebidaEscolhida.copo}, com ${bebidaEscolhida.gelo} pedras de gelo, no copo tamanho de ${bebidaEscolhida.tamanho}, com a entrega sendo feita em ${bebidaEscolhida.entrega}, com a ${bebidaEscolhida.tampa}. `)
        rl.close()
}

/*
Pseudocódigo: Sistema de Pedidos de Bebidas

    Inicialização:
        Importar a biblioteca readline para lidar com a entrada do usuário.
        Criar uma instância de readline.Interface para interação com o usuário.
        Definir uma classe Bebida para representar os detalhes da bebida escolhida.

    Definir a Classe Bebida:
        A classe Bebida possui os seguintes atributos: bebida, copo, gelo, tamanho, entrega, tampa.

    Função Principal - escolherBebidas:
        Inicializar a escolha de bebidas.
        Perguntar ao usuário sua escolha de bebida: Coca, Guaraná, Suco de Uva ou Suco de Laranja.
        Se a escolha não for válida, mostrar mensagem de erro e pedir novamente.
        Se a escolha for Coca ou Guaraná, definir o copo como papel e pedir a quantidade de gelo.
        Se a escolha for Suco de Uva ou Suco de Laranja, definir o copo como plástico e pedir a quantidade de gelo.

    Função pedrasDeGelo:
        Perguntar ao usuário se ele deseja pedras de gelo (Sim ou Não).
        Se a resposta não for válida, mostrar mensagem de erro e pedir novamente.
        Se a resposta for Sim, definir a quantidade de gelo conforme especificado e pedir o tamanho do copo.
        Se a resposta for Não, definir a quantidade de gelo como 0 e pedir o tamanho do copo.

    Função tamanhoDoCopo:
        Perguntar ao usuário o tamanho do copo: 300ml, 500ml ou 700ml.
        Se o tamanho não for válido, mostrar mensagem de erro e pedir novamente.
        Se o tamanho for válido, definir o tamanho do copo e pedir a forma de entrega.

    Função formaDeEntrega:
        Perguntar ao usuário a forma de entrega: 1 para delivery ou 2 para comer no local.
        Se a opção não for válida, mostrar mensagem de erro e pedir novamente.
        Se a opção for 1 (delivery), definir a tampa como "tampa sem furo".
        Se a opção for 2 (comer no local), definir a tampa como "tampa com furo".
        Definir a forma de entrega e montar a bebida.

    Função montarBebida:
        Mostrar ao usuário os detalhes do pedido, incluindo bebida, copo, gelo, tamanho, entrega e tampa.
        Fechar a interface de leitura de entrada.

    Função Auxiliar - pergunta:
        Realizar uma pergunta ao usuário com uma mensagem específica.
        Aguardar a resposta do usuário e chamar uma função de callback para processar a resposta.

    Função Auxiliar - mostrarMensagem:
        Mostrar uma mensagem ao usuário no console.

*/

/*
REQUSITOS DESSE EQUIPAMENTO

Para implementar o programa descrito, você poderia usar um dispositivo com capacidade de entrada de dados pelo usuário e exibição de informações, como um computador pessoal (desktop ou laptop), um tablet ou até mesmo um smartphone. Esses dispositivos são adequados para a implementação de aplicativos de console ou interfaces gráficas simples, onde o usuário pode interagir respondendo às perguntas feitas pelo programa e recebendo as informações de retorno.

Se você quiser uma solução mais robusta e específica para um ambiente comercial, poderia considerar o uso de um terminal de autoatendimento ou um quiosque interativo. Esses dispositivos são comumente encontrados em restaurantes, cinemas, aeroportos e outros locais de atendimento ao cliente, permitindo que os usuários façam pedidos de forma autônoma e recebam informações sobre produtos ou serviços.

Independentemente do dispositivo escolhido, é importante garantir que ele possua as funcionalidades necessárias para suportar a interação com o usuário, como entrada de texto e exibição de mensagens, para que o programa possa ser executado de forma eficaz.
*/

/*
    Testes de Unidade:
        Testar cada função individualmente para garantir que ela produza o resultado esperado para diferentes entradas.
        Verificar se a função pergunta() está recebendo a frase correta e chamando a função escolha corretamente.
        Testar as funções de validação (por exemplo, validar se a resposta do usuário é válida para cada pergunta).

    Testes de Integração:
        Testar a interação entre diferentes partes do programa para garantir que elas se comuniquem corretamente.
        Verificar se as respostas fornecidas pelo usuário estão sendo corretamente passadas para as funções subsequentes.

    Testes de Aceitação:
        Testar o fluxo completo do programa, desde a seleção da bebida até a finalização do pedido.
        Verificar se todas as opções de bebidas, tamanhos de copo, escolhas de gelo e métodos de entrega são tratados corretamente.
        Testar se as mensagens exibidas para o usuário estão corretas e compreensíveis.

    Testes de Usabilidade:
        Avaliar a facilidade de uso do programa para os usuários finais.
        Verificar se as instruções são claras e se o fluxo de interação é intuitivo.

    Testes de Performance:
        Testar a capacidade do programa de lidar com um grande número de solicitações de forma eficiente.
        Verificar se o programa responde de maneira rápida e precisa, mesmo sob carga.

    Testes de Segurança:
        Verificar se o programa trata corretamente dados sensíveis ou entradas maliciosas.
        Testar se há proteção contra ataques comuns, como injeção de código ou vazamento de informações.

Esses são apenas alguns exemplos de casos de teste que o QA pode realizar para garantir a qualidade e funcionalidade do programa. O conjunto específico de testes dependerá dos requisitos do sistema, das expectativas dos usuários e do ambiente de implementação.

*/