"use strict";

    const frases = [
      "Eres lo mejor que me ha pasado 💖",
      "Contigo todo es más bonito ✨",
      "Eres mi lugar favorito en el mundo 🌎",
      "Gracias por existir 💕",
      "Siempre juntos, pase lo que pase ❤️"
    ];

    function mostrarFrase() {
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      document.getElementById("frase").innerText = fraseAleatoria;
    }

    function mostrarSorpresa() {
      document.getElementById("sorpresa").classList.remove("hidden");
    }

    // Carta escrita a mano
    const textoCarta = "Cuando te volví a conocer, al momento me di cuenta de lo increíble que eres y poquito a poco me fui enamorando de ti, inconscientemente y sin siquiera hacerme una idea de todo lo que siento por ti y de lo feliz que me haces. A pesar de que nunca te han llegado a valorar, sinceramente es una pena porque eres una niña increíble y que vale oro, con un corazoncito que es precioso y que no merece menos de lo que yo te doy, al contrario, mereces incluso más. Me parece surrealista que esos ojitos tan preciosos que me traían loco desde chico solo quieran mirarme a mi y de verdad que quiero que seas tú la definitiva porque desde el principio hemos estado haciendo las cosas bien para que esto pueda salir adelante de la mejor forma posible. Recordarte que te quiero muchísimo y que te amo más todavía y que eres la mujer de mis ojos, que no quiero nada que no sea contigo. Supe ver la falta que te hacía que verdaderamente te quisieran y la suerte que tengo de que me salga natural, que al juntarnos hemos tenido una conexión tan especial que me encantaría seguir así de por vida porque tú me haces feliz y contigo me olvido de todo, contigo se me hacen minutos las horas y cuando estas lejos todo se me hace eterno, esperando para verte. Contigo no me importa el plan, lo que me importa es que sea contigo, ir sin rumbo a Dios sabrá donde pero contigo y pasándolo bien juntitos. Solo quiero poder ver esos ojitos el resto de mi vida y poder verte crecer y progresar a mi ladito, construir cositas juntos y formar nuestras vidas.❤️";
    let i = 0;
    function escribirCarta() {
      const carta = document.getElementById("cartaEscrita");
      carta.innerHTML = "";
      i = 0;
      const intervalo = setInterval(() => {
        carta.innerHTML += textoCarta.charAt(i);
        i++;
        if (i === textoCarta.length) clearInterval(intervalo);
      }, 50);
    }

    // Corazones flotando
    function crearCorazon() {
      const corazon = document.createElement("div");
      corazon.innerHTML = "❤️";
      corazon.classList.add("corazon");
      corazon.style.left = Math.random() * 100 + "vw";
      corazon.style.fontSize = Math.random() * 20 + 15 + "px";
      document.body.appendChild(corazon);

      setTimeout(() => {
        corazon.remove();
      }, 6000);
    }

    setInterval(crearCorazon, 800);