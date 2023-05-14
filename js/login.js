const wrapper = document.querySelector(".wrapper");
const welcome = document.querySelector(".welcome");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconeClose = document.querySelector(".icon-close");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  welcome.classList.remove("active-popup");
});

iconeClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});


function enviar() {
    // Obtiene los valores de los campos de entrada de email y password en el formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Construye la URL de la solicitud con los valores codificados de email y password
    const url = `http://localhost:8080/farmaceutica/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  
    // Realiza la solicitud usando fetch API
    fetch(url)
      .then(response => {
        if (response.ok) {
          // Si la respuesta de la solicitud es exitosa, devuelve el texto de la respuesta
          return response.text();
        } else {
          // Si la respuesta no es exitosa, lanza un error
          throw new Error("Error en la solicitud de inicio de sesión.");
        }
      })
      .then(session => {
        if (session !== null) {
          // Si se obtiene una sesión válida, la guarda en el almacenamiento de sesión del navegador
          sessionStorage.setItem("session", session);
          sessionStorage.setItem("mail", email);
          // Redirecciona a la página de gestión
          window.location.href = "paginas/gestion.html";
        } else {
          // Si la sesión es nula, lanza un error
          throw new Error("Sesión interrumpida. Vuelva a intentarlo.");
        }
      })
      .catch(error => {
        // Captura cualquier error ocurrido durante el proceso y muestra una alerta
        console.error(error);
        alert(error.message);
      });
}
