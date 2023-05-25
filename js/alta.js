function irGestion (){
    window.location.href = "../paginas/gestion.html";
}

function getPatients(){
    let mail = sessionStorage.getItem('mail');
    let session = sessionStorage.getItem('session');
    var http = new XMLHttpRequest();
    
    http.open("GET","http://localhost:8080/farmaceutica/ServePatients?mail=" + mail + "&session="+ session,true);

    http.onload = function (){
        if (this.readyState== 4 && http.status==200){
            var response = JSON.parse(http.response);

            var patientSelect = document.getElementById("paciente");
            for(var i = 0; i < response.length; i++){
                var option = document.createElement("option");
                option.text = response[i];
                patientSelect.add(option);
            }  
        }else{
            console.error("Error en la solicitud ServePatients",http.status);
        }
    };

    http.send();
}