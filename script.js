function calcularSaldoPuntoEquilibrio() {
    var ventas = parseFloat(document.getElementById('ventas').value);
    var costosVariables = parseFloat(document.getElementById('costosVariables').value);
    var gastosFijos = parseFloat(document.getElementById('gastosFijos').value);

    // Calcular Saldo
    var saldo = ventas - (costosVariables + gastosFijos);
    document.getElementById('saldo').innerText = saldo.toFixed(2) + ' euros';

    // Calcular Punto de Equilibrio
    var puntoEquilibrio = calcularPuntoEquilibrio(gastosFijos, ventas, costosVariables);
    if (puntoEquilibrio !== null) {
        document.getElementById('puntoEquilibrio').innerText = puntoEquilibrio.toFixed(2) + ' euros';
    } else {
        document.getElementById('puntoEquilibrio').innerText = 'No se pudo calcular';
    }
}

function calcularPuntoEquilibrio(costosFijos, ventasTotales, costosVariablesTotales) {
    if (ventasTotales - costosVariablesTotales === 0) {
        console.error("Error: La diferencia entre Ventas Totales y Costos Variables Totales no puede ser cero.");
        return null;
    }

    var costoVariableVentas = costosVariablesTotales / ventasTotales;
    var netoVentas = (1 - costoVariableVentas);

    var puntoEquilibrio = costosFijos / netoVentas;
    return puntoEquilibrio;
}
