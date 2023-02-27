function chunkArrayInGroups(arr, size) {
    var out = [];
    var temp = [];
    for (var i = 0; i < arr.length; i += size) {
        for (var j = i; j < i + size; j++) {
            if (arr[j + 1] == undefined) {
                temp.push(arr[j]);
                break;
            }
            else {
                temp.push(arr[j]);
            }
        }
        out.push(temp);
        temp = [];
    }
    return out;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));