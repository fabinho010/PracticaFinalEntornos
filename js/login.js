const wrapper = document.querySelector('.wrapper');
const welcome = document.querySelector('.welcome');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconeClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    welcome.classList.remove('active-popup');
});

iconeClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

function enviar(){
    // valores de los campos de entrada de email y password en el formulario y lo guarda en la variable email y password respectivamente
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //Proceso Backend
    //Inicia la solicitud hhtp
    var http = new XMLHttpRequest();
    // Configuración de  la solicitud HTTP GET al servlet .
    http.open("GET","http://localhost:8080/farmaceutica/login?email=" + email +"&password="+ password,true);
    //Define una función de devolución de llamada que se ejecutará cuando la respuesta de la solicitud HTTP esté lista.
    http.onreadystatechange = function(){
        // Verifica si el estado de la respuesta es 200 ( que signica éxito) para continuar .
        if(this.readyState== 4 && http.status==200){
            //Obtiene el texto de la respuesta de la solicitud HTTP
            var session = http.responseText;
            if(session !==null){
                //Almacena el valor de la sesión en el almacenamiento de sesión del navegador y lo mismo pasa con el email
                sessionStorage.setItem("session",session)
                sessionStorage.setItem("mail",email);
                // Se pone página de gestión,ya que el login ha sido un exito
                window.location.href = "gestion.html";
            } else{
                alert("Sesion interrumpida.Vuelva a intentarlo.")
            }
        }
    }
    //Envía la solicitud HTTP al servidor con los parámetros especificados en el método open()*/
    http.send();
}