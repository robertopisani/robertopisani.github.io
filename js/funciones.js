


// ****  COPIADO DE jQuery  DESDE AQUI  **** 

var offcanvas_toggle = $('.js-offcanvas-toggle');
offcanvas_toggle.on('click', function() {


  if ( $('body').hasClass('offcanvas-open') ) {
    $('body').removeClass('offcanvas-open');
  } else {
    $('body').addClass('offcanvas-open');
  }

});


$(document).click(function(e) {
  var container = $('.js-offcanvas-toggle, #offcanvas_menu');
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ( $('body').hasClass('offcanvas-open') ) {
      $('body').removeClass('offcanvas-open');
    }
  }
});

// ****  COPIADO DE jQuery  HASTA AQUI  **** 

// Hago validaciones de los campos del formulario

function valida_envia(){
  
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
         alert("Por favor, ingrese su nombre completo")
         document.fvalida.nombre.focus()
         return 0;
      }

    //valido el email y el teléfono
  if (document.fvalida.email.value.length==0 && document.fvalida.telefono.value.length==0){
      alert("Necesitamos una dirección de mail o un teléfono para contactarlo");
      document.fvalida.email.focus();
      return 0;
      }

      //valido que el formato de mail sea válido
      
      if (document.fvalida.email.value.length!=0){
        // Esta funcion es de stackoverflow.com/
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(document.getElementById("email").value) ){
        
            alert("Error: La dirección de correo " + document.getElementById("email").value + " es incorrecta.");
            document.fvalida.email.focus();
            return 0;
           } 
      }
      
    
   //valido el mensaje
   if (document.fvalida.mensaje.value.length==0){
    alert("Por favor, indique un breve motivo de contacto.")
    document.fvalida.mensaje.focus()
    return 0;
 }   
    
  //envío el formulario
  document.getElementById("boton").value = "MENSAJE ENVIADO";
  document.getElementById("boton").style.color = "black";
  document.getElementById("boton").style.borderColor = "green";
  document.getElementById("boton").style.backgroundColor = "lightgreen";

  // dejo listo el formulario para un nuevo mensaje
  document.getElementById("nombre").value=null;
  document.getElementById("email").value=null;
  document.getElementById("telefono").value=null;
  document.getElementById("mensaje").value=null;

  alert("Muchas Gracias. Estaremos en contacto muy pronto!");
 
  
  // Ya Veré cómo hago para guardar estos datos del lado Servidor

  // document.fvalida.submit();
  
}

// Dejo Botón en Estado de Disponibilidad de Enviar Mensaje
function boton_disponible() {
  var i=document.getElementById("boton").value = "Enviar Mensaje";
  var i=document.getElementById("boton").style.color = "white";
  var i=document.getElementById("boton").style.borderColor = "#0d6efd";
  var i=document.getElementById("boton").style.backgroundColor = "#0d6efd";
}


