function cargar(){
    //lLamamos al div
    const formarContainer = document.getElementById("formContainer");

    formarContainer.style.border = 2;
    //creamos el formulario cada vez que se abra se crea el formulario y se le asigna la id "miformulario"
    const formulario = document.createElement("formulario");
    formulario.setAttribute=("id", "miformulario");

const fset = document.createElement("fieldset");


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
    
     
//SALTO DE LÍNEA ENTRE APARTADOS:
const brcampo = document.createElement("br");
     

//LOS BOTONES TIENEN EL MISMO ATRIBUTO "NAME" PARA QUE SÓLO PUEDA SELECCIONARSE 1.
     //BOTONES RADIO1
     const radgen1 = document.createElement("input");
     radgen1.setAttribute("type","radio");
     radgen1.setAttribute("name", "1");
     //LABEL
        const radgen1l = document.createElement("label");
        radgen1l.textContent = "сука Ёб тбою мать";
     const saltobr = document.createElement("br");
      //SALTO DE LINEA (DEFINIDO ABAJO EN LOS CHILDS)


     const radgen2 = document.createElement("input");
     radgen2.setAttribute("type","radio");
     radgen2.setAttribute("name", "1");
     //LABEL
        const radgen2l = document.createElement("label");
        radgen2l.textContent = "сука Ёб тбою мать";
     const saltobr0 = document.createElement("br");

     const radgen3 = document.createElement("input");
     radgen3.setAttribute("type","radio");
     radgen3.setAttribute("name", "1");
     //LABEL
         const radgen3l = document.createElement("label");
         radgen3l.textContent = "сука Ёб тбою мать";
     const saltobr1 = document.createElement("br");

     const radgen4 = document.createElement("input");
     radgen4.setAttribute("type","radio");
     radgen4.setAttribute("name", "1");

     //LABEL
        const radgen4l = document.createElement("label");
        radgen4l.textContent = "сука Ёб тбою мать";
     const saltobr2 = document.createElement("br");

     const brbtns = document.createElement("br");
     // BOTONES RADIO 2

//LOS BOTONES TIENEN EL MISMO ATRIBUTO "NAME" PARA QUE SÓLO PUEDA SELECCIONARSE 1.
     //BOTONES RADIO1
     const radgen5 = document.createElement("input");
     radgen5.setAttribute("type","radio");
     radgen5.setAttribute("name", "2");
     //LABEL
        const radgen5l = document.createElement("label");
        radgen5l.textContent = "сука Ёб тбою мать";
     const saltobr5 = document.createElement("br");
      //SALTO DE LINEA (DEFINIDO ABAJO EN LOS CHILDS)


     const radgen6 = document.createElement("input");
     radgen6.setAttribute("type","radio");
     radgen6.setAttribute("name", "2");
     //LABEL
        const radgen6l = document.createElement("label");
        radgen6l.textContent = "сука Ёб тбою мать";
     const saltobr6 = document.createElement("br");

     const radgen7 = document.createElement("input");
     radgen7.setAttribute("type","radio");
     radgen7.setAttribute("name", "2");
     //LABEL
         const radgen7l = document.createElement("label");
         radgen7l.textContent = "сука Ёб тбою мать";
     const saltobr7 = document.createElement("br");

     const radgen8 = document.createElement("input");
     radgen8.setAttribute("type","radio");
     radgen8.setAttribute("name", "2");

     //LABEL
        const radgen8l = document.createElement("label");
        radgen8l.textContent = "сука Ёб тбою мать";
     const saltobr8 = document.createElement("br");


//ESPACIADOR
    const brcheck = document.createElement("br");

     //Checkboxs (estado civil)

        const chbx0 = document.createElement("input");
            chbx0.setAttribute("type", "checkbox");
          //default checked
        chbx0.setAttribute("checked", "true");
            //LABEL
        const chbx0l = document.createElement("label");
                chbx0l.textContent = "хуй на попа";
                    const br6 = document.createElement("br");

        const chbx1 = document.createElement("input");
        chbx1.setAttribute("type", "checkbox");
        //LABEL
        const chbx1l = document.createElement("label");
                chbx1l.textContent = "хуй на попа";
                  const br7 = document.createElement("br");

        const chbx2 = document.createElement("input");
        chbx2.setAttribute("type", "checkbox");
        //LABEL
         const chbx2l = document.createElement("label");
             chbx2l.textContent = "хуй на попа";
                 const br8 = document.createElement("br");

        const chbx3 = document.createElement("input");
        chbx3.setAttribute("type", "checkbox");
        //LABEL
        const chbx3l = document.createElement("label");
                chbx3l.textContent = "хуй на попа";
                  const br9 = document.createElement("br");

        const chbx4 = document.createElement("input");
        chbx4.setAttribute("type", "checkbox");
        //LABEL
        const chbx4l = document.createElement("label");
                chbx4l.textContent = "хуй на попа";
                    const br10 = document.createElement("br");
        


    //Imágenes

    const img1 = document.createElement("img");
    img1.setAttribute("src", "Descargas/bali1.jpg");
const br11 = document.createElement("br");


    const img2 = document.createElement("img");
    img2.setAttribute("src", "/descargas/bal11.jpg");
 const br12 = document.createElement("br");


 // CAMPO SELECT 

 const seleccion = document.createElement("select");


const seleccionl = document.createElement("label");
 seleccionl.textContent = "Seleccione una opción";
 seleccion.setAttribute("value", "valor1");
 seleccion.setAttribute("value", "valor2");

 const br14 = document.createElement("br");



 // TEXTAREA
//MIRAR EL ROW/COLSPAN
 const texta = document.createElement("input");
 texta.setAttribute("type", "textarea");
 texta.setAttribute("rows", "20");
 texta.setAttribute("cols", "40");
 texta.setAttribute("placeholder", "Algo interesante");
 const br13 = document.createElement("br");

       



    //CON ESTO HACEMOS QUE SE INTEGREN LOS ELEMENTOS Y EL FORMULARIO EN EL DIV
    formarContainer.appendChild(formulario);

    formulario.appendChild(fset)
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

    
    //ESPACIADOR
    formulario.appendChild(brcampo);

    formulario.appendChild(radgen1);
         formulario.appendChild(radgen1l);
              formulario.appendChild(saltobr);

              formulario.appendChild(radgen2);
                 formulario.appendChild(radgen2l);
                   formulario.appendChild(saltobr0);

                   formulario.appendChild(radgen3);
                      formulario.appendChild(radgen3l);
                          formulario.appendChild(saltobr1);
                        
                        formulario.appendChild(radgen4);
                          formulario.appendChild(radgen4l);
                             formulario.appendChild(saltobr2);
                             
                             formulario.appendChild(brbtns);
// BOTONES 2!!!!
                             formulario.appendChild(radgen5);
                             formulario.appendChild(radgen5l);
                                  formulario.appendChild(saltobr5);

                                  formulario.appendChild(radgen6);
                                  formulario.appendChild(radgen6l);
                                       formulario.appendChild(saltobr6);

                                       formulario.appendChild(radgen7);
                                       formulario.appendChild(radgen7l);
                                            formulario.appendChild(saltobr7);

                                            formulario.appendChild(radgen8);
                                            formulario.appendChild(radgen8l);
                                                 formulario.appendChild(saltobr8);

    //ESPACIADOR
    formulario.appendChild(brcheck);


         //checkboxes

    formulario.appendChild(chbx0);
        formulario.appendChild(chbx0l);
            formulario.appendChild(br6);


    formulario.appendChild(chbx1);
        formulario.appendChild(chbx1l);
            formulario.appendChild(br7);

                
    formulario.appendChild(chbx2);
        formulario.appendChild(chbx2l);
            formulario.appendChild(br8);


    formulario.appendChild(chbx3);
        formulario.appendChild(chbx3l);
            formulario.appendChild(br9);


    formulario.appendChild(chbx4);
        formulario.appendChild(chbx4l);
            formulario.appendChild(br10);

        //IMG´s

    formulario.appendChild(img1);
        formulario.appendChild(br11);

    formulario.appendChild(img2 );
        formulario.appendChild(br12);

        //sELECT

        formulario.appendChild(seleccion);
        formulario.appendChild(seleccionl);
        formulario.appendChild(br14);

    //TEXTAREA  
        formulario.appendChild(texta);
        formulario.appendChild(br13);


        //Botones
        formulario.appendChild(btnsb);
        formulario.appendChild(btnwipe);


}   