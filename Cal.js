function myfunction(opt) {
    var x = Number(document.operation.num1.value);
    var y = Number(document.operation.num2.value);
    var calculate;
    switch (opt) {

        case "add": calculate = (x + y); break;
        case "sub": calculate = (x - y); break;
        case "multiply": calculate = (x * y); break;
        case "div": calculate = (x / y); break;
        case "mod": calculate = (x % y); break;
        //  default  alert("only + - * / allowed");
    }
    //  document.write(calculate);
    // document.getElementById("demo").innerHTML= calculate;        
    document.operation.result.value = calculate;
}