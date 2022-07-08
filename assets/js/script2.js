


function suma () {
    let calamardo = document.querySelector("#cantidad-1").value;
    let gato = document.querySelector("#cantidad-2").value;
    let perro = document.querySelector("#cantidad-3").value;
    let total= +calamardo + +gato + +perro;

     if (total < 10){
        document.querySelector("#advertencia").textContent = "Llevas"  + total + "stickers";
     }
     else  {
      document.querySelector("#advertencia").textContent ="llevas demasiados stickers"
     }
     
}
/*if(isNaN(sticker1)){
        alert="Ingresa solo numeros"
    }*/