function wordConstructor(){
    let word = '';
    
    function addLetter(letter:string){
        word += letter;
        return word;
    }
    return addLetter
}

const addingLetter = wordConstructor();
console.log(addingLetter("a"))
console.log(addingLetter("b"))
console.log(addingLetter("c"))
console.log(addingLetter("d"))