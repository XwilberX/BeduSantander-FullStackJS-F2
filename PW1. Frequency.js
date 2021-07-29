function frecuency (string){
    let result = {}, letter;

    for(letter of string.toLowerCase()){
        query = (!(letter in result)) ?
            result[letter] = 1 : result[letter] +=1;
        
    }
    return result;
}

console.log('Test 1: ', frecuency('cccbbbaaa'));
console.log('Test 2: ', frecuency('www.bedu.org'));
console.log('Test 3: ', frecuency('john.doe@domain.com'));