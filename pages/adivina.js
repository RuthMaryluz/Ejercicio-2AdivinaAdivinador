document.addEventListener("DOMContentLoaded", function(){    //DOMContentLoaded -> espera a que cargue el contenido de la pag
    const btnInicio = document.getElementById("btnInicio");  //Busca con el  Id en el html y almacena en la variable
    const adivinarDiv = document.getElementById("adivinarDiv");
    const adivinarNumero = document.getElementById("adivinarNumero");
    const exitoDiv = document.getElementById("exitoDiv");
    const exitoMensaje = document.getElementById("exitoMensaje");

    btnInicio.addEventListener("click", iniciarJuego);
    function iniciarJuego(){
        btnInicio.style.display = "none";
        adivinarDiv.style.display = "block";
        let numeroMenor = 1;
        let numeroMayor = 100;
        let adivinar;

        function adivinarJuego(){
            adivinar = Math.floor((numeroMenor + numeroMayor)/2);
            adivinarNumero.textContent = adivinar;

        }
        adivinarJuego();
        const btnSi = document.getElementById("btnSi");
        const btnNo = document.getElementById("btnNo");

        btnSi.addEventListener("click", function(){
            exitoDiv.style.display = "block";
            adivinarDiv.style.display = "none";
            exitoMensaje.textContent = `Tu número es ${adivinar}, ¡excelente desición!`;


        });

        btnNo.addEventListener("click", function(){
            const mayor = confirm("¿Tu número es mayor?");
            if(mayor){
                numeroMenor = adivinar + 1;
            
            } else{numeroMayor = adivinar - 1};
            adivinarJuego();

            
        
        });

        
        

    }
   
});
function recargar(){
    window.location.reload();
 }