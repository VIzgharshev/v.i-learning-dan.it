function filterBy(a, b) {
    let arrFiltered;
    if (b == null) {
        arrFiltered = a.filter(date => typeof date !== 'object' );
    } else {
        arrFiltered = a.filter(date => typeof date !== b);
    }
    return arrFiltered;
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));