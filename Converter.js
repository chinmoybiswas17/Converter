const result=document.getElementById("result")
const submit=document.getElementById("submit")

function binary(e){
    e.preventDefault();
    const number=document.getElementById("number").value
if(number=='' )
{
    alert("You have to put a Input")
}    
else if(number<0)
{
    alert("Put a positive Number")
}
else{
    result.style.visibility="visible"
}
BainaryNumber=Number(number).toString(2)
result.innerText=BainaryNumber

}
submit.addEventListener('click',binary)


