boton1=document.querySelector(".boton1")
boton2=document.querySelector(".boton2");
imagen=document.querySelector(".slide-img");
arreglo=["img/slide1.jpg","img/slide2.jpg","img/slide3.jpg","img/slide4.jpg"];
contador=0;
boton1.style.display="none"

boton1.addEventListener("click",function()
{
    contador--;
    imagen.setAttribute("src",arreglo[contador]);
    console.log(contador);
    

    if(contador!=0 && contador!=3)
{
    boton1.style.display="block"
    boton2.style.display="block"

} 
    
else if(contador==0)
{
    boton1.style.display="none"
} 

else if(contador==3)
{
    boton2.style.display="none"
}
});


boton2.addEventListener("click",function()
{
    contador++;
    imagen.setAttribute("src",arreglo[contador]);
    console.log(contador);
    
    
    if(contador!=0 && contador!=3)
{
    boton1.style.display="block"
    boton2.style.display="block"

} 
    
else if(contador==0)
{
    boton1.style.display="none"
} 

else if(contador==3)
{
    boton2.style.display="none"
}
    
});
