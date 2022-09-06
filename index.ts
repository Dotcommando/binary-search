const sample = [ -1, 0, 3, 5, 9, 12 ];
const target = 9;

function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  function binSearch(startIndex: number, lastIndex: number): number {
    if (startIndex === lastIndex) {
      return nums[startIndex] === target
        ? startIndex
        : -1;
    } else if (startIndex + 1 === lastIndex) {
      return nums[startIndex] === target
        ? startIndex
        : nums[lastIndex] === target
          ? lastIndex
          : -1;
    }

    const half = startIndex + Math.floor((lastIndex - startIndex) / 2);

    return nums[half] === target
      ? half
      : nums[half] < target
        ? binSearch(half, lastIndex)
        : binSearch(startIndex, half);
  }

  return binSearch(0, nums.length - 1);
}

console.log('Result:', search(sample, target));
