function deepEqual(a, b) {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
 
     if (typeof(a) === "object" && typeof(b)==="object"){
         // Obteniendo las llaves de los objetos
         aKeys.sort();
         bKeys.sort();
         // Revisa si hay la misma cantidad de claves
         if(!deepEqual(aKeys.length, bKeys.length)) return false
         // Recorre las claves para saber que son iguales
         for(let key in aKeys) {
             if(!deepEqual(aKeys[key], bKeys[key])) return false
             // Comparación de valores
             if(!deepEqual(a[aKeys[key]], b[aKeys[key]])) return false
         }
 
         return true;
     }else if (a === b) return false
      else return false;
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