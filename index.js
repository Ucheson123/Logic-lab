let userInputA;
let userInputB;
const getValueA=document.getElementById("btn-get-a");
const showValueA=document.getElementById("display-a-value");
const getValueB=document.getElementById("btn-get-b");
const showValueB=document.getElementById("display-b-value");
const processDataBtn=document.getElementById("btn-process-data");
const showVarAtype=document.getElementById("type-of-a");
const showVarBtype=document.getElementById("type-of-b");
const convertAtoNumber=document.getElementById("a-to-number");
const convertBtoString=document.getElementById("b-to-string");
const convertBtoBoolean=document.getElementById("b-to-boolean");
const concatAB=document.getElementById("concat-result");
const addAB=document.getElementById("addition-result");
const subtractAB=document.getElementById("subtraction-result");
const multiplyAB=document.getElementById("multiplication-result");
const looseCompareAB=document.getElementById("loose-comparison");
const strictCompareAB=document.getElementById("strict-comparison");
const ifAandBIsTrue=document.getElementById("logical-and-result");
const bitwiseAndAB=document.getElementById("bitwise-result");
const alertSummary=document.getElementById("btn-alert-summary");
const confirmReset=document.getElementById("btn-confirm-reset");

getValueA.addEventListener('click', ()=>{
    userInputA=prompt("Please type in a value for Variable A:");
    showValueA.innerText=userInputA;
});

getValueB.addEventListener('click', ()=>{
    userInputB=prompt("Please type in a value for Variable B:");
    showValueB.innerText=userInputB;
});

processDataBtn.addEventListener('click', ()=>{
    const varTypeA= typeof userInputA;
    showVarAtype.innerText=varTypeA;

    const varTypeB= typeof userInputB;
    showVarBtype.innerText=varTypeB;

    const convAtoNum=Number(userInputA);
    convertAtoNumber.innerText=convAtoNum;

    const convBtoStr=String(userInputB);
    convertBtoString.innerText=convBtoStr;

    const convBtoBool=Boolean(userInputB);
    convertBtoBoolean.innerText=convBtoBool;

    const mergeAB=userInputA+userInputB;
    concatAB.innerText=mergeAB;

    const addedAB=Number(userInputA)+Number(userInputB);
    addAB.innerText=addedAB;

    const subAB=userInputA - userInputB;
    subtractAB.innerText=subAB;

    const AtimesB=userInputA*userInputB;
    multiplyAB.innerText=AtimesB;

    const looseComp= userInputA==userInputB;
    looseCompareAB.innerText=looseComp;

    const strictComp= userInputA===userInputB;
    strictCompareAB.innerText= strictComp;

    const logicalAnd= Boolean(userInputA) && Boolean(userInputB);
    ifAandBIsTrue.innerText=logicalAnd;

    const bitwiseAnd= userInputA & userInputB;
    bitwiseAndAB.innerText=bitwiseAnd;
});

alertSummary.addEventListener('click', ()=>{
    alert(`Summary of Variable A and B:
Variable A: ${userInputA} (Type: ${typeof userInputA})
Variable B: ${userInputB} (Type: ${typeof userInputB})
Concatenation of A and B: ${userInputA + userInputB}
Addition of A and B: ${Number(userInputA) + Number(userInputB)}
Subtraction of A and B: ${userInputA - userInputB}
Multiplication of A and B: ${userInputA * userInputB}
Loose Comparison (A == B): ${userInputA == userInputB}
Strict Comparison (A === B): ${userInputA === userInputB}
Logical AND (Boolean(A) && Boolean(B)): ${Boolean(userInputA) && Boolean(userInputB)}
Bitwise AND (A & B): ${userInputA & userInputB}`);
});

confirmReset.addEventListener('click', ()=>{
    if (confirm("Are you sure you want to reset all values?")) {
        userInputA = null;
        userInputB = null;
        showValueA.innerText = "";
        showValueB.innerText = "";
        showVarAtype.innerText = "";
        showVarBtype.innerText = "";
        convertAtoNumber.innerText = "";
        convertBtoString.innerText = "";
        convertBtoBoolean.innerText = "";
        concatAB.innerText = "";
        addAB.innerText = "";
        subtractAB.innerText = "";
        multiplyAB.innerText = "";
        looseCompareAB.innerText = "";
        strictCompareAB.innerText = "";
        ifAandBIsTrue.innerText = "";
        bitwiseAndAB.innerText = "";
    }
});