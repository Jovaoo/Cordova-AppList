
$(document).ready(function () {
  $("#botonAñadir").click(function () {
    var nuevaTarea = $("#addTarea").val();
    var fechaActual = new Date();
    var opcionesDeFormato = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    var formatoFecha = new Intl.DateTimeFormat("es-ES", opcionesDeFormato);
    var fechaFormateada = formatoFecha.format(fechaActual);
    var nuevaTareaContenido =
      "<li class='py-4'><div class='flex items-center'><input id='todo1' name='todo1' type='checkbox' class='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'><label for='todo1' class='ml-3 block text-gray-900 flex flex-col'><span class='text-lg font-medium'>" +
      nuevaTarea +
      "</span><span class='text-sm font-light text-gray-500'>" +
      fechaFormateada +
      "</span></label><button class='ml-auto bg-blue-600 hover:bg-blue-800 border-blue-600 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded edit-button' type='button'>Editar</button></div></li>";
    $("#formTareas").append(nuevaTareaContenido);
  });
});

$(document).ready(function () {
  $(".edit-button").click(function () {
    var label = $(this).prev("label");
    var span = label.find("span:first");
    span.attr("contentEditable", true);
    span.focus(); // Agrega esta línea para enfocar el elemento editable
  });
});
