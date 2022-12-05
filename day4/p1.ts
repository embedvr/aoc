const input = await Deno.readTextFile('in.txt');
// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`

// for every line in the input, split it into two ranges
// check if any of the two ranges fully contain the other range.

const lines = input.split('\n');
const ranges = lines.map(line => line.split(',').map(range => range.split('-').map(Number)));

const validRanges = ranges.filter(([range1, range2]) => {
  const [min1, max1] = range1;
  const [min2, max2] = range2;
  return (min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1);
});

console.log(validRanges.length);

// now check if the ranges on each line overlap at all. count the ones that do and print

const overlappingRanges = ranges.filter(([range1, range2]) => {
    const [min1, max1] = range1;
    const [min2, max2] = range2;
    return (min1 <= min2 && max1 >= min2) || (min2 <= min1 && max2 >= min1);
});

console.log(overlappingRanges.length);