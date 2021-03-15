document.getElementById("texto").addEventListener("input", function()
{
    let size = document.getElementById("texto").value.length
    document.getElementById("contador").value = size;
});