export function upgradeNamePrizes(oldArrNames, index, newName) {
    let newArrNames = oldArrNames.slice();
    newArrNames[index-1] = newName;    
    return newArrNames;
}