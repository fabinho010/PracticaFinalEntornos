
function irAlta() {
  window.location.href = "../paginas/alta.html";
}

/**ME PERMITE IR LA PAGINA DE lOGIN */
function irLogin() {
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('mail');
    window.location.href = "../index.html";
}

/* mE ENSEÑA LA TABLA DE MEDICAMENTOS*/
function verTabla(){
  let mail = sessionStorage.getItem('mail');
  let session = sessionStorage.getItem('session');
  var http = new XMLHttpRequest();
  http.open("GET","http://localhost:8080/farmaceutica/ServXips?mail=" + mail +"&session="+session, true);

  http.onload = function(){
    if(http.status === 200  ){
      let responseHtml = http.response;
      let containerButtons =  document.querySelector(".container-buttons");
      let tableContainer = document.getElementById("table-container");
      /**
      Meto la repuesta del backend en el div correspondiente a la tabla
       */
      tableContainer.innerHTML = responseHtml;
      //Eventos a la hora de mostar la tabla,el bloque de botones se va hacia arriba y se enseña la tabla
      tableContainer.classList.add("show");
      containerButtons.classList.add("arriba");
    } else{
      console.error("Error en la solicitud"+ http.status);
    }
  }
  http.send();

}
