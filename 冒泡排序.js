function paiXu(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr.length - 1; j++) {
           if (arr[j] < arr[j + 1]) {
               var tmp = arr[j]
               arr[j] = arr[j + 1];
               arr[j + 1] = tmp;
           }
       }
    }
   console.log(arr);
}