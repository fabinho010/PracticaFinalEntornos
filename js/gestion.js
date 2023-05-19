const tabla = document.querySelector(".tabla-container");
const botonAlta = document.querySelector(".icon.tabla .two")

botonAlta.addEventListener('click',()=> {
    tabla.classList.add('active');
})

function irAlta() {
  window.location.href = "../paginas/alta.html";
}

function irLogin() {
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('mail');
    window.location.href = "../index.html";
}

function verTabla(){
  let mail = sessionStorage.getItem('mail');
  let session = sessionStorage.getItem('session');
  var http = new XMLHttpRequest();
  http.open("GET","http://localhost:8080/farmaceutica/ServXips?mail=" + mail +"&session="+session, true);

  http.onload = function(){
    if(http.status === 200  ){
      let responseHtml = http.response;
      let tableContainer = document.getElementById("table-container");
      tableContainer.innerHTML = responseHtml;
      containerButtons.style.display = 'none'; // Ocultar el bloque de botones
      tablaContainer.style.display = 'block'; // Mostrar la tabla
    } else{
      console.error("Error en la solicitud"+ http.status);
    }
  }
  http.send();

}
/*window.onload = function(){
  document.querySelector(".icon.tabla .two").onclick = verTabla;
}*/
