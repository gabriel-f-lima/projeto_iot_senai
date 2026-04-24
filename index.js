let clientWeb = null;
// Número aleatório no ID para o broker não desconectar
const clientId = "Esp32GFL_" + Math.floor(Math.random() * 10000); 
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
    useSSL: true,
    onSuccess: function() {
        console.log("Conectado ao broker MQTT");
    },
    onFailure: function(){
        console.log("Falha ao conectar ao broker MQTT");
    }
});

// ========================== SALA ==========================
function ligarLampadaSala() {
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