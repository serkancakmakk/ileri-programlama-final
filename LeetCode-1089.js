Leetcode 1089

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
     const len = arr.length
    
     /** Sabit uzunluğu dizinin uzunluğu ile eşitleriz */
    
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] === 0) arr.splice(i, 0, 0)
  }
    /** i len -1 dir. i 0 a eşit veya büyükse i yi azaltırız i 0 a eşitse diziye i ve  0 0 ekleriz*/
    
  while (arr.length > len) {
    arr.pop()
      /** dizinin uzunluğu len'den büyükse dizinin sonundan bir elemanı çıkarırız */
  }
 
};
