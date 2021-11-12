export function CreateArrayPagination(_array, k) {
    const paginationArray = [];
    let arr = [];
    for (let i = 0; i < _array.length; i++) {
        arr.push(_array[i])
        if ((i + 1) % k === 0 || ((i) === _array.length - 1)) {
            paginationArray.push(arr);
            arr = []
        }
    }

    return paginationArray
}