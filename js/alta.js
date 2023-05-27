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
          // Limpiar el select antes de agregar las nuevas opciones
            patientSelect.innerHTML= "";

            // Agregar la opción "Elige un medicamento..."
            var defaultOption = document.createElement("option");
            defaultOption.selected = true;
            defaultOption.disabled = true;
            defaultOption.text = "Elige un paciente...";
            patientSelect.add(defaultOption);

            //Agrego las opciones
            for(var i = 0; i < response.length; i++){
                var option = document.createElement("option");
                option.text = response[i];
                option.value = response[i];
                patientSelect.add(option);
            }  
            
        }else{
            console.error("Error en la solicitud ServePatients",http.status);
        }
    };
    http.send();
}

function getMedicamentos(){
        let mail = sessionStorage.getItem('mail');
        let session = sessionStorage.getItem('session');
        var http = new XMLHttpRequest();
        http.open("GET","http://localhost:8080/farmaceutica/ServeMedicines?mail=" + mail + "&session="+ session,true);

        http.onload = function(){
            if (this.readyState== 4 && http.status==200){
                var reponse = JSON.parse(http.responseText);

                var medicinaSelect = document.getElementById("medicamento");

                // Limpiar el select antes de agregar las opciones
                medicinaSelect.innerHTML = "";

                // Agregar la opción "Elige un medicamento..."
                var defaultOption = document.createElement("option");
                defaultOption.selected = true;
                defaultOption.disabled = true;
                defaultOption.text = "Elige un medicamento...";
                medicinaSelect.add(defaultOption);
                //Agrego las opciones
                for(var i = 0; i < reponse.length; i++){
                    var option = document.createElement("option");
                    option.text = reponse[i].id;
                    option.value = reponse[i].id;
                    medicinaSelect.add(option);
                }
                
        }else{
            console.error("Error en la solicitud ServeMedicines",http.status);
        }
    };
    http.send();
}
    getMedicamentos();
    getPatients();

    function enviar(){
        let mail = sessionStorage.getItem("mail"); 
        let session = sessionStorage.getItem("session");
        var idXip = document.getElementById("idXip").value;
        var mailP = document.getElementById("paciente").value;
        var medicamento = document.getElementById("medicamento").value;
        var date = document.getElementById("fecha").value;
        var http = new XMLHttpRequest();

            // Validación de parámetros
        if (!idXip || !mailP || !medicamento || !date) {
            alert("Por favor, complete todos los campos.");
        return;
        }

        http.open("POST","http://localhost:8080/farmaceutica/Release?mail=" + mail +"&session=" + session + "&idXip=" + idXip + "&paciente=" + mailP + "&medicamento=" 
        + medicamento + "&fecha=" + date,true);
        
        http.onload = function(){
            if (this.readyState== 4 && http.status==200){
                var response = http.responseText;
                if(response = "ok"){
                    console.info("XIP registrado")
                    alert("XIP registrado correctamente")

                    // Limpiar los inputs
                    document.getElementById("idXip").value = "";
                    document.getElementById("paciente").value = "";
                    document.getElementById("medicamento").value = "";
                    document.getElementById("fecha").value = "";
                }
        }else{
            console.error("Error en la solicitud Release",http.status);
            alert("No se ha podido registrar el xip. Revise los parametros ID del chip o fecha límite.");
        }
    };
        http.send();
    }