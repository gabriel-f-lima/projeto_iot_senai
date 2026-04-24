let clientWeb = null;
const clientId = "Esp32GFL_" + Math.floor(Math.random() * 10000); 
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

// =========================================================
// FUNÇÃO PARA TRAVAR/DESTRAVAR BOTÕES
// =========================================================
function controlarBotoes(desabilitar) {
    const botoes = document.querySelectorAll("button");
    botoes.forEach(botao => {
        botao.disabled = desabilitar; // Trava a lógica do HTML
        if (desabilitar) {
            botao.classList.add("btn-desabilitado"); // Adiciona o visual cinza
        } else {
            botao.classList.remove("btn-desabilitado"); // Remove o visual cinza
        }
    });
}

// 1. Trava todos os botões assim que a página carrega
controlarBotoes(true);

// =========================================================
// CONEXÃO MQTT
// =========================================================
clientWeb.connect({
    useSSL: true,
    onSuccess: function() {
        console.log("Conectado ao broker MQTT com sucesso!");
        alert("Sistema conectado com sucesso!");
        // 2. Destrava os botões apenas quando conectar
        controlarBotoes(false); 
    },
    onFailure: function(){
        console.log("Falha ao conectar ao broker MQTT");
        alert("Falha ao conectar o sistema. Verifique sua conexão e tente novamente.");
    }
});


// ========================== SALA ==========================
function ligarLampadaSala() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-sala");
    const statuslampada = document.getElementById("status-sala");
    
    console.log("Lâmpada Sala ligada");
    statuslampada.textContent = "Lâmpada ligada";
    lampada.classList.remove("desligada");
    lampada.classList.add("ligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/sala/ligar";
    clientWeb.send(msg);
}

function desligarLampadaSala() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-sala");
    const statuslampada = document.getElementById("status-sala");

    console.log("Lâmpada Sala desligada");
    statuslampada.textContent = "Lâmpada desligada";
    lampada.classList.remove("ligada");
    lampada.classList.add("desligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/sala/desligar";
    clientWeb.send(msg);
}

// ========================== QUARTO 1 ==========================
function ligarLampadaQuarto1() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-quarto1");
    const statuslampada = document.getElementById("status-quarto1");

    console.log("Lâmpada Quarto 1 ligada");
    statuslampada.textContent = "Lâmpada ligada";
    lampada.classList.remove("desligada");
    lampada.classList.add("ligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/quarto1/ligar";
    clientWeb.send(msg);
}

function desligarLampadaQuarto1() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-quarto1");
    const statuslampada = document.getElementById("status-quarto1");

    console.log("Lâmpada Quarto 1 desligada");
    statuslampada.textContent = "Lâmpada desligada";
    lampada.classList.remove("ligada");
    lampada.classList.add("desligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/quarto1/desligar";
    clientWeb.send(msg);
}

// ========================== QUARTO 2 ==========================
function ligarLampadaQuarto2() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-quarto2");
    const statuslampada = document.getElementById("status-quarto2");

    console.log("Lâmpada Quarto 2 ligada");
    statuslampada.textContent = "Lâmpada ligada";
    lampada.classList.remove("desligada");
    lampada.classList.add("ligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/quarto2/ligar";
    clientWeb.send(msg);
}

function desligarLampadaQuarto2() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-quarto2");
    const statuslampada = document.getElementById("status-quarto2");

    console.log("Lâmpada Quarto 2 desligada");
    statuslampada.textContent = "Lâmpada desligada";
    lampada.classList.remove("ligada");
    lampada.classList.add("desligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/quarto2/desligar";
    clientWeb.send(msg);
}

// ========================== COZINHA ==========================
function ligarLampadaCozinha() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-cozinha");
    const statuslampada = document.getElementById("status-cozinha");

    console.log("Lâmpada Cozinha ligada");
    statuslampada.textContent = "Lâmpada ligada";
    lampada.classList.remove("desligada");
    lampada.classList.add("ligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/cozinha/ligar";
    clientWeb.send(msg);
}

function desligarLampadaCozinha() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampada = document.getElementById("img-cozinha");
    const statuslampada = document.getElementById("status-cozinha");

    console.log("Lâmpada Cozinha desligada");
    statuslampada.textContent = "Lâmpada desligada";
    lampada.classList.remove("ligada");
    lampada.classList.add("desligada");

    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/cozinha/desligar";
    clientWeb.send(msg);
}
function ligarTodas() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    const lampadas = document.querySelectorAll(".card img");
    const statusLampadas = document.querySelectorAll(".card #status-sala, .card #status-cozinha, .card #status-quarto1, .card #status-quarto2");

    console.log("Ligando todas as lâmpadas");
    statusLampadas.forEach(status => status.textContent = "Lâmpada ligada");
    lampadas.forEach(lampada => {
        lampada.classList.remove("desligada");
        lampada.classList.add("ligada");
    });
    
    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/ligar";
    clientWeb.send(msg);
}
function desligarTodas() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }
    const lampadas = document.querySelectorAll(".card img");
    const statusLampadas = document.querySelectorAll(".card #status-sala, .card #status-cozinha, .card #status-quarto1, .card #status-quarto2");

    console.log("Desligando todas as lâmpadas");
    statusLampadas.forEach(status => status.textContent = "Lâmpada desligada");
    lampadas.forEach(lampada => {
        lampada.classList.remove("ligada");
        lampada.classList.add("desligada");
    });
    
    const msg = new Paho.MQTT.Message('');
    msg.destinationName = "senai510/lampada/desligar";
    clientWeb.send(msg);
}

// ========================== PISCAR ALTERNADO ==========================

// ESTAS DUAS LINHAS SÃO OBRIGATÓRIAS E FICAM FORA DA FUNÇÃO 👇
let intervaloPiscar = null; 
let estadoPisca = false;

function piscarAlternado() {
    if (!clientWeb.isConnected()) { console.log("Aguarde a conexão!"); return; }

    if (intervaloPiscar !== null) {
        console.log("As lâmpadas já estão piscando!");
        return; 
    }

    console.log("Iniciando piscar alternado com vibração...");
    
    intervaloPiscar = setInterval(() => {
        estadoPisca = !estadoPisca; 

        // 1. Faz o fundo da tela piscar (alterna a classe no <body>)
        document.body.classList.toggle("fundo-piscante", estadoPisca);

        // 2. Faz o celular vibrar por 200 milissegundos (Se for Android)
        if ("vibrate" in navigator) {
            navigator.vibrate(200); 
        }

        // 3. Alterna as lâmpadas via MQTT
        if (estadoPisca) {
            ligarLampadaSala();
            ligarLampadaQuarto1();
            desligarLampadaCozinha();
            desligarLampadaQuarto2();
        } else {
            desligarLampadaSala();
            desligarLampadaQuarto1();
            ligarLampadaCozinha();
            ligarLampadaQuarto2();
        }
    }, 1000); // 1000 ms = 1 segundo
}

function pararPiscar() {
    if (intervaloPiscar !== null) {
        clearInterval(intervaloPiscar); 
        intervaloPiscar = null;         
        console.log("Piscar alternado interrompido.");
        
        // 1. Remove a cor escura do fundo da tela
        document.body.classList.remove("fundo-piscante");

        // 2. Para qualquer vibração que ainda esteja acontecendo
        if ("vibrate" in navigator) {
            navigator.vibrate(0); 
        }
        
        // 3. Desliga as lâmpadas e finaliza
        desligarTodas(); 
    }
}