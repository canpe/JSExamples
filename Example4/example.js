
function isEqual(val1, val2){
    return val1 == val2; 
}

function isIdenticalEqual(val1, val2){
    return val1 === val2; 
}


print("Both sides will be convreted to Number().");
if (isEqual("5", 5)){
    print("'5' is equal to 5.");
}
else{
    print("'5' is NOT equal to 5.");
}

print("");
print("Neither value is implicitly converted to some other value. If the values have <b>different types</b>, the values are <b>considered unequal</b>.");
if (isIdenticalEqual("5", 5)){
    print("'5' is identical equal to 5.");
}
else{
    print("'5' is NOT identical equal to 5.");
}

print("");
print("Both sides will be convreted to Boolean(). Boolean(null) == Boolean(undefined)");
if (isEqual(null, undefined)){
    print("null is equal to undefined.");
}
else{
    print("null is NOT equal to undefined.");
}


print("");
print("Neither value is implicitly converted to some other value. If the values have <b>different types</b>, the values are <b>considered unequal</b>.");
if (isIdenticalEqual(null, undefined)){
    print("null is identical equal to undefined.");
}
else{
    print("null is NOT identical equal to undefined.");
}


print("");
print("Most of the time, developers would like to separate <b>null</b> value from <b>undefined</b> with comparing 'value !== undefined'.");
if (null !== undefined){
    print("null is NOT identical equal to undefined.");
}
