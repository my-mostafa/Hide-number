let input = document.querySelector("input")
let finalnumber = 0
input.addEventListener("keypress", function(esf){
    if(esf.keyCode === 13){
        let num = input.value
        if(num.length == 11){
        let numfin = num.slice(7 , 11)
        finalnumber = numfin.padStart(11 ,"*");
        input.insertAdjacentHTML("afterend",`<h1 style="text-align: center;">${finalnumber}</h1>`)
        }
    }
})




