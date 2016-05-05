function boolCase1(){
    print("Condition 1 called")
    return true;
}

function boolCase2(){
    print("Condition 2 called")
    return true;
}

function bitCase1(){
    print("Condition 1 called")
    return true;
}

function bitCase2(){
    print("Condition 2 called")
    return true;
}

print("Boolean operator with '||' :");
if (boolCase1() ||  boolCase2()){ print("<br>");  }

print("Boolean operator with '|' :");
if (bitCase1() | bitCase2()){ print("<br>"); }


print("Boolean operator with '&&' :");
if (boolCase1() &&  boolCase2()){ print("<br>");  }

print("Boolean operator with '&' :");
if (bitCase1() & bitCase2()){ print("<br>"); }


