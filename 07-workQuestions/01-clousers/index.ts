function makeFunc() {

    var counter = 0;
    function displayName() {
        counter++;
        return counter;

    }
    return {
        displayName,
        setToZiro: () => counter = 0
    };
}




const myFunc = makeFunc();
console.log(myFunc.displayName());
console.log(myFunc.displayName());
console.log(myFunc.displayName());
myFunc.setToZiro();
console.log(myFunc.displayName());
console.log(myFunc.displayName());
console.log(myFunc.displayName());


function displayName2() {
    var cnt = 0;
    cnt++;
    return cnt;
}

const myFunc2 = displayName2;
console.log(myFunc2());
console.log(myFunc2());
console.log(myFunc2());
console.log(myFunc2());
console.log(myFunc2());