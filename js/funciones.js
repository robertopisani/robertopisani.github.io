


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



function cambiarboton(){
  var i=document.getElementById("boton").value = "MENSAJE ENVIADO";
  var i=document.getElementById("boton").style.backgroundColor = "green";

}
  
function valida_envia(){
  
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
         alert("Tiene que escribir su nombre")
         document.fvalida.nombre.focus()
         return 0;
      }

    //valido el email y el teléfono
  if (document.fvalida.email.value.length==0 && document.fvalida.telefono.value.length==0){
      alert("Necesitamos una dirección de mail o un teléfono para contactarlo")
      document.fvalida.email.focus()
      return 0;
      }
    
    
    
  //el formulario se envia
  var i=document.getElementById("boton").value = "MENSAJE ENVIADO";
  var i=document.getElementById("boton").style.backgroundColor = "green";
  alert("Muchas Gracias. Estaremos en contacto muy pronto!");

   //Ya Veré cómo hago para guardar estos datos del lado Servidor
   
  document.fvalida.submit();
}

