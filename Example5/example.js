

function printArguments(){
    for (var i = 0; i < arguments.length; i++){
        print("Argument " + (i + 1) + ": "+ arguments[i]);
    }
}


function printArgumentsWithTwoParameter(param1, param2){
    print("Parameter 1: "+ param1);
    print("Parameter 2: "+ param2);
    print("-------------");
    for (var i = 0; i < arguments.length; i++){
        print("Argument " + (i + 1) + ": "+ arguments[i]);
    }
}

print("<br><b>String parameters - No parameters defined. Func()</b>")
printArguments("Apple", "Banana", "Cherry");

print("<br><b>Number parameters - No parameters defined. Func()</b>")
printArguments(1, 2, 3, 4, 5, 6, 7);

print("<br><b>Array parameter - No parameters defined. Func().</b>")
printArguments([1, 2, 3, 4, 5, 6, 7]);

var obj = { 
    name: "Bob", 
    toString: function(){ 
        return this.name;
    }
}

var arr = [];
arr[8] = "9th"; 

print("<br><b>Mixed type parameters - No parameters defined. Func().</b>")
printArguments([1, 2, 3, 4, 5, 6, 7], {name: "John"}, obj, true, arr);

print("<br><b>String parameters - Two parameters defined. Func(param1, param2).<b></b>")
printArgumentsWithTwoParameter("Apple", "Banana", "Cherry");

print("<br><b>String parameters - Two parameters defined. Func(param1, param2).<b></b>")
printArgumentsWithTwoParameter("Apple");