
/* PRINT FUNCTION */

function print(value){
    var str = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = str + "<br>" + value;
}

function printErr(value){
    value = "<font color='red'>" + value + "<font/>";
    print(value);
}