document.addEventListener("DOMContentLoaded", aLaEscucha);

function aLaEscucha() {
        document.getElementById("checkboxbarbacoa").addEventListener("change", activarRadio);
        document.getElementById("checkboxcarbonara").addEventListener("change", activarRadio);
        document.getElementById("checkboxhawaiana").addEventListener("change", activarRadio);
    }

function activarRadio() {
    // Habilita o deshabilita el radio button según el estado del checkbox
    clasicas1 = document.getElementsByName("clasica1");
    clasicas2 = document.getElementsByName("clasica2");
    clasicas3 = document.getElementsByName("clasica3");

    for (clasica1 of clasicas1) {
        clasica1.disabled = !document.getElementById("checkboxbarbacoa").checked;
    }

    for (clasica2 of clasicas2) {
        clasica2.disabled = !document.getElementById("checkboxcarbonara").checked;
    }

    for (clasica3 of clasicas3) {
        clasica3.disabled = !document.getElementById("checkboxhawaiana").checked;
    }
}

function calcularPrecio() {
    // Seleccionamos las pizzas marcadas con check en el formulario
    const pizzaschecked = document.querySelectorAll('input[class="pizza"]:checked');
    if (pizzaschecked.length == 0) {
        alert('Debe seleccionar al menos una pizza.');
        return;
    }
    
    // Obtener los ingredientes seleccionados
    const ingredientesSeleccionados = document.querySelectorAll('input[name="ingredientes"]:checked');
    if (ingredientesSeleccionados.length === 0) {
        alert('Debe seleccionar al menos un ingrediente.');
        return;
    }
    
    // Calcular el precio base de la pizza

    let precioTamañoTotal = 0; let precioTamaño;
    for (pizza of pizzaschecked) {
        switch (pizza.value) {
        case "pequena":
            precioTamaño = 5;
            break;
        case "mediana":
            precioTamaño = 10;
            break;
        case "grande":
            precioTamaño = 15;
            break;
        }
        precioTamañoTotal=precioTamañoTotal+precioTamaño;
}
    
    // Precio total de los ingredientes
    //Dado que todos cuestan 1 €, su precio es igual al número de ellos y podemos usar length
    let precioIngredientes = ingredientesSeleccionados.length;
    
    // Calcular el precio total
    const precioTotal = precioTamañoTotal + precioIngredientes;
    
    // Mostrar el precio total en la página
    document.getElementById('precio').textContent = precioTotal + '€';
    document.getElementById('precioTotal').style.display = 'block';
}