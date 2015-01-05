function celcius(){
var grados=document.cel.centi.value;
var res1=(grados*1.8)+32;
var res2=(grados*1)+273.15;
document.cel.centi.value="";
document.getElementById('resultado').innerHTML=res1.toFixed(2)+" F<br>"+res2.toFixed(2)+" K";
}

function farenh(){
var grados=document.far.farenheit.value;
var res1=(grados-32)/1.8;
var res2=(res1*1)+273.15;
document.far.farenheit.value="";
document.getElementById('resultado').innerHTML=res1.toFixed(2)+" C<br>"+res2.toFixed(2)+" K";
}

function gradosKelvin(){
var grados=document.kel.kelv.value;
var res1=(grados*1)-273.15;
var res2=(res1*1.8)+32;
document.kel.kelv.value="";
document.getElementById('resultado').innerHTML=res1.toFixed(2)+" C<br>"+res2.toFixed(2)+" F";
}

function converMetro(){
var mtro=document.medida.mtro.value;
var res1=mtro*1.09;
var res2=(mtro*100)/(2.48);
var res3=(mtro*100)/(30.48);
document.medida.mtro.value="";
document.getElementById('resultado').innerHTML=res1.toFixed(2)+" yardas<br>"+res2.toFixed(2)+"pulg<br>"+res3.toFixed(2)+" pies";
}

function convPulgadas(){
var p=document.pgadas.n.value;
var res1=p*2.48;
var res2=res1/100;
document.pgadas.n.value="";
document.getElementById('resultado').innerHTML=res1.toFixed(2)+" cm<br>"+res2.toFixed(2)+"m<br>";

}

function limpiar(){
document.getElementById('resultado').innerHTML='<img src="img/clima.gif" width="100px" height="200px"/>';
}