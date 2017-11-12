function reservaActions(){
	var connection = new connectionDB();

	this.save = function (reserva, callback){
		var c = connection.connected();
		console.log(reserva);
		query1 = "INSERT INTO reserva(cod_reserva, cod_bicicleta, rut_cliente, fecha_solicitud, fecha_retiro, id_sucursal_retiro, fecha_devolucion, id_sucursal_devolucion, estado) VALUES ('"+reserva.cod_reserva+"',"+reserva.cod_bicicleta+","+reserva.rut_cliente+",'"+reserva.fecha_solicitud+"','"+reserva.fecha_retiro+"',"+reserva.id_sucursal_retiro+",'"+reserva.fecha_devolucion+"',"+reserva.id_sucursal_devolucion+",1)"
		console.log(query1);

		c.query(query1, function(err, rows, fields){
			if (err){
				console.log('[ERROR] '+err.message);
				callback(false,null);
				c.end();
			}else{
				callback(true,reserva.cod_reserva);
				c.end();
			}
		});
	}
}