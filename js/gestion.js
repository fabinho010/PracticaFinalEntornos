function irAlta() {
  window.location.href = "../paginas/alta.html";
}

  function irLogin() {
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('mail');
    window.location.href = "../index.html";
  }
  