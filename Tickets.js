//*** VALIDACION FORMULARIO***//
//eventListener para detectar click en boton Resumen//
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

//eventListener para detectar click en boton Borrar//
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

//eventListener para detectar click en input Cantidad//
let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

//eventListener para detectar click en input Categoria//
let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);
 
//eventListener para detectar click en los div estudiante/trainee/junior//
let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);

// ****FUNCION PRECIOS***//
function ticketsPrice(evento){
    console.log(evento);
    
    //Para evitar que se refresque la pagina
    evento.preventDefault();
    
    //Leemos el valor del input cantidad//
    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if(Number(ticketsQuantity.value)){
       
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value){
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }
        document.querySelector(".ticketsValue").textContent = `Total a pagar: $${totalPayment}`;
        let outputNode = document.querySelector(".ticketsOutput");
        let spanNode = document.createElement(".span");
    }
}