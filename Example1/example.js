
/* Local variable */

function localTest(){
    var localMessage = "This is a message from local variable.";
}

function globalTest(){
    globalMessage = "This is a message from global variable.";
}

localTest();
globalTest();


try{
    print(globalMessage);
}
catch(err){
   printErr(err); 
}

try{
    print(localMessage);
}
catch(err){
   printErr(err); 
}