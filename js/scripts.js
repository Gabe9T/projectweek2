window.addEventListener("load", function () {
    const form = document.getElementById("Languagepick");
    form.addEventListener("submit", LanguagePicker);
});

function LanguagePicker(event) {
    event.preventDefault();
    let result = "";
    const color = document.querySelector("input#input1").value.toLowerCase();
    const phonePercent = document.querySelector("input#input2").value;
    const starterType = document.querySelector("select#input3").value;
    const milkCereal = document.querySelector("input[name='input4']:checked").value;
    const ShoeSock = document.querySelector("input[name='input5']:checked").value;




    if (color === "blue") {
        result = "C++"
    } else if (phonePercent > 50 && ShoeSock === "skse") {
        result = " Groovy "
    } else if (milkCereal === "cereal" && color === "Red") {
        result = "Assembly"
    } else if (starterType === "fire" && milkCereal === "milk") {
        result = "Scheme"
    }else if(ShoeSock === "skse"){
        result = "Machine code"
    }else if(ShoeSock === "sksk"){
        result = "F#"
    }else if(color === "yellow"){
        result = "D"
    }else if (phonePercent > 50 && phonePercent <  65) {
        result = "Lua "
    }else if (color === "brown") {
        result = "Rust "
    }else if (starterType === "grass" && color === "green") {
        result = "Python"    
    }else{
    result = "JavaScript"
    }
    document.getElementById("output").innerText = result;
}


