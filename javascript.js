const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vocẽ se perdeu em uma floresta sombria!  escolha:",
        alternativas: [
            {
                texto: "Estar sozinho!",
                afirmacao: "Você esta andando sozinho pela floresta."
            },
            {
                texto: "Estar com mais dois amigos.",
                afirmacao: "Voê esta com mais dois amigos ."
            }
        ]
    },
    {
        enunciado: "Você esta andando na floresta e de repente encontra:",
        alternativas: [
            {
                texto: "Um labirinto de árvores.",
                afirmacao: "quando encontra um labirinto de árvores que começa a mudar a cada minuto."
            },
            {
                texto: "um altar antigo,com simbolos sobrenaturais.",
                afirmacao: "quando encontra um altar cheio de musgo,utilizado para fazer rituais."
            }
        ]
    },
    {
        enunciado: "Você encontra uma trilha e decide segui-la, ela esta:.",
        alternativas: [
            {
                texto: "com pegadas",
                afirmacao: "Você decide seguir a trilha que esta com pegadas quando avista um cemitério, e se depara com um vampiro."
            },
            {
                texto: "com retalhos de corpos",
                afirmacao: "Você decide seguir a trilha que esta com retalhos de corpos e se depara com um lobisomem."
            }
        ]
    },
    {
        enunciado: "Então você:",
        alternativas: [
            {
                texto: "tenta correr",
                afirmacao: "E tenta correr para se esconder atrás de algo."
            },
            {
                texto: "tenta se fingir de morto.",
                afirmacao: "e tenta se fingir de morto para que o engane ."
            }
        ]
    },
    {
        enunciado: "Mas algo inusitado acontece:",
        alternativas: [
            {
                texto: "Você acorda de um pesadelo.",
                afirmacao: "Quando você derrepente acorda e nota que era apenas um pesadelo."
            },
            {
                texto: "ele te encontra.",
                afirmacao: "Mas ele acaba te encontrando e tirando a sua vida."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "sua historia final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
