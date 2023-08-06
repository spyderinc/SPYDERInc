//Input Text
let input = document.getElementById("input");
let result = document.getElementById("result");

//SELECTED VALUES
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

//NOW ADD EVENT LISTNER
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

//initial values
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    //result.value = input.value
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //compare the input & resultType value and add formula 

    //METER
    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        //MEter -> Kilometer Formula
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        //METER -> Centimeter
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "meter" && resultTypeValue === "foot"){
        //METER -> Foot
        result.value = Number(input.value) * 3.28084;
    } else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
        //METER -> Inch
        result.value = Number(input.value) * 39.3700787402;
    }
    else if (inputTypeValue === "meter" && resultTypeValue === "meter"){
        //METER -> Inch
        result.value = input.value;
    }
}