const perguntas = [
    {
        pergunta: "1. O que mais te atrai em tecnologia?",
        alternativas: [
            {  texto: "Criar sistemas e fazer a parte que acontece por trás dos aplicativos.", 
                area: "backend" 
            },

            {   texto: "Analisar informações e descobrir padrões nos dados.", 
                area: "dataScience" 
            },

            {   texto: "Criar interfaces bonitas e fáceis de usar.", 
                area: "frontend" 
            },

            {    texto: "Proteger sistemas e encontrar vulnerabilidades.",
                 area: "cyberseguranca"     
            },

            {   texto: "Encontrar erros e garantir que tudo funcione corretamente.",
                area: "qa" 
            },

            {   texto: "Criar jogos, personagens, histórias e mundos.", 
                area: "gameDev" 
            }
        ]
    },

    {
        pergunta: "2. Quando você tem uma ideia, o que gostaria de fazer?",
        alternativas: [
            {   texto: "Transformar a ideia em um sistema funcional.", 
                area: "backend" 
            },

            {   texto: "Pesquisar dados para descobrir se a ideia funciona.", 
                area: "dataScience" 
            },

            {   texto: "Criar uma interface para apresentar a ideia.", 
                area: "frontend" 
            },

            {   texto: "Pensar nos riscos e na segurança da ideia.", 
                area: "cyberseguranca" 
            },

            {   texto: "Testar a ideia para encontrar possíveis erros.", 
                area: "qa" 
            },

            {   texto: "Transformar a ideia em um jogo.", 
                area: "gameDev"
             }
        ]
    },

    {
        pergunta: "3. Qual dessas situações parece mais interessante?",
        alternativas: [
            {   texto: "Fazer o sistema de um aplicativo funcionar.",
                area: "backend" 
            },

            {   texto: "Descobrir informações importantes analisando dados.", 
                area: "dataScience" 
            },

            {   texto: "Criar o visual e a experiência de um aplicativo.", 
                area: "frontend" 
            },

            {   texto: "Proteger uma empresa contra ataques virtuais.", 
                area: "cyberseguranca" 
            },

            {   texto: "Garantir que um programa não tenha bugs.",
                area: "qa" 
            },

            {   texto: "Criar uma fase que faça o jogador querer continuar jogando.",
                area: "gameDev"
            }
        ]
    },

    {
        pergunta: "4. Qual dessas características mais combina com você?",
        alternativas: [
            {   texto: "Gosto de resolver problemas lógicos.", 
                area: "backend" 
            },

            {   texto: "Gosto de analisar e interpretar informações.",
                area: "dataScience" 
            },

            {   texto: "Sou criativo e gosto de coisas visuais.",
                area: "frontend"
            },

            {   texto: "Sou curioso e gosto de descobrir como as coisas funcionam.",
                area: "cyberseguranca" 
            },

            {   texto: "Sou detalhista e percebo pequenos erros.", 
                area: "qa" 
            },

            {   texto: "Tenho muita imaginação e gosto de criar histórias.",
                area: "gameDev" 
            }
        ]
    },

    {
        pergunta: "5. Se você pudesse criar algo agora, o que seria?",
        alternativas: [
            {   texto: "Um sistema para facilitar alguma tarefa.", 
                area: "backend" 
            },

            {   texto: "Um programa que analisasse dados.",
                area: "dataScience" 
            },

            {   texto: "Um site moderno e interativo.",
                area: "frontend" 
            },

            {   texto: "Uma ferramenta para proteger computadores.",
                area: "cyberseguranca" 
            },

            {   texto: "Um sistema que encontrasse bugs automaticamente.",
                area: "qa" 
            },

            {   texto: "Um jogo criado totalmente por você.",
                area: "gameDev" 
            }
        ]
    },

    {
        pergunta: "6. O que mais te daria satisfação em um projeto?",
        alternativas: [
            {   texto: "Ver toda a lógica funcionando perfeitamente.",
                area: "backend" 
            },

            {   texto: "Encontrar uma informação importante nos dados.",
                area: "dataScience" 
            },

            {   texto: "Ver uma interface bonita e funcionando.",
                area: "frontend" 
            },

            {   texto: "Conseguir proteger um sistema contra ataques.", 
                area: "cyberseguranca"
            },

            {   texto: "Encontrar e corrigir um erro difícil.",
                area: "qa" 
            },

            {   texto: "Ver alguém se divertindo com um jogo que você criou.",
                area: "gameDev"
            }
        ]
    }
];


// Pontuação inicial
let pontuacao = {
    backend: 0,
    dataScience: 0,
    frontend: 0,
    cyberseguranca: 0,
    qa: 0,
    gameDev: 0
};

let perguntaAtual = 0;


// Inicia o teste
function iniciarTeste() {

    pontuacao = {
        backend: 0,
        dataScience: 0,
        frontend: 0,
        cyberseguranca: 0,
        qa: 0,
        gameDev: 0
    };

    perguntaAtual = 0;

    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("quiz").classList.remove("escondido");

    mostrarPergunta();
}


// Mostra a pergunta atual
function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const areaAlternativas = document.getElementById("alternativas");

    areaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach(alternativa => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.classList.add("alternativa");

        botao.onclick = function () {
            responder(alternativa.area);
        };

        areaAlternativas.appendChild(botao);
    });
}


// Registra a resposta
function responder(area) {

    pontuacao[area]++;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }
}


// Mostra o resultado final
function mostrarResultado() {

    document.getElementById("quiz").classList.add("escondido");

    document.getElementById("resultado").classList.remove("escondido");

    let maiorPontuacao = 0;
    let areaVencedora = "";

    for (let area in pontuacao) {

        if (pontuacao[area] > maiorPontuacao) {

            maiorPontuacao = pontuacao[area];
            areaVencedora = area;

        }
    }


    const resultados = {

        backend: {
            nome: "Backend",
            descricao:
                "Você demonstra interesse por lógica, programação e pela parte interna dos sistemas. Backend pode ser uma ótima área para você."
        },

        dataScience: {
            nome: "Data Science",
            descricao:
                "Você gosta de analisar informações, encontrar padrões e transformar dados em decisões."
        },

        frontend: {
            nome: "Frontend",
            descricao:
                "Você tem criatividade e interesse em interfaces, experiências digitais e desenvolvimento visual."
        },

        cyberseguranca: {
            nome: "Cibersegurança",
            descricao:
                "Você é curioso e atento. Pode se destacar protegendo sistemas, redes e informações."
        },

        qa: {
            nome: "QA / Testes",
            descricao:
                "Você é detalhista e gosta de encontrar problemas. Qualidade e testes podem combinar muito com você."
        },

        gameDev: {
            nome: "Game Development",
            descricao:
                "Você tem criatividade e imaginação. Pode gostar de criar jogos, personagens, histórias, fases e mecânicas."
        }
    };


    document.getElementById("areaResultado").textContent =
        resultados[areaVencedora].nome;

    document.getElementById("descricaoResultado").textContent =
        resultados[areaVencedora].descricao;
}


// Reiniciar o teste
function reiniciarTeste() {

    document.getElementById("resultado").classList.add("escondido");

    document.getElementById("inicio").classList.remove("escondido");

}