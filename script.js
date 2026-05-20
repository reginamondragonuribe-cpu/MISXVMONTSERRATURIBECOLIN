const fechaEvento = new Date("July 25, 2026 00:00:00").getTime();
 
// Función que actualiza un número aplicando el efecto flip
function actualizarConFlip(elemento, nuevoValor) {
  const valorActual = parseInt(elemento.innerText);
  if (valorActual !== nuevoValor) {
    elemento.classList.add('flip');
    elemento.innerText = nuevoValor;
    setTimeout(() => {
      elemento.classList.remove('flip');
    }, 450);
  }
}
 
const contador = setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;
 
  if (distancia < 0) {
    clearInterval(contador);
    document.querySelector(".reloj-wrapper").innerHTML = 
      '<div class="time-num" style="grid-column: span 4;">¡Hoy es el gran día!</div>';
    return;
  }
 
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
 
  actualizarConFlip(document.getElementById("dias"), dias);
  actualizarConFlip(document.getElementById("horas"), horas);
  actualizarConFlip(document.getElementById("minutos"), minutos);
  actualizarConFlip(document.getElementById("segundos"), segundos);
}, 1000);
 
const elementos = document.querySelectorAll('.animar, .animar-izq, .animar-der');
 
function mostrarElementos() {
  const trigger = window.innerHeight * 0.85;
 
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
 
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}
 
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);
 
document.addEventListener("DOMContentLoaded", () => {
 
  const musica = document.getElementById("musica");
  const btn = document.getElementById("abrir");
  const overlay = document.getElementById("overlay");
  const toggle = document.getElementById("toggleMusica");
 
  let reproduciendo = false;
 
  // ABRIR INVITACIÓN
  btn.addEventListener("click", () => {
    musica.volume = 0.3;
    musica.play().catch(error => {
      console.log("Error al reproducir:", error);
    });
    overlay.classList.add("ocultar");
    reproduciendo = true;
    toggle.innerText = "🔊";
  });
 
  // BOTÓN MÚSICA
  toggle.addEventListener("click", () => {
    if(reproduciendo){
      musica.pause();
      toggle.innerText = "🔇";
      reproduciendo = false;
    } else {
      musica.play();
      toggle.innerText = "🔊";
      reproduciendo = true;
    }
  });
});
 
// LISTA DE FAMILIAS
const familias = [
    { id_familia:1, nombre_familia:"Familia Uribe Colin", boletos:4 },
    { id_familia:2, nombre_familia:"Familia Uribe Román", boletos:4 },
    { id_familia:3, nombre_familia:"Familia Mondragon Uribe", boletos:7 },
    { id_familia:4, nombre_familia:"Familia Tabares Sanchez", boletos:3 },
    { id_familia:5, nombre_familia:"Familia Sánchez Pérez", boletos:4 },
    { id_familia:6, nombre_familia:"Norma Uribe Monroy", boletos:1 },
    { id_familia:7, nombre_familia:"Carlos Uribe Monroy", boletos:2 },
    { id_familia:8, nombre_familia:"Familia Uribe Contreras", boletos:5 },
    { id_familia:9, nombre_familia:"Familia Uribe Oliva", boletos:2 },
    { id_familia:10, nombre_familia:"Familia Colin Diaz", boletos:3 },
    { id_familia:11, nombre_familia:"Familia Díaz Deras", boletos:5 },
    { id_familia:12, nombre_familia:"Familia Gutiérrez Díaz", boletos:4 },
    { id_familia:13, nombre_familia:"Familia Gutiérrez Espinoza", boletos:2 },
    { id_familia:14, nombre_familia:"Familia Gutiérrez Zayas", boletos:5 },
    { id_familia:15, nombre_familia:"Familia Díaz Peralta", boletos:4 },
    { id_familia:16, nombre_familia:"Familia Ortega Díaz-Martínez", boletos:9 },
    { id_familia:17, nombre_familia:"Familia García Gutiérrez", boletos:2 },
    { id_familia:18, nombre_familia:"Familia Ortega Gutiérrez", boletos:4 },
    { id_familia:19, nombre_familia:"Familia Gutiérrez Gómez", boletos:2 },
    { id_familia:20, nombre_familia:"Familia Sánchez", boletos:3 },
    { id_familia:21, nombre_familia:"Familia Monroy Anaya", boletos:2 },
    { id_familia:22, nombre_familia:"Familia Monroy Anaya", boletos:2 },
    { id_familia:23, nombre_familia:"Familia Monroy Anaya", boletos:4 },
    { id_familia:24, nombre_familia:"Familia Monroy Anaya", boletos:3 },
    { id_familia:25, nombre_familia:"Familia Monroy Lara", boletos:2 },
    { id_familia:26, nombre_familia:"Familia Ponce de León Monroy", boletos:4 },
    { id_familia:27, nombre_familia:"Familia Ponce de León Monroy", boletos:4 },
    { id_familia:28, nombre_familia:"Juan Monroy Lara", boletos:1 },
    { id_familia:29, nombre_familia:"Familia Martínez Ortiz", boletos:3 },
    { id_familia:30, nombre_familia:"Familia Gallegos Gutiérrez", boletos:4 },
    { id_familia:31, nombre_familia:"Familia Tapia Gallegos", boletos:4 },
    { id_familia:32, nombre_familia:"Familia Gutiérrez Campos", boletos:4 },
    { id_familia:33, nombre_familia:"Familia Gutiérrez Rodríguez", boletos:3 },
    { id_familia:34, nombre_familia:"Familia Ortiz Lopez", boletos:4 },
    { id_familia:35, nombre_familia:"Familia Ortiz Rodríguez", boletos:3 },
    { id_familia:36, nombre_familia:"Familia Ortiz Rodríguez", boletos:4 },
    { id_familia:37, nombre_familia:"Familia Peñaloza", boletos:2 },
    { id_familia:38, nombre_familia:"Familia Ortega Díaz", boletos:4 },
    { id_familia:39, nombre_familia:"Familia Velázquez", boletos:2 },
    { id_familia:40, nombre_familia:"Familia Mancilla", boletos:3 },
    { id_familia:41, nombre_familia:"Familia Jiménez Martínez de Velasco", boletos:2 },
    { id_familia:42, nombre_familia:"Familia Martínez Amezcua", boletos:2 },
    { id_familia:43, nombre_familia:"Familia Amezcua Diaz", boletos:2 },
    { id_familia:44, nombre_familia:"Itzel Martínez García", boletos:1 },
    { id_familia:45, nombre_familia:"Aitana Rodea Ramírez", boletos:1 },
    { id_familia:46, nombre_familia:"Ana y Brenda Hernández", boletos:1 },
    { id_familia:47, nombre_familia:"Camila González Hernández", boletos:1 },
    { id_familia:48, nombre_familia:"Santiago Ramos Sotelo", boletos:1 },
    { id_familia:49, nombre_familia:"Alejandro Valencia Barba", boletos:1 },
    { id_familia:50, nombre_familia:"Azul Morales Esquivel", boletos:1 },
    { id_familia:51, nombre_familia:"Ashley Enciso Corona", boletos:1 },
    { id_familia:52, nombre_familia:"Abigail Rangel Garcia", boletos:1 },
    { id_familia:53, nombre_familia:"Vanessa", boletos:1 },
    { id_familia:54, nombre_familia:"Emmanuel Ponce", boletos:1 },
    { id_familia:55, nombre_familia:"Julieta", boletos:1 },
    { id_familia:56, nombre_familia:"Mia", boletos:1 },
    { id_familia:57, nombre_familia:"Nicolas Alvis", boletos:1 },
    { id_familia:58, nombre_familia:"Daniel", boletos:1 },
    { id_familia:59, nombre_familia:"Familia Martinez Gutierrez", boletos:2 },
    { id_familia:60, nombre_familia:"Padre Luis Alberto", boletos:1 },
    { id_familia:61, nombre_familia:"Familia Rojas Zarate", boletos:4 },
    { id_familia:62, nombre_familia:"Familia Lopez Pintor", boletos:4 },
    { id_familia:63, nombre_familia:"Familia Hernandez Brigido", boletos:3 },
    { id_familia:64, nombre_familia:"Pablo", boletos:2 },
    { id_familia:65, nombre_familia:"Sr. Horacio y Patricia", boletos:2 },
    { id_familia:66, nombre_familia:"Familia Monroy Hernández", boletos:4 },
    { id_familia:67, nombre_familia:"Familia Monroy Hernández", boletos:5 },
];
 
// LEER PARAMETRO DEL LINK
const params = new URLSearchParams(window.location.search);
const idFamilia = parseInt(params.get("familia"));
let familiaActual = null;
 
if(idFamilia){
  familiaActual = familias.find(f => f.id_familia === idFamilia);
  if(familiaActual){
    document.getElementById("nombreFamilia").innerText = familiaActual.nombre_familia;
    document.getElementById("boletosTexto").innerText = "Boletos asignados: " + familiaActual.boletos;
    
    // Configuramos el input con el máximo de boletos permitidos
    const inputConfirmados = document.getElementById("confirmados");
    inputConfirmados.max = familiaActual.boletos;
    inputConfirmados.min = 0;
    inputConfirmados.value = familiaActual.boletos; // Sugerimos que van todos por defecto
  }
}
 
// ENVIAR CONFIRMACION A GOOGLE SHEETS
const scriptURL = "https://script.google.com/macros/s/AKfycbxzl6LVeT6pgqup2ah08bd7stNQyFuxyGCmzIrXqfZZncCPVN7gEPJ5H1H-2AAvn163FA/exec";
 
function confirmarAsistencia(){
  const input = document.getElementById("confirmados");
  const confirmados = parseInt(input.value);
 
  // VALIDACIÓN DE SEGURIDAD
  if(isNaN(confirmados) || confirmados < 0){
    alert("Por favor ingresa un número válido de asistentes.");
    return;
  }
 
  if(familiaActual && confirmados > familiaActual.boletos){
    alert("Lo sentimos, solo tienes " + familiaActual.boletos + " boletos asignados.");
    input.value = familiaActual.boletos; // Corregimos el valor automáticamente
    return;
  }
 
  fetch(scriptURL,{
    method:"POST",
    body:new URLSearchParams({
      id_familia: idFamilia,
      confirmados: confirmados,
      nombre_familia: familiaActual ? familiaActual.nombre_familia : "Desconocido"
    })
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("mensaje").innerHTML = "✅ Confirmación enviada correctamente";
    document.querySelector(".confirmacion button").disabled = true; // Desactivar botón tras enviar
  })
  .catch(()=>{
    document.getElementById("mensaje").innerHTML = "❌ Hubo un error al enviar la confirmación";
  });
}
