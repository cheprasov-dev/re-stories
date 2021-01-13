export function pushEmptyNamesPrizes(index) {// создает массивы в namesPrizes для каждого призового места
    if (index > 10) index = 10
    let arr = [];
    for (index; index > 0; index--) {
        arr.push('');
    }
    return arr
}
