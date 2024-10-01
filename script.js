let expression = "";
let oper = "";
let result = 0;
let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector("#screen");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        oper = button.textContent;
        // console.log(oper);
        executeButton();
    })
})

function clear(){
    screen.textContent = 0;
    expression = "";
}

function print(e){
    if(e.length > 17) {
        e = e.slice(e.length - 17);
        console.log("overflow"); 
    }
    screen.textContent = e;
}

function executeButton(){
    if(oper == "AC") clear();
    else if(oper == "=") operate();
    else {
        if(oper == "Ans") expression += result;
        else expression += oper;
        print(expression);
    }
}

function operate(){
    try{
        result = eval(expression);
    }
    catch(e){
        if(e instanceof SyntaxError){
            print("Syntax Error");
            return;
        }
    }
    if(result == Infinity)
        print("Math Error");
    else {
        if(!isInt(result)){
            result = parseFloat(result.toFixed(2));
                // result = Math.floor(result);
        }
        print(result);
        expression = result;
    }
}


function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

// print("ZZZZ");