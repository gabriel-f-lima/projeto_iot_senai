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
        // 2. Destrava os botões apenas quando conectar
        controlarBotoes(false); 
    },
    onFailure: function(){
        console.log("Falha ao conectar ao broker MQTT");
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