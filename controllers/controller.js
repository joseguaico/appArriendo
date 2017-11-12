var electron = require('electron')

function showPage(page){
	$('.Page').hide();
	$('.'+page).fadeIn();
}

function realizarReserva(){
	var validation = true;

	var cod_bicicleta = $('#cod_bicicleta').val();
	var rut_cliente = $('#rut_cliente').val();
	var fecha_solicitud = $('#fecha_solicitud').val();
	var fecha_retiro = $('#fecha_retiro').val();
	var id_sucursal_retiro = $('#id_sucursal_retiro').val();
	var fecha_devolucion = $('#fecha_devolucion').val();
	var id_sucursal_devolucion = $('#id_sucursal_devolucion').val();

	/* validaciones */
	if (isNaN(cod_bicicleta) || cod_bicicleta.length > 11 || cod_bicicleta==''){
		alert('Ingrese un código de bicicleta válido');
		validation = false;
	}else{
		if (isNaN(rut_cliente) || rut_cliente.length > 11 || rut_cliente==''){
			alert('Ingrese un rut cliente válido');
			validation = false;
		}else{
			if (fecha_solicitud == ''){
				alert('Ingrese una fecha de solicitud válida');
				validation = false;
			}else{
				if (fecha_retiro == ''){
					alert('Ingrese una fecha de retiro válida');
					validation = false;
				}else{
					if (isNaN(id_sucursal_retiro) || id_sucursal_retiro.length>1 || id_sucursal_retiro ==''){
						alert('Ingrese una sucursal de retiro válida');
						validation = false;
					}else{
						if (fecha_devolucion == ''){
							alert('Ingrese una fecha de devolución válida');
							validation = false;
						}else{
							if (isNaN(id_sucursal_devolucion) || id_sucursal_devolucion.length>1 || id_sucursal_devolucion ==''){
								alert('Ingrese una sucursal de devolución válida');
								validation = false;
							}
						}
					}
				}
			}
		}
	}
	/* fin validaciones */

	if (validation){
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
					alert('Reserva realizada exitosamente.\n Nº '+cod_reserva);
					location.href='./index.html';
				}else{
					alert('Error al realizar la reserva');
				}
			}
		);
	}
}
