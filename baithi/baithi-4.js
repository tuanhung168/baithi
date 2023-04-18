// BAI 4
let arr=[3, 25, 38, 49, 12];
for (i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      hd = arr[i];
      arr[i] = arr[j];
      arr[j] = hd;
    }
  }
}
console.log("mảng sau khi sắp xếp là", arr);