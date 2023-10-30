function cargar(){

    //Título de la pag
    const elementoh1 = document.createElement("h1");
    elementoh1.textContent = "Airsoft España";

    //Llamamos al div
    const formarContainer = document.getElementById("formContainer");
    formarContainer.style.border = "2px solid black";
    //creamos el formulario y se le asigna la id "formulario1"
    const formulario = document.createElement("formulario");
    formulario.setAttribute=("id", "formulario1");

    //Fieldset y legend
    const fset0 = document.createElement("fieldset");
    const fset0l = document.createElement("legend");
    fset0l.textContent = "Datos";
    ///HAY QYE METER LOS HIJOS AL FIELDSET ANTES DE METER EL FIELDSET EN SI, PORQUE EL CÓDIGO SE LEE DE ARRIBA A ABAJO.

    //Nombre: label e input
    const nombrelabel = document.createElement("label");
    nombrelabel.setAttribute("for", "nombre");
    nombrelabel.textContent = "Introduzca su nombre ";
    const nombreinput = document.createElement("input");
    nombreinput.setAttribute("id", "nombre");
    nombreinput.setAttribute("type", "text");
    nombreinput.setAttribute("placeholder", "Nombre");

    //Apellidos: label a input
    const apelllabel = document.createElement("label");
    apelllabel.setAttribute("for", "apellidos");
    apelllabel.textContent = "Introduzca sus apellidos ";
    const apellinput = document.createElement("input");
    apellinput.setAttribute("id", "apellidos");
    apellinput.setAttribute("type", "text");
    apellinput.setAttribute("placeholder", "Apellidos");

    //DNI: label e input
    const dnilabel = document.createElement("label");
    dnilabel.setAttribute("for", "dni");
    dnilabel.textContent = "Introduzca su DNI ";
    const dniinput = document.createElement("input");
    dniinput.setAttribute("id", "dni");
    dniinput.setAttribute("type", "text");
    dniinput.setAttribute("placeholder", "00000000X");

    //Direccion: label y select como tal
    const selectvialabel = document.createElement("label");
    selectvialabel.setAttribute("for", "desplegabletipodevia");
    selectvialabel.textContent = "Introduzca su dirección ";
    const seleccionvia = document.createElement("select");
    seleccionvia.setAttribute("id", "desplegabletipodevia");
    const optionvia1 = document.createElement("option");
    optionvia1.value ="valuetipodevia";
    optionvia1.text = "Tipo de vía";
    const optionvia2 = document.createElement("option");
    optionvia2.value ="valueavenida";
    optionvia2.text = "Avenida";
    const optionvia3 = document.createElement("option");
    optionvia3.value = "valueacalle";
    optionvia3.text = "Calle";
    const optionvia4 = document.createElement("option");
    optionvia4.value = "valueglorieta";
    optionvia4.text = "Glorieta";
    const optionvia5 = document.createElement("option");
    optionvia5.value = "valuetravesía";
    optionvia5.text = "Travesía";

    //Dirección: label e input
    const callelabel = document.createElement("label");
    callelabel.setAttribute("for", "direccion");
    callelabel.textContent = "";
    const calleinput = document.createElement("input");
    calleinput.setAttribute("id", "direccion");
    calleinput.setAttribute("type", "text");
    calleinput.setAttribute("placeholder", "Dirección");

    //Teléfono: label e input. El teléfono es type number.
    const tlflabel = document.createElement("label");
    tlflabel.setAttribute("for", "numerotelefono");
    tlflabel.textContent = "Introduzca su número de teléfono ";
    const tlfinput = document.createElement("input");
    tlfinput.setAttribute("id", "numerotelefono");
    tlfinput.setAttribute("type", "number");
    tlfinput.setAttribute("placeholder", "Teléfono");
    
    //-------------------CONJUNTO DE RADIOS 1-------------------------------
    //Fieldset y legend
    const fset1 = document.createElement("fieldset");
    const fset1l = document.createElement("legend");
    fset1l.textContent = "Seleccione una pistola";

    //LOS BOTONES TIENEN EL MISMO ATRIBUTO "NAME" PARA QUE SÓLO PUEDA SELECCIONARSE 1.
    //Radio 1: input y label
    const radgen1i = document.createElement("input");
    radgen1i.setAttribute("id","radio1opcion1");
    radgen1i.setAttribute("type","radio");
    radgen1i.setAttribute("name", "1");
    const radgen1l = document.createElement("label");
    radgen1l.setAttribute("for", "radio1opcion1");
    radgen1l.textContent = "Glock-18C";
   
    //Radio 2: input y label
    const radgen2i = document.createElement("input");
    radgen2i.setAttribute("id","radio1opcion2");
    radgen2i.setAttribute("type","radio");
    radgen2i.setAttribute("name", "1");
    const radgen2l = document.createElement("label");
    radgen2l.setAttribute("for", "radio1opcion2");
    radgen2l.textContent = "Beretta M9";

    //Radio 3: input y label
    const radgen3i = document.createElement("input");
    radgen3i.setAttribute("id","radio1opcion3");
    radgen3i.setAttribute("type","radio");
    radgen3i.setAttribute("name", "1");
    const radgen3l = document.createElement("label");
    radgen3l.setAttribute("for", "radio1opcion3");
    radgen3l.textContent = "Sig Sauer P226";

    //Radio 4: input y label
    const radgen4i = document.createElement("input");
    radgen4i.setAttribute("id","radio1opcion4");
    radgen4i.setAttribute("type","radio");
    radgen4i.setAttribute("name", "1");
    const radgen4l = document.createElement("label");
    radgen4l.setAttribute("for", "radio1opcion4");
    radgen4l.textContent = "Taurus Raging Bull";

    //---------------------CONJUNTO DE RADIOS 2------------------------------
    //Fieldset y legend
    const fset2 = document.createElement("fieldset");
    const fset2l = document.createElement("legend");
    fset2l.textContent= "Seleccione un AR (assault rifle)";

    //Radio 1: input y label
    const radgen5i = document.createElement("input");
    radgen5i.setAttribute("id","radio2opcion1");
    radgen5i.setAttribute("type","radio");
    radgen5i.setAttribute("name", "2");
    const radgen5l = document.createElement("label");
    radgen5l.setAttribute("for", "radio2opcion1");
    radgen5l.textContent = "AK-74N";

    //Radio 2: input y label
    const radgen6i = document.createElement("input");
    radgen6i.setAttribute("id","radio2opcion2");
    radgen6i.setAttribute("type","radio");
    radgen6i.setAttribute("name", "2");
    const radgen6l = document.createElement("label");
    radgen6l.setAttribute("for", "radio2opcion2");
    radgen6l.textContent = "CM-16 Raider";

    //Radio 3: input y label
    const radgen7i = document.createElement("input");
    radgen7i.setAttribute("id","radio2opcion3");
    radgen7i.setAttribute("type","radio");
    radgen7i.setAttribute("name", "2");
    const radgen7l = document.createElement("label");
    radgen7l.setAttribute("for", "radio2opcion3");
    radgen7l.textContent = "AN-94";

    //Radio 4: input y label
    const radgen8i = document.createElement("input");
    radgen8i.setAttribute("id","radio2opcion4");
    radgen8i.setAttribute("type","radio");
    radgen8i.setAttribute("name", "2");
    const radgen8l = document.createElement("label");
    radgen8l.setAttribute("for", "radio2opcion4");
    radgen8l.textContent = "M16";

    //-----------------------CONJUNTO DE CHECKBOX----------------------
    //Fieldset y legend
    const fset3 = document.createElement("fieldset");
    const fset3l = document.createElement("legend");
    fset3l.textContent = "¿En qué productos está interesado?";

    //Checkbox 1
    const chbx0 = document.createElement("input");
    chbx0.setAttribute("id","checkboxopcion1");
    chbx0.setAttribute("type", "checkbox");
    //default checked
    chbx0.setAttribute("checked", "true");
    const chbx0l = document.createElement("label");
    chbx0l.setAttribute("for", "checkboxopcion1");
    chbx0l.textContent = "Armas";

    //Checkbox 2
    const chbx1 = document.createElement("input");
    chbx1.setAttribute("id", "checkboxopcion2");
    chbx1.setAttribute("type", "checkbox");
    const chbx1l = document.createElement("label");
    chbx1l.setAttribute("for", "checkboxopcion2");
    chbx1l.textContent = "Ropa";

    //Checkbox 3
    const chbx2 = document.createElement("input");
    chbx2.setAttribute("id", "checkboxopcion3");
    chbx2.setAttribute("type", "checkbox");
    const chbx2l = document.createElement("label");
    chbx2l.setAttribute("for", "checkboxopcion3");
    chbx2l.textContent = "Equipo de protección";

    //Checkbox 4
    const chbx3 = document.createElement("input");
    chbx3.setAttribute("id", "checkboxopcion4");
    chbx3.setAttribute("type", "checkbox");
    const chbx3l = document.createElement("label");
    chbx3l.setAttribute("for", "checkboxopcion4");
    chbx3l.textContent = "Consumibles";

    //Checkbox 5
    const chbx4 = document.createElement("input");
    chbx4.setAttribute("id", "checkboxopcion5");
    chbx4.setAttribute("type", "checkbox");
    const chbx4l = document.createElement("label");
    chbx4l.setAttribute("for", "checkboxopcion5");
    chbx4l.textContent = "Modificaciones";
        
    //-----------------------------Imágenes----------------------------------

    const contenedorimagenes = document.createElement("div");
    contenedorimagenes.setAttribute("id", "divimagenes");

    const img1 = document.createElement("img");
    img1.setAttribute("id", "imagen1")
    img1.setAttribute("width", "20%");
    img1.setAttribute("height", "20%");
    img1.src = "airsoft2.jpg";
    img1.style.float="left";
   
    const img2 = document.createElement("img");
    img2.setAttribute("id", "imagen2");
    img2.setAttribute("width", "20%");
    img2.setAttribute("width", "20%");
    img2.setAttribute("display", "in-line");
    img2.src = "airsoft1.webp";

    //-------------------SELECT--------------------------------------
    //Texto previo a la selección 
    const textoprevio = document.createElement("h3");
    textoprevio.textContent = "Envío: ";

    //Select: label y select como tal
    const selectlabel = document.createElement("label");
    selectlabel.setAttribute("for", "desplegable");
    selectlabel.textContent = "Selecciona una opción";
    const seleccion = document.createElement("select");
    seleccion.setAttribute("id", "desplegable");

    const opt0 = document.createElement("option");
    opt0.value ="valor0";
    opt0.text = "Seleccione una opción de envío";
    const opt1 = document.createElement("option");
    opt1.value ="valor1";
    opt1.text = "Recogida en tienda";
    const opt2 = document.createElement("option");
    opt2.value = "valor2";
    opt2.text = "Recogida en la oficina de correos";
    const opt3 = document.createElement("option");
    opt3.value = "valor3";
    opt3.text = "Envío a domicilio";

    //-----------------------------TEXTAREA--------------------------------------------
    const texta = document.createElement("textarea");
    texta.setAttribute("rows", "5");
    texta.setAttribute("cols", "80");
    texta.setAttribute("resize", "yes");
    texta.setAttribute("placeholder", "¿Por qué deberías ser elegido en el sorteo?");

    //--------------Checkbox de aceptar condiciones---------------------------------
    const condiciones1i = document.createElement("input");
    condiciones1i.setAttribute("id", "checkboxcondiciones1");
    condiciones1i.setAttribute("type", "checkbox");
    const condiciones1l = document.createElement("label");
    condiciones1l.setAttribute("for", "checkboxcondiciones1");
    condiciones1l.textContent = "He leído y acepto las condiciones";

    const condiciones2i = document.createElement("input");
    condiciones2i.setAttribute("id", "checkboxcondiciones2");
    condiciones2i.setAttribute("type", "checkbox");
    const condiciones2l = document.createElement("label");
    condiciones2l.setAttribute("for", "checkboxcondiciones2");   
    condiciones2l.textContent="He leído la política de privacidad";

    //--------------------------------INPUT submit y reset------------------------
    //No los pide pero favorecen el doc
    //Input enviar 
    const btnsb = document.createElement("input");;
    btnsb.setAttribute("type", "submit");
    btnsb.setAttribute("value", "Enviar datos");
    btnsb.addEventListener("click", validarFormulario);

    //Input resetear
    const btnwipe = document.createElement("input");
    btnwipe.setAttribute("type", "reset");
    btnwipe.setAttribute("value", "Limpiar formulario");

    btnwipe.addEventListener("click", recargarPagina);
      


    //El contenedor formarContainer tiene por hijos a elementoh1 y a formulario
    formarContainer.appendChild(elementoh1);
    formarContainer.appendChild(formulario);

    //Formulario tiene por hijos a cuatro fieldsetfset0, dos imágenes, un <h3>, un textarea  y sus saltos <br>
    formulario.appendChild(fset0);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(fset1);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(fset2);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(fset3);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(contenedorimagenes);
    formulario.appendChild(textoprevio);
    formulario.appendChild(seleccion);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(texta);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(condiciones1i);
    formulario.appendChild(condiciones1l);
    formulario.appendChild(condiciones2i);
    formulario.appendChild(condiciones2l);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(btnsb);
    formulario.appendChild(btnwipe);

    //Hijo fset0 tiene por hijos una legend, cinco label-input(tipo texto o número) y sus saltos <br>
    fset0.appendChild(fset0l);
    fset0.appendChild(nombrelabel);
    fset0.appendChild(nombreinput);
    fset0.appendChild(document.createElement("br"));
    fset0.appendChild(apelllabel);
    fset0.appendChild(apellinput);
    fset0.appendChild(document.createElement("br"));
    fset0.appendChild(dnilabel);
    fset0.appendChild(dniinput);
    fset0.appendChild(document.createElement("br"));
    //select de envío
    fset0.appendChild(selectvialabel);
    fset0.appendChild(seleccionvia);
    seleccionvia.appendChild(optionvia1);
    seleccionvia.appendChild(optionvia2);
    seleccionvia.appendChild(optionvia3);
    seleccionvia.appendChild(optionvia4);
    seleccionvia.appendChild(optionvia5);
    fset0.appendChild(callelabel);
    fset0.appendChild(calleinput);
    fset0.appendChild(document.createElement("br"));
    fset0.appendChild(tlflabel);
    fset0.appendChild(tlfinput);
    fset0.appendChild(document.createElement("br"));
    
    //Hijo fset1 tiene por hijos una legend, cuatro input(tipo radio)-label y sus saltos <br>
    fset1.appendChild(fset1l);
    fset1.appendChild(radgen1i);
    fset1.appendChild(radgen1l);
    fset1.appendChild(document.createElement("br"));
    fset1.appendChild(radgen2i);
    fset1.appendChild(radgen2l);
    fset1.appendChild(document.createElement("br"));
    fset1.appendChild(radgen3i);
    fset1.appendChild(radgen3l);
    fset1.appendChild(document.createElement("br"));      
    fset1.appendChild(radgen4i);
    fset1.appendChild(radgen4l);
             
    //Hijo fset2 tiene por hijos una legend, cuatro input(tipo radio)-label y sus saltos <br>
    fset2.appendChild(fset2l);
    fset2.appendChild(radgen5i);
    fset2.appendChild(radgen5l);
    fset2.appendChild(document.createElement("br"));
    fset2.appendChild(radgen6i);
    fset2.appendChild(radgen6l);
    fset2.appendChild(document.createElement("br"));
    fset2.appendChild(radgen7i);
    fset2.appendChild(radgen7l);
    fset2.appendChild(document.createElement("br"));
    fset2.appendChild(radgen8i);
    fset2.appendChild(radgen8l);
    fset2.appendChild(document.createElement("br"));

    //Hijo fset3 tiene por hijos una legend, cinco input(tipo checkbox)-label y sus saltos <br>
    fset3.appendChild(fset3l);
    fset3.appendChild(chbx0);
    fset3.appendChild(chbx0l);
    fset3.appendChild(document.createElement("br"));
    fset3.appendChild(chbx1);
    fset3.appendChild(chbx1l);
    fset3.appendChild(document.createElement("br"));
    fset3.appendChild(chbx2);
    fset3.appendChild(chbx2l);
    fset3.appendChild(document.createElement("br"));
    fset3.appendChild(chbx3);
    fset3.appendChild(chbx3l);
    fset3.appendChild(document.createElement("br"));
    fset3.appendChild(chbx4);
    fset3.appendChild(chbx4l);
    fset3.appendChild(document.createElement("br"));

    //Hijos de contenedorimagenes
    contenedorimagenes.appendChild(img1);
    contenedorimagenes.appendChild(document.createElement("br"));
    contenedorimagenes.appendChild(img2);
    contenedorimagenes.appendChild(document.createElement("br"));

    //select de envío
    seleccion.appendChild(opt0);
    seleccion.appendChild(opt1);
    seleccion.appendChild(opt2);
    seleccion.appendChild(opt3);
}   

function validarFormulario(event){
    // Obtener el valor seleccionado en el campo de selección
    const seleccion = document.getElementById("desplegable");
    const valorSeleccionado = seleccion.value;

    // Verificar si se ha seleccionado la opción por defecto
    if (valorSeleccionado === "valor0") {
        alert("Seleccione una opción de envío válida.");
        event.preventDefault(); // Evitar el envío del formulario
    } else {
        window.location.href = "/action_page.php";
    }
};

function recargarPagina() {
    document.getElementById("formContainer").innerHTML="";
    cargar();
};