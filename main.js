let cuerpo = document.body;
let tituloPage = document.querySelector("title");
let titulo = document.querySelector("h1");
let animacion = document.querySelector(".animacion");
let contenido = document.querySelector(".contenido");
let main = document.querySelector("main");
let imagen = document.querySelector(".imagen");
let subtitulo = document.querySelector("h3.no-viernes");
let subtitulo_dos = document.querySelector("h3.viernes");
let btn_uno = document.querySelector(".btn_uno");
let btn_dos = document.querySelector(".btn_dos");
let fechaHoy = document.querySelector("h6");
let audioA = document.querySelectorAll("audio");

let fecha = new Date();
let dia = fecha.getDay();
let diaMes = fecha.getDate();
var confirmacion = [];
var dias = {
  0: ["Domingo", "1", "8", "15", "22", "29"],
  1: ["Lunes", "2", "9", "16", "23", "30"],
  2: ["Martes", "3", "10", "17", "24", "31"],
  3: ["Miercoles", "4", "11", "18", "25"],
  4: ["Jueves", "5", "12", "19", "26"],
  5: ["Viernes", "6", "13", "20", "27"],
  6: ["Sabado", "7", "14", "21", "28"],
};
var meses = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre",
};


const frasesViernes13 = [
  'La rareza cósmica nos sonríe: este mes no hay viernes 13 🌌🚫',
  'La estadística está de nuestro lado: no habrá viernes 13 este mes 📊🚫',
  'Un mes sin supersticiones: no existe viernes 13 en nuestro calendario 📆🚫',
  'Los días impares ganan: este mes no tiene viernes 13 🔄🚫',
  'Calma y tranquilidad: no habrá viernes 13 en el calendario 🧘‍♀️🚫',
  'Días bendecidos: ningún viernes 13 en el horizonte 🙏🚫',
  'Este mes está libre de viernes 13: ¡celebremos! 🥳🚫',
  'No es un mito, es realidad: no hay viernes 13 este mes 🚀🚫',
  'El calendario nos da un respiro: sin viernes 13 este mes 📅🚫',
  'Un mes sin malos presagios: no veremos viernes 13 🍀🚫',
  'Afortunados somos: este mes no hay viernes 13 en la lista 🍀🚫',
  'Brindemos por un mes sin viernes 13 en el camino 🥂🚫',
  'El universo conspira a nuestro favor: no hay viernes 13 🌌🚫',
  'Una rareza en el tiempo: este mes no tiene viernes 13 ⏳🚫',
  'Confiemos en el calendario: no habrá viernes 13 este mes 📆🚫',
  'La magia del calendario nos protege: sin viernes 13 🎩🚫',
  'Este mes fluye sin preocupaciones: no hay viernes 13 🌊🚫',
  'Un mes sin sombras ominosas: ningún viernes 13 a la vista 🌞🚫',
  'Los días felices dominan: no hay viernes 13 este mes 😃🚫',
  'Un mes sin supersticiones negativas: sin viernes 13 en el camino 🧙‍♂️🚫',
  'La sincronización perfecta: este mes no tiene viernes 13 ⌛🚫',
  'El destino sonríe: no habrá viernes 13 en el calendario 🌟🚫',
  'Sin temor al viernes 13: este mes está a salvo 🛡️🚫',
  'Un mes libre de misterios oscuros: no veremos viernes 13 🕵️‍♂️🚫',
  'El azar juega a nuestro favor: no hay viernes 13 este mes 🎲🚫',
  'La fortuna nos acompaña: este mes no tiene viernes 13 🍀🚫',
  'El calendario nos sonríe: no habrá viernes 13 en el camino 😄🚫',
  'Un mes sin supersticiones: sin viernes 13 en el horizonte 🧐🚫',
  'La magia del tiempo nos protege: no veremos viernes 13 ⏰🚫',
  'Días de buena suerte: este mes no tiene viernes 13 🤞🚫',
  'Confiemos en el calendario: no hay viernes 13 este mes 🗓️🚫',
  'Sin lugar para la mala suerte: no habrá viernes 13 en el calendario 🍀🚫',
  'Un mes sin preocupaciones: no veremos viernes 13 en el camino 🤗🚫',
  'El destino está de nuestro lado: este mes no tiene viernes 13 🌌🚫',
  'La rareza temporal nos protege: sin viernes 13 este mes ⏳🚫',
  'Los días mágicos dominan: no hay viernes 13 en el horizonte ✨🚫',
  'A salvo de malos augurios: este mes no tiene viernes 13 🛡️🚫',
  'Un mes bendecido: no habrá viernes 13 en el calendario 🙌🚫',
  'La buena fortuna nos acompaña: sin viernes 13 este mes 🍀🚫',
  'El calendario está de nuestro lado: no veremos viernes 13 📆🚫',
  'Un mes sin sombras tenebrosas: no hay viernes 13 en el camino 🌞🚫',
  'La sincronía temporal nos protege: este mes no tiene viernes 13 ⏳🚫',
  'Los días felices prevalecen: sin viernes 13 en el horizonte 😃🚫',
  'El universo sonríe: no habrá viernes 13 este mes 🌌🚫',
  'Este mes fluye sin preocupaciones: no veremos viernes 13 🌊🚫',
  'Un mes de buena suerte: sin viernes 13 en el calendario 🍀🚫',
  'La seguridad del calendario nos protege: no hay viernes 13 📅🚫',
  'Días libres de mala suerte: este mes no tiene viernes 13 🍀🚫',
  'Un mes sin supersticiones negativas: sin viernes 13 en el camino 🧙‍♂️🚫',
  'La rareza temporal nos beneficia: no habrá viernes 13 este mes ⌛🚫',
  'El destino juega a nuestro favor: este mes no tiene viernes 13 🎲🚫',
  'La magia del tiempo nos protege: sin viernes 13 en el horizonte 🌟🚫',
  'Sin temor al viernes 13: no veremos viernes 13 en el calendario 🛡️🚫',
  'Un mes de calma y tranquilidad: no hay viernes 13 🧘‍♀️🚫'
];

const frasesMiedoViernes13 = [
  'Cuidado, hoy es viernes 13 y la mala suerte acecha... 😱🔪',
  'El día más temido ha llegado: ¡es viernes 13! Prepárate para lo peor... 😨🌚',
  'En este viernes 13, las sombras esconden oscuros secretos... 👥🕯️',
  'Los espíritus inquietos recorren el mundo en este viernes 13... 👻🌎',
  '¿Escuchas esos susurros? Es viernes 13 y el terror se acerca... 🗣️🌑',
  'En este viernes 13, la luna llena despierta criaturas sobrenaturales... 🌕🐺',
  'No mires detrás de ti... es viernes 13 y algo te sigue... 👀🏃‍♂️',
  '¡Cuidado con los espejos! Hoy es viernes 13 y las cosas no son lo que parecen... 👥🪞',
  '¿Oíste ese ruido extraño? Es viernes 13 y algo se arrastra en la oscuridad... 🎵👣',
  'En este viernes 13, las puertas al más allá pueden abrirse... 🚪👻',
  'Mantén las luces encendidas... hoy es viernes 13 y las sombras danzan... 💡🌑',
  '¡Huye mientras puedas! Es viernes 13 y el mal te persigue... 🏃‍♀️💨',
  'En este viernes 13, los gatos negros cruzan tu camino... 🐱🌑',
  'La noche más siniestra ha llegado: hoy es viernes 13... 🌌🦇',
  '¿Sientes esa presencia fría? Es viernes 13 y algo te observa... ❄️👁️',
  'En este viernes 13, los sueños se mezclan con las pesadillas... 💤💀',
  'No mires al cielo... es viernes 13 y las estrellas se esconden... 🌌✨',
  '¡Cuidado con los espejos! Hoy es viernes 13 y los reflejos pueden engañar... 👤🪞',
  'La noche está llena de peligros... es viernes 13 y el terror acecha... 🌃😱',
  'En este viernes 13, los cuervos anuncian malas noticias... 🕊️🦅',
  '¿Esa sombra en la esquina? Es viernes 13 y algo aguarda en la penumbra... 👥🌑',
  'En este viernes 13, las puertas al inframundo pueden abrirse... 🔥🚪',
  '¡No te quedes solo! Hoy es viernes 13 y la soledad atrae espíritus... 👤👻',
  '¿Escuchas esos pasos sigilosos? Es viernes 13 y algo se acerca... 👣🌑',
  'En este viernes 13, las pesadillas se hacen realidad... 💤💭',
  'La noche se tiñe de misterio... es viernes 13 y el terror se expande... 🌌😨',
  '¿Esa sombra en la ventana? Es viernes 13 y algo te observa desde fuera... 👥🪟',
  'En este viernes 13, los objetos toman vida propia... 🪞🔮',
  '¡Cuidado con las esquinas oscuras! Hoy es viernes 13 y algo acecha en la sombra... ⚠️🌑',
  '¿Sientes ese escalofrío? Es viernes 13 y algo te atraviesa el alma... ❄️💀',
  'En este viernes 13, el velo entre mundos se desdibuja... 🌌🌐',
  '¡Huye antes de que sea tarde! Es viernes 13 y la noche esconde peligros... 🏃‍♂️🌑',
  '¿Ese ruido en el ático? Es viernes 13 y algo se oculta entre las sombras... 👀🕸️',
  'En este viernes 13, las supersticiones cobran vida... 🧙‍♂️🌑',
  '¡No mires a los ojos! Hoy es viernes 13 y las miradas pueden embrujar... 👁️👁️',
  '¿Sientes que te observan? Es viernes 13 y los espíritus rondan... 👻👁️',
  'En este viernes 13, los susurros del viento traen malos presagios... 🌬️🌑',
  '¡Apaga todas las velas! Es viernes 13 y las sombras se alargan... 🕯️🌑',
  '¿Esa sombra en el espejo? Es viernes 13 y algo te acecha desde dentro... 👥🪞',
  'En este viernes 13, las leyendas cobran vida... 📜🌑',
  '¡Huye de la oscuridad! Es viernes 13 y los monstruos despiertan... 🏃‍♀️🌑',
  '¿Escuchas los lamentos? Es viernes 13 y los espíritus claman justicia... 🎼👻',
  'En este viernes 13, los gatos negros traen mala suerte... 🐱🌑',
  '¡No cruces bajo escaleras! Hoy es viernes 13 y las reglas del azar dominan... ⚠️🌑',
  '¿Sientes esa mirada fría? Es viernes 13 y algo te persigue... ❄️👀',
  'En este viernes 13, los relojes se detienen a la medianoche... ⏰🕛',
  '¡No te quedes solo! Es viernes 13 y las sombras se ciernen... 👥🌑',
  '¿Oíste ese susurro en la oscuridad? Es viernes 13 y algo busca tu atención... 🎵🌑',
  'En este viernes 13, los espejos revelan más de lo que quisieras ver... 👤🪞',
  '¡Huye de los cementerios! Es viernes 13 y el mundo de los muertos se abre... ⚰️🌑',
  '¿Ese escalofrío en la espalda? Es viernes 13 y algo te toca desde el más allá... ❄️👻',
  'En este viernes 13, las sombras cobran vida... 👥🌑',
  '¡No despiertes a los espíritus! Es viernes 13 y el mundo onírico se mezcla con el real... 💤👻'
];

confirmacion.push(Object.values(dias[dia]));
let confirm = confirmacion.at(0).includes(diaMes.toString());
const apiKey = "1XNJzHLD4gIgx65angZwt4e4EjAAelcI";
var apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=happy&rating=g`;
var apiUrl2 = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=friday13&rating=g`;

fechaHoy.textContent = meses[fecha.getMonth()] + " " + fecha.getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const miAudio = document.getElementById("audio");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    miAudio.play();
    document.querySelector(".frase-dos").classList.add("boom");
    document.querySelector(".frase-dos").textContent =
      "Todos hacemos parte de este dia.. TU TAMBIEN";
      main.style.backgroundImage="url('/img/blood.gif')";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const miAudio = document.getElementById("audio2");
  const playButton = document.getElementById("playButton2");

  playButton.addEventListener("click", function () {
    miAudio.play();
    document.querySelector(".frase-uno").classList.add("boom");
    document.querySelector(".frase-uno").textContent = "Ya vendra el dia.. no te preocupes.";
    main.style.backgroundImage="url('/img/fire.gif')";
    main.style.backgroundSize="cover";

  });
});

if (confirm) {
  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      imagen.setAttribute("src", data.data.images.original.url);
    })
    .catch((error) => {
      console.error("Error al obtener el gif:", error);
    });

  subtitulo.classList.add("oculto");
  btn_uno.classList.add("oculto");
  document.querySelector(".frase-uno").classList.add("oculto");
  subtitulo_dos.textContent = frasesMiedoViernes13[Math.floor(Math.random() * frasesMiedoViernes13.length)];
  titulo.style.color = "#e7e7e7";
  fechaHoy.style.color = "#e7e7e7";
  main.style.backgroundColor = "#3d0b0b";
  contenido.style.backgroundImage = "url(./img/sad.png)";
  cuerpo.style.backgroundColor = "#3d0b0b";
} else {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      imagen.setAttribute("src", data.data.images.original.url);
    })
    .catch((error) => {
      console.error("Error al obtener el gif:", error);
    });
  subtitulo_dos.classList.add("oculto");
  btn_dos.classList.add("oculto");
  document.querySelector(".frase-dos").classList.add("oculto");

  subtitulo.textContent = frasesViernes13[Math.floor(Math.random() * frasesViernes13.length)];
  contenido.style.backgroundImage = "url(./img/happy.png)";
}

function detenerAudio() {
  audioA[0].pause();
  audioA[0].currentTime = 0;
  audioA[1].pause();
  audioA[1].currentTime = 0;
}


// Detener el audio al abandonar la página
window.addEventListener('blur', function() {
  detenerAudio();
});