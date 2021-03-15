document.getElementById("color").addEventListener("click", function()
{
    document.getElementsByClassName("titulo-principal")[0].style.backgroundColor = "black";
    let titulos = document.getElementsByTagName("h2");
    let titulos_tabla = document.getElementsByTagName("th");
    
    for (let i=0; i < titulos.length; i++)
        titulos[i].style.backgroundColor = "black";

    for (let i=0; i < titulos_tabla.length; i++)
    {
        titulos_tabla[i].style.backgroundColor = "black";
        titulos_tabla[i].style.color = "red";
    }
});