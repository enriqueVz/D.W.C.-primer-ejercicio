window.onload = function(){
    button1.onclick = function() {
        calcularPrecio();
    }
}

function calcularPrecio() {
    // Obtener el tamaño de la pizza seleccionado
    const tamanoPizza = document.querySelector('input[name="tamano"]:checked');
    if (!tamanoPizza) {
        alert('Debe seleccionar un tamaño de pizza.');
        return;
    }
    
    // Obtener los ingredientes seleccionados
    const ingredientesSeleccionados = document.querySelectorAll('input[name="ingredientes"]:checked');
    if (ingredientesSeleccionados.length === 0) {
        alert('Debe seleccionar al menos un ingrediente.');
        return;
    }
    
    // Calcular el precio base de la pizza
    let precioBase = 0;
    switch (tamanoPizza.value) {
        case "pequena":
            precioBase = 5;
            break;
        case "mediana":
            precioBase = 10;
            break;
        case "grande":
            precioBase = 15;
            break;
    }
    
    // Calcular el precio de los ingredientes
    let precioIngredientes = ingredientesSeleccionados.length;
    
    // Calcular el precio total
    const precioTotal = precioBase + precioIngredientes;
    
    // Mostrar el precio total en la página
    document.getElementById('precio').textContent = precioTotal + '€';
    document.getElementById('precioTotal').style.display = 'block';
}