var rAction = new reservaActions();

function reservaController(){
	this.saveReserva = function(cod_bicicleta, rut_cliente, fecha_solicitud, fecha_retiro, id_sucursal_retiro, fecha_devolucion, id_sucursal_devolucion, callback){
		var cod_reserva = Math.round(+new Date()/100);
		var reserva = new ReservaModel(cod_reserva,cod_bicicleta, rut_cliente, fecha_solicitud, fecha_retiro, id_sucursal_retiro, fecha_devolucion, id_sucursal_devolucion);
		return rAction.save(reserva, callback)
	}
}