const arr = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]
const arr_el = []


for( let i = 0 ; i < arr.length ; i++) {
    if( arr[i] === 1 ) {
        arr.splice( i, 1 )
        arr.unshift( 1 )
    }
} 

console.log(arr)




