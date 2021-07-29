function deepEqual(a, b) {
    if (typeof(a) === "object" && typeof(b)==="object"){
        // Obteniendo las llaves de los objetos
        var aKeys = Object.keys(a).sort();
        var bKeys = Object.keys(b).sort();
        // Primero revisa si hay la misma cantidad de claves
        if(!deepEqual(aKeys.length, bKeys.length)) {
            return false;
        }
        // recorre las claves para saber que son iguales
        for(let i = 0; i < aKeys.length; i++) {
            if(!deepEqual(aKeys[i], bKeys[i])) {
                return false;
            }
            // Aquí mismo se pueden comparar los valores
            if(!deepEqual(a[aKeys[i]], b[aKeys[i]])) {
                return false;
            }
        }
        // Ya pasaste todas las validaciones, los objetos son iguales
        return true;
    }else if (a === b){
        return true
    }else{
        return false
    }
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
