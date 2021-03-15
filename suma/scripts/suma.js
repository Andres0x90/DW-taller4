function sumar(num1,num2)
{
    return num1 + num2;
}

document.getElementById("sumar").addEventListener("click", function()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "El resultado es: <strong>" + sumar(num1, num2) + "</strong>";
});