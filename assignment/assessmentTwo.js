function minimumDifference(nums) {
  const n = nums.length / 2;
  const left = new Array(n + 1).fill().map(() => new Array().fill());
  const right = new Array(n + 1).fill().map(() => new Array().fill());

  let sum = 0;
  nums.forEach((num) => (sum += num));

  for (let i = 0; i < 1 << n; i++) {
    let count = 0; // to count number of elements in the subset
    let left_sum = 0;
    let right_sum = 0;

    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        count++;
        left_sum += nums[j];
        right_sum += nums[n + j];   
      }
    }

    left[count].push(left_sum); 
    // store the number of elements in the subset as i'th index or key of the 2D array
    right[count].push(right_sum);
  }

  for (let i = 0; i < n; i++) {
    right[i].sort((a, b) => a - b);
  }

  let ans = Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    const leftArr = left[i];
    const rightArr = right[n - i]; 
    // we have to find min abs diff in two equal size arrays

    leftArr.forEach((element) => {
      let low = 0;
      let high = rightArr.length - 1;

      while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        const value = sum - 2 * (element + rightArr[mid]);
        ans = Math.min(ans, Math.abs(value));
        if (ans == 0) {
          return ans;
        }
        if (value > 0) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

    });
  }

  return ans;
};

console.log(minimumDifference([3,9,7,3])) // 2
console.log(minimumDifference([-36,36])) // 72
console.log(minimumDifference([2,-1,0,4,-2,-9])) // 0

module.exports = minimumDifference;