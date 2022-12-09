const input = await Deno.readTextFile('in.txt');
// const input = `30373
// 25512
// 65332
// 33549
// 35390`

const split = input.split("\n").map((x) => x.split("").map((y) => +y));

let _topScore = 0;
for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
        let left = split[i].slice(0, j);
        let right = split[i].slice(j + 1);
        let top = split.slice(0, i).map((line) => line[j]);
        let bottom = split.slice(i + 1).map((line) => line[j]);
        let leftScore = 0;
        let rightScore = 0;
        let topScore = 0;
        let bottomScore = 0;
        for (let k = left.length - 1; k >= 0; k--) {
            leftScore++;
            if(split[i][j] > left[k]) {
                continue;
            }
            break;
        }
        for (let k = 0; k < right.length; k++) {
            rightScore++;
            if (split[i][j] > right[k]) {
              continue;
            }
            break;
        }
        for (let k = top.length - 1; k >= 0; k--) {
            topScore++;
            if (split[i][j] > top[k]) {
              continue;
            }
            break;
        }
        for (let k = 0; k < bottom.length; k++) {
            bottomScore++;
            if (split[i][j] > bottom[k]) {
              continue;
            }
            break;
        }
        let score = leftScore * rightScore * topScore * bottomScore;
        if (score > _topScore) _topScore = score;
    }
}

console.log(_topScore);