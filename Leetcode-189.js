/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = 1; i <= k; i += 1) {
    const popNum = nums.pop();
    nums.unshift(popNum);
  }
};

  return nums; 
i’yi 1 olarak belirleyip k’ya eşit olana kadar 1 ekledim. K ya ulaşana kadar sondan 1 sayı çıkardım ve bunları popNum’un içinde tuttum.k’ya ulaşınca popNum’ın içindeki sayıları dizenin başına ekledim.
