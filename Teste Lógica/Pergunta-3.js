let arr = [1,15,2,7,2,5,7,1,4]

function findCombination(X){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]+ arr[j] == X){
                return true;
            }
        }

    }
    return false;
}

