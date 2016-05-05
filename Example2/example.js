

function showTrue() {
    var x = True;
    print(Boolean(x));
}

function showtrue(){
    var x = true;
    print(Boolean(x));
}

try{
    showTrue();
}
catch(err){
    printErr(err);
}

try{
    showtrue();
}
catch(err){
    printErr(err);
}
