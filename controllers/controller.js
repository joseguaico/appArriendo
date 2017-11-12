var electron = require('electron')

function showPage(page){
	$('.Page').hide();
	$('.'+page).fadeIn();
}

function realizarReserva(){
	var cod_bicicleta = $('#cod_bicicleta').val();
	var rut_cliente = $('#rut_cliente').val();
	var fecha_solicitud = $('#fecha_solicitud').val();
	var fecha_retiro = $('#fecha_retiro').val();
	var id_sucursal_retiro = $('#id_sucursal_retiro').val();
	var fecha_devolucion = $('#fecha_devolucion').val();
	var id_sucursal_devolucion = $('#id_sucursal_devolucion').val();

	var reserva = new reservaController();

	reserva.saveReserva(
		cod_bicicleta,
		rut_cliente,
		fecha_solicitud,
		fecha_retiro,
		id_sucursal_retiro,
		fecha_devolucion,
		id_sucursal_devolucion,
		function(result, cod_reserva){
			if (result === true){
				alert('Reserva realizada exitosamente. Nº '+cod_reserva);
				//location.href='./index.html';
			}else{
				alert('Error al realizar la reserva');
			}
		}
	);
}
