const INNInput = document.querySelector("#INNInput");
const INNCheck = document.querySelector(".INNCheck");
const INNResult = document.querySelector(".INNResult");

const INNRegExp = /^(1|0)\d{13}$/;
INNCheck.addEventListener("click", ( ) => {
    console.log(INNInput.value)
    if(INNRegExp.test(INNInput.value)) {
        INNResult.innerText = "OK";
        INNResult.style.color = "green"
    }else{
        INNResult.innerText = "FALSE";
        INNResult.style.color = "red"
    }
} )
