function chunk(array, size) {

  let pos = 0;
  let total = []

  if (size <= array.length) {
    while (pos < array.length) {
      total.push(array.slice(pos, pos += size));

    }
    return total;
  } else {
    alert('Elige un tamaño equivalente a la longitud de tu arreglo');

  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Test 1: ', chunk(list, 1));
console.log('Test 2: ', chunk(list, 2));
console.log('Test 3; ', chunk(list, 3));
