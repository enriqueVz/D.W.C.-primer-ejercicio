function cargar(){
    //lLamamos al div
    const formarContainer = document.getElementById("formContainer");

    formarContainer.style.border = 2;
    //creamos el formulario cada vez que se abra se crea el formulario y se le asigna la id "miformulario"
    const formulario = document.createElement("formulario");
    formulario.setAttribute=("id", "miformulario");


    //Texto previo al campo Nombre
    const nombreintrod = document.createElement("label");
    nombreintrod.textContent = "Introduzca su nombre";
     const br0 = document.createElement("br");

    //Campo nombre
    const nombreinput = document.createElement("input");
    nombreinput.setAttribute("type", "text");
    nombreinput.setAttribute("placeholder", "Nombre");
    const br1 = document.createElement("br");




    //Texto previo al campo apellidos
    const apellintrod = document.createElement("label");
    apellintrod.textContent = "Introduzca sus apellidos";
    const br2 = document.createElement("br");

  
    //Campo apellidos
    const apellinput = document.createElement("input");
    apellinput.setAttribute("type", "text");
    apellinput.setAttribute("placeholder", "Apellidos");
    const br3 = document.createElement("br");

  


    //Texto previo al campo DNI
    const dniintrod = document.createElement("label");
    dniintrod.textContent = "Introduzca su DNI";
    const br4 = document.createElement("br");


    //metemos el dni y creamos el tipo de atributos que va a contener
    const dniinput = document.createElement("input");
    dniinput.setAttribute("type", "text");
    dniinput.setAttribute("placeholder", "DNI");
    const br5 = document.createElement("br");




    //Texto previo al campo Direccion
    const calleintrod = document.createElement("label");
    calleintrod.textContent = "Introduzca su dirección";

    //Campo nombre
    const calleinput = document.createElement("input");
    calleinput.setAttribute("type", "text");
    calleinput.setAttribute("placeholder", "Dirección");




     //Texto previo al campo teléfono
     const tlfntrod = document.createElement("label");
     tlfntrod.textContent = "Introduzca su número de teléfono";
 
     //Campo telefono
     const tlfinput = document.createElement("input");
     tlfinput.setAttribute("type", "text");
     tlfinput.setAttribute("placeholder", "Teléfono");
 

     //Botón enviar
     const btnsb = document.createElement("button");
     btnsb.textContent ="Enviar";

     //Botón resetear
     const btnwipe = document.createElement("button");
     btnwipe.textContent ="Limpiar";
    
     

     


     //BOTONES RADIO1
     const radgen1 = document.createElement("input");
     radgen1.setAttribute("type","radio");
     const saltobr = document.createElement("br");
      //SALTO DE LINEA (DEFINIDO ABAJO EN LOS CHILDS)


     const radgen2 = document.createElement("input");
     radgen2.setAttribute("type","radio");
     const saltobr0 = document.createElement("br");

     const radgen3 = document.createElement("input");
     radgen3.setAttribute("type","radio");
     const saltobr1 = document.createElement("br");

     const radgen4 = document.createElement("input");
     radgen4.setAttribute("type","radio");
     const saltobr2 = document.createElement("br");

     // BOTONES RADIO 2




     //Checkboxs (estado civil)

        const chbx0 = document.createElement("input");
        chbx0.setAttribute("type", "checkbox");
    //default checked
        chbx0.setAttribute("checked", "true");
        const br6 = document.createElement("br");

        const chbx1 = document.createElement("input");
        chbx1.setAttribute("type", "checkbox");
        const br7 = document.createElement("br");

        const chbx2 = document.createElement("input");
        chbx2.setAttribute("type", "checkbox");
        const br8 = document.createElement("br");

        const chbx3 = document.createElement("input");
        chbx3.setAttribute("type", "checkbox");
        const br9 = document.createElement("br");

        const chbx4 = document.createElement("input");
        chbx4.setAttribute("type", "checkbox");
        const br10 = document.createElement("br");
        


    //Imágenes

    const img1 = document.createElement("img");
    img1.setAttribute("src", "kikon/descargas/bali1.webp");
    img1.setAttribute("display", "block");
    img1.setAttribute("width", "40%");
const br11 = document.createElement("br");


    const img2 = document.createElement("img");
    img2.setAttribute("src", "kikon/descargas/bal1.webp");
    img2.setAttribute("display", "block");
    img2.setAttribute("width", "40%");
 const br12 = document.createElement("br");


 // CAMPO SELECT 
// MIRAR PQ COÑO NO FUNCIONA
 const seleccion = document.createElement("input");
 seleccion.setAttribute("type", "select");
 seleccion.setAttribute("value", "valor1");
 seleccion.setAttribute("value", "valor2");
 const br14 = document.createElement("br");



 // TEXTAREA
//MIRAR EL ROW/COLSPAN
 const texta = document.createElement("input");
 texta.setAttribute("type", "textarea");
 texta.setAttribute("rowspan", 20);
 texta.setAttribute("colspan", 40);
 texta.setAttribute("placeholder", "Algo interesante");
 const br13 = document.createElement("br");

       



    //CON ESTO HACEMOS QUE SE INTEGREN LOS ELEMENTOS Y EL FORMULARIO EN EL DIV
    formarContainer.appendChild(formulario);

    //Elementos del campo de formularios

    formulario.appendChild(nombreintrod);
    formulario.appendChild(nombreinput);
    formulario.appendChild(br0);
   
    formulario.appendChild(apellintrod);
    formulario.appendChild(apellinput);
    formulario.appendChild(br1);

    formulario.appendChild(dniintrod);
    formulario.appendChild(dniinput);
    formulario.appendChild(br2);
    
    formulario.appendChild(calleintrod);
    formulario.appendChild(calleinput);
    formulario.appendChild(br3);

    formulario.appendChild(tlfntrod);
    formulario.appendChild(tlfinput);
    formulario.appendChild(br4);

    formulario.appendChild(radgen1);
        formulario.appendChild(saltobr);

    formulario.appendChild(radgen2);
        formulario.appendChild(saltobr0);

    formulario.appendChild(radgen3);
        formulario.appendChild(saltobr1);

    formulario.appendChild(radgen4);
         formulario.appendChild(saltobr2);

         //checkboxes

    formulario.appendChild(chbx0);
        formulario.appendChild(br6);

    formulario.appendChild(chbx1);
        formulario.appendChild(br7);

    formulario.appendChild(chbx2);
        formulario.appendChild(br8);

    formulario.appendChild(chbx3);
        formulario.appendChild(br9);

    formulario.appendChild(chbx4);
        formulario.appendChild(br10);

        //IMG´s

    formulario.appendChild(img1);
        formulario.appendChild(br11);

    formulario.appendChild(img2 );
        formulario.appendChild(br12);

        //sELECT

        formulario.appendChild(seleccion);
        formulario.appendChild(br14);

    //TEXTAREA  
        formulario.appendChild(texta);
        formulario.appendChild(br13);


        //Botones
        formulario.appendChild(btnsb);
        formulario.appendChild(btnwipe);


}   


