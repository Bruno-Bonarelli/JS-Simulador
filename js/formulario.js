function formularioInit(){

    const nodoFormulario = document.querySelector("#formulario");
    nodoFormulario.addEventListener("submit", (event)=>{

        event.preventDefault();

        const nombre = document.querySelector("#name");
        const email = document.querySelector("#email");
        const consulta = document.querySelector("#message");

        if (nombre.value!=="" && email.value!=="" && consulta.value!==""){
            const checkFormulario = document.getElementById("succes")
            checkFormulario.innerHTML= `<br><p style=color:green>✓ Enviado ¡Gracias por tu consulta!</p>`;

        } else if (nombre.value==""){
            const errorNombre = document.getElementById("#errorNombre");
            errorNombre.innerHTML = `<small style="color:red">Complete su nombre</small>`;

        } else if (email.value==""){
            const errorEmail = document.getElementById("errorEmail");
            errorEmail.innerHTML = `<small style="color:red">Complete su Email</small>`;
        } else if (consulta.value==""){

            const errorConsulta = document.getElementById("errorConsulta")
            errorConsulta.innerHTML = `<small style="color:red">Escriba una consulta</small>`;
        }
    })
}
