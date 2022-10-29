
function validaremail() {
    console.log("ingreso a validar mail")

    let usu=document.getElementById("usu").value
    console.log(usu)

if  (usu.length==0) {
    console.log("usuario vacio")
    document.getElementById("mensaje").innerHTML="El usuario no puede estar vacio"
} else if (usu.indexOf("@") && usu.indexOf("com")==-1) { 
    console.log("El usuario debe tener @ y dominio")
 document.getElementById("mensaje").innerHTML="Usuario sin @ o sin dominio"
} else  {
        document.getElementById("mensaje").innerHTML="Usuario validado"
        document.getElementById("mensaje").className="bg-primary text-white" 
}
    
}

function validaremailr() {
    console.log("ingreso a validar mail")

    let usur=document.getElementById("usur").value
    console.log(usur)

if  (usur.length==0) {
    console.log("usuario vacio")
    document.getElementById("mensaje").innerHTML="El usuario no puede estar vacio"
} else if (usur.indexOf("@") && usur.indexOf(".com")==-1) { 
    console.log("El usuario debe tener @ y dominio")
 document.getElementById("mensaje").innerHTML="Usuario sin @ o sin dominio"
} else  {
        document.getElementById("mensaje").innerHTML="Usuario validado"
        document.getElementById("mensaje").className="bg-primary text-white" 
}
    
}

function fortalezaPass() {
    console.log("Fortaleza")

let Pass=document.getElementById("Pass").value

if (Pass.length<=4) {
    document.getElementById("advertencia").innerHTML="SEGURIDAD BAJA"
    document.getElementById("advertencia").className="bg-danger text white"
} else if (Pass.length>4 && Pass.length<=8) {
    document.getElementById("advertencia").innerHTML="SEGURIDAD MEDIA"
    document.getElementById("advertencia").className="bg-warning"
} else {
    document.getElementById("advertencia").innerHTML="SEGURIDAD ALTA"
    document.getElementById("advertencia").className="bg-primary text-white"
}

}

function fortalezaPoss() {
    
    let Poss=document.getElementById("Poss").value
    let Pass=document.getElementById("Pass").value

    if (Poss===Pass) {
        document.getElementById("confirma").innerHTML="Contraseña Valida"
        document.getElementById("confirma").className="bg-success text-white"
    } else {
        document.getElementById("confirma").innerHTML="Contraseña Incorrecta"
        document.getElementById("confirma").className="bg-danger text-white"
    }
}