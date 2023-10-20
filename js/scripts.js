window.addEventListener("load", function () {
    const form = document.getElementById("Languagepick");
    form.addEventListener("submit", LanguagePicker);
});

function LanguagePicker(event) {
    event.preventDefault();
    const color = document.querySelector("input#input1").value;
    const phonePercent = document.querySelector("select#input2").value;
    const starterType = document.querySelector("select#input3").value;
    const milkCereal = document.querySelector("input[name='input4']:checked").value;
    const ShoeSock = document.querySelector("input[name='input5']:checked").value;




    if (color === "blue" || color === "BLUE" || color === "Blue") {
        result = "C++, C C#"
    } else if (phonePercent > 50 && ShoeSock === "skse") {
        result = "Rust, Lua, Groovy "
    } else if (milkCereal === "cereal" && (color === "red" || color === "RED" || color === "Red")) {
        result = "Assembly, D, F#"
    } else if (starterType == "fire" && milkCereal === "milk"){
result = "Scheme, Dart, Swift"
    }
    else
result = "JavaScript"

document.getElementById("output").innerText = result;
}