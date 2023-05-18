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
  http.send();

}
  