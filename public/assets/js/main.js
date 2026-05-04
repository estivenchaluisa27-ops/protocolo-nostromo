document.addEventListener("DOMContentLoaded", () => {
    const textoReporte = `> INICIANDO CONEXIÓN SEGURA...
> ORIGEN: USCSS NOSTROMO - CARGUERO COMERCIAL CLASE M.
> DESTINO: RED DE MANDO WEYLAND-YUTANI (LA TIERRA).
> FECHA ESTELAR: 2122.06.03
> ESTADO DE LA NAVE: DERIVA ORBITAL / SISTEMAS LÓGICOS CAÍDOS.
> CÓDIGO DE ALERTA: CUARENTENA BIOLÓGICA ROTA.

*...Si la tripulación desea sobrevivir al espécimen que acecha en los conductos, deberán restaurar el control lógico de la nave.*

> NOTA DE SISTEMA: IDENTIFICADOR MU/TH/UR 6000 ACTUALIZADO A "MADRE".
> FIN DEL REPORTE.
> ESPERANDO INTERVENCIÓN DEL USUARIO PARA INICIAR INSTALACIÓN...`;

    const terminal = document.getElementById('salida-texto');
    const btnIniciar = document.getElementById('btn-iniciar');
    let index = 0;

    function maquinaDeEscribir() {
        if (index < textoReporte.length) {
            terminal.innerHTML += textoReporte.charAt(index);
            index++;
            // Velocidad aleatoria entre 20ms y 60ms para simular procesamiento
            setTimeout(maquinaDeEscribir, Math.floor(Math.random() * 40) + 20);
        } else {
            // Muestra el botón cuando termina el texto
            btnIniciar.style.display = 'block';
        }
    }

    // Inicia la secuencia con un pequeño retraso para darle dramatismo
    setTimeout(maquinaDeEscribir, 1000);
});