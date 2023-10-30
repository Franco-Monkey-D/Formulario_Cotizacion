function Solicitud(){
var nombreCompleto = document.getElementById("nombreC").value;
var Cantidad = document.getElementById("cantidad").value;
var PrecioU = document.getElementById("precioU").value;

var resu ="";

var DispositivoNom = document.getElementById("NomProd");
var indiceM = DispositivoNom.selectedIndex;
var txtmodelo =DispositivoNom.options[indiceM].text;


if(nombreCompleto==""){
    alert(" Escriba su nombre");
}else{
    if(indiceM==0){
        alert("Seleccione el modelo del dispositivo");
    }else{
        if(Cantidad==""){
            alert("Coloque una Cantidad valida");
        }else{
            if(PrecioU==""){
                alert("Ingrese el precio Unitario");
            }else{
                var Total = Cantidad * PrecioU;
                
            resu+="Estimado: " +nombreCompleto+ " por este medio le damos a conocer el resultado  de su cotizaci&oacute;n: <br> "+ 
            "<br> Usted ha cotizado la cantidad de: " +Cantidad+ " celulares modelo "+ txtmodelo+ " con un precio de $ " +PrecioU+ 
            " c/u. <br><br> Todo esto hace un total de $ " +Total
            document.getElementById("resu").innerHTML = resu;
                }
            } 
        }
    }
}
