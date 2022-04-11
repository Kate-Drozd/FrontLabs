
function mean(arr) {
    var sum=0;
    for(var i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    return sum/arr.length;
}

function max_arr(arr) {
    var max = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function min_arr(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
