function cargar(){



//Título de la pag

const h1ttl = document.createElement("h1");
h1ttl.textContent = "Airsoft España";


    //lLamamos al div
    const formarContainer = document.getElementById("formContainer");

    formarContainer.style.border = 2;
    //creamos el formulario cada vez que se abra se crea el formulario y se le asigna la id "miformulario"
    const formulario = document.createElement("formulario");
    formulario.setAttribute=("id", "miformulario");

const fset = document.createElement("fieldset");
const fsetl = document.createElement("legend");
fsetl.textContent = " Datos ";
///HAY QYE METER LOS HIJOS AL FIELDSET ANTES DE METER EL FIELDSET EN SI, PORQUE EL CÓDIGO SE LEE DE ARRIBA A ABAJO.


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
    
     
//SALTO DE LÍNEA ENTRE APARTADOS:
const brcampo = document.createElement("br");
     

const fset1 = document.createElement("fieldset");
const fset1l = document.createElement("legend");
fset1l.textContent = "Seleccione una pistola";

//LOS BOTONES TIENEN EL MISMO ATRIBUTO "NAME" PARA QUE SÓLO PUEDA SELECCIONARSE 1.
     //BOTONES RADIO1
     const radgen1 = document.createElement("input");
     radgen1.setAttribute("type","radio");
     radgen1.setAttribute("name", "1");
     //LABEL
        const radgen1l = document.createElement("label");
        radgen1l.textContent = "Glock-18C";
     const saltobr = document.createElement("br");
      //SALTO DE LINEA (DEFINIDO ABAJO EN LOS CHILDS)


     const radgen2 = document.createElement("input");
     radgen2.setAttribute("type","radio");
     radgen2.setAttribute("name", "1");
     //LABEL
        const radgen2l = document.createElement("label");
        radgen2l.textContent = "Beretta M9";
     const saltobr0 = document.createElement("br");

     const radgen3 = document.createElement("input");
     radgen3.setAttribute("type","radio");
     radgen3.setAttribute("name", "1");
     //LABEL
         const radgen3l = document.createElement("label");
         radgen3l.textContent = "Sig Sauer P226";
     const saltobr1 = document.createElement("br");

     const radgen4 = document.createElement("input");
     radgen4.setAttribute("type","radio");
     radgen4.setAttribute("name", "1");

     //LABEL
        const radgen4l = document.createElement("label");
        radgen4l.textContent = "Taurus Raging Bull";
     const saltobr2 = document.createElement("br");

     const brbtns = document.createElement("br");





     // BOTONES RADIO 2
//CREACIÓN DEL FIELDSET
const fset2 = document.createElement("fieldset");
const fset2l = document.createElement("legend");
fset2l.textContent= "Seleccione un AR (assault rifle)";

     const radgen5 = document.createElement("input");
     radgen5.setAttribute("type","radio");
     radgen5.setAttribute("name", "2");
     //LABEL
        const radgen5l = document.createElement("label");
        radgen5l.textContent = "AK-74N";
     const saltobr5 = document.createElement("br");
      //SALTO DE LINEA (DEFINIDO ABAJO EN LOS CHILDS)


     const radgen6 = document.createElement("input");
     radgen6.setAttribute("type","radio");
     radgen6.setAttribute("name", "2");
     //LABEL
        const radgen6l = document.createElement("label");
        radgen6l.textContent = "CM-16 Raider";
     const saltobr6 = document.createElement("br");

     const radgen7 = document.createElement("input");
     radgen7.setAttribute("type","radio");
     radgen7.setAttribute("name", "2");
     //LABEL
         const radgen7l = document.createElement("label");
         radgen7l.textContent = "AN-94";
     const saltobr7 = document.createElement("br");

     const radgen8 = document.createElement("input");
     radgen8.setAttribute("type","radio");
     radgen8.setAttribute("name", "2");

     //LABEL
        const radgen8l = document.createElement("label");
        radgen8l.textContent = "M16";
     const saltobr8 = document.createElement("br");


//ESPACIADOR
    const brcheck = document.createElement("br");

     //Checkboxs (estado civil)

     const fset3 = document.createElement("fieldset");
     const fset3l = document.createElement("legend");
     fset3l.textContent = "¿En qué productos está interesado?";

        const chbx0 = document.createElement("input");
            chbx0.setAttribute("type", "checkbox");
          //default checked
        chbx0.setAttribute("checked", "true");
            //LABEL
        const chbx0l = document.createElement("label");
                chbx0l.textContent = "Armas";
                    const br6 = document.createElement("br");

        const chbx1 = document.createElement("input");
        chbx1.setAttribute("type", "checkbox");
        //LABEL
        const chbx1l = document.createElement("label");
                chbx1l.textContent = "Ropa";
                  const br7 = document.createElement("br");

        const chbx2 = document.createElement("input");
        chbx2.setAttribute("type", "checkbox");
        //LABEL
         const chbx2l = document.createElement("label");
             chbx2l.textContent = "Equipo de protección";
                 const br8 = document.createElement("br");

        const chbx3 = document.createElement("input");
        chbx3.setAttribute("type", "checkbox");
        //LABEL
        const chbx3l = document.createElement("label");
                chbx3l.textContent = "Consumibles";
                  const br9 = document.createElement("br");

        const chbx4 = document.createElement("input");
        chbx4.setAttribute("type", "checkbox");
        //LABEL
        const chbx4l = document.createElement("label");
                chbx4l.textContent = "Modificaciones";
                    const br10 = document.createElement("br");
        


    //Imágenes

    const img1 = document.createElement("img");
    img1.setAttribute("id", "imagen1")
     const  img1src = "descargas/bali1.jpg";
    img1.src = img1src;
const br11 = document.createElement("br");


    const img2 = document.createElement("img");
    img2.setAttribute("id", "imagen2");
    const  img2src = "descargas/bali1.jpg";
    img2.src = img2src;
 const br12 = document.createElement("br");


 // CAMPO SELECT (ARREGLAR LOS TEXTOS Y EL PLACEHOLDER)

 const seleccion = document.createElement("select");
seleccion.textContent = "Haga click para elegir";
seleccion.setAttribute("placeholder", "Haga click para elegir");
const opt1 = document.createElement("option");
opt1.setAttribute("text", "opt1")
opt1.setAttribute("name", "Opción 1")

const opt2 = document.createElement("option");
opt2.setAttribute("text", "opt2")
opt2.setAttribute("name", "Opción 2")

const opt3 = document.createElement("option");
opt3.setAttribute("value", "opt3")
opt3.setAttribute("text", "Opción 3")


 const br14 = document.createElement("br");



 // TEXTAREA

 const texta = document.createElement("textarea");
texta.setAttribute("rows", "15");
texta.setAttribute("cols", "30");
texta.setAttribute("resize", "yes");
texta.setAttribute("placeholder", "¿Por qué deberías ser elegido en el sorteo?");
 const br13 = document.createElement("br");

       

//(No pide los botones pero favorecen el doc :) )

//Botón enviar 
const btnsb = document.createElement("button");
btnsb.textContent ="Enviar";
btnsb.setAttribute("type", "submit");

//Botón resetear
const btnwipe = document.createElement("button");
btnwipe.textContent ="Limpiar";
btnwipe.setAttribute("type", "reset");













 
    //CON ESTO HACEMOS QUE SE INTEGREN LOS ELEMENTOS Y EL FORMULARIO EN EL DIV
    formarContainer.appendChild(formulario);

    //H1
    formulario.appendChild(h1ttl);

    
    //Elementos del campo de formularios
    fset.appendChild(fsetl);
    fset.appendChild(nombreintrod);
    fset.appendChild(nombreinput);
    fset.appendChild(br0);

    fset.appendChild(apellintrod);
    fset.appendChild(apellinput);
    fset.appendChild(br1);

    fset.appendChild(dniintrod);
    fset.appendChild(dniinput);
    fset.appendChild(br2);
    
    fset.appendChild(calleintrod);
    fset.appendChild(calleinput);
    fset.appendChild(br3);

    fset.appendChild(tlfntrod);
    fset.appendChild(tlfinput);
    fset.appendChild(br4);

    formulario.appendChild(fset);
    
    //ESPACIADOR
    formulario.appendChild(brcampo);

    
    fset1.appendChild(fset1l);

    fset1.appendChild(radgen1);
    fset1.appendChild(radgen1l);
         fset1.appendChild(saltobr);

              fset1.appendChild(radgen2);
              fset1.appendChild(radgen2l);
                 fset1.appendChild(saltobr0);

                   fset1.appendChild(radgen3);
                   fset1.appendChild(radgen3l);
                      fset1.appendChild(saltobr1);
                        
                          fset1.appendChild(radgen4);
                        fset1.appendChild(radgen4l);
                          fset1.appendChild(saltobr2);

                             formulario.appendChild(fset1);
                             
                             formulario.appendChild(brbtns);


// BOTONES 2!!!!
                        fset2.appendChild(fset2l);
                   
                             fset2.appendChild(radgen5);
                             fset2.appendChild(radgen5l);
                             fset2.appendChild(saltobr5);

                             fset2.appendChild(radgen6);
                             fset2.appendChild(radgen6l);
                             fset2.appendChild(saltobr6);

                             fset2.appendChild(radgen7);
                             fset2.appendChild(radgen7l);
                             fset2.appendChild(saltobr7);

                             fset2.appendChild(radgen8);
                             fset2.appendChild(radgen8l);
                             fset2.appendChild(saltobr8);

                             formulario.appendChild(fset2);
    //ESPACIADOR
    formulario.appendChild(brcheck);


         //checkboxes


   
    fset3.appendChild(fset3l);

    fset3.appendChild(chbx0);
        fset3.appendChild(chbx0l);
        fset3.appendChild(br6);


        fset3.appendChild(chbx1);
        fset3.appendChild(chbx1l);
        fset3.appendChild(br7);

                
        fset3.appendChild(chbx2);
        fset3.appendChild(chbx2l);
        fset3.appendChild(br8);


        fset3.appendChild(chbx3);
        fset3.appendChild(chbx3l);
        fset3.appendChild(br9);


        fset3.appendChild(chbx4);
        fset3.appendChild(chbx4l);
        fset3.appendChild(br10);
    
            formulario.appendChild(fset3);

        //IMG´s
    //primera imagen
    formulario.appendChild(img1);
       img1.src = "ofi1.jpg";
        formulario.appendChild(br11);

    formulario.appendChild(img2);
    img2.src ="ofi2.jpg";
        formulario.appendChild(br12);

        //sELECT


        seleccion.appendChild(opt1);
        seleccion.appendChild(opt2);
        seleccion.appendChild(opt3);
        formulario.appendChild(seleccion);
        formulario.appendChild(br14);

    //TEXTAREA  
        formulario.appendChild(texta);
        formulario.appendChild(br13);


        //Botones
        formulario.appendChild(btnsb);
        formulario.appendChild(btnwipe);


}   