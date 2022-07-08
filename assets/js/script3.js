
 
  document.querySelector("#respuesta").onclick = function () {
    let valor1 = document.querySelector("#one").value;
    let valor2 = document.querySelector("#two").value;
    let valor3 = document.querySelector("#three").value;

    let total = valor1 + valor2 + valor3;
    
    if (total === "911"){
        document.querySelector("#correcto").textContent ="Bienvenido usuario 1";
    }
    else if (total === "714"){
        document.querySelector("#correcto").textContent ="Bienvenido usuario 2";
    }
    else {
        document.querySelector("#correcto").textContent ="Lo lamento contraseña incorrecta";
    }
}