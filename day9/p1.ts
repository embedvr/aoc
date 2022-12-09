const input = await Deno.readTextFile('in.txt').then(i => i.trim());
// const input = `R 4
// U 4
// L 3
// D 1
// R 4
// D 1
// L 5
// R 2`
const moves = input.split('\n')

let rope = [];
for(let i = 0; i < 2; i++) {
    rope.push([0, 0]);
}
let visited = {[[0,0]]: 1};
for (let i = 0; i < moves.length; i++) {
    let [d, m] = moves[i].split(' ');
    while(m--) {
        if(d == 'R') rope[0][1] += 1;
        else if(d == 'L') rope[0][1] -= 1;
        else if(d == 'U') rope[0][0] += 1;
        else rope[0][0] -= 1;
    
        for (let j = 1; j < 2; j++) {
            if(Math.abs(rope[j][0] - rope[j-1][0]) > 1 || Math.abs(rope[j][1] - rope[j-1][1]) > 1) {
                if(rope[j][0] != rope[j-1][0] && rope[j][1] != rope[j-1][1]) {
                    rope[j][0] += rope[j-1][0] > rope[j][0] ? 1 : -1;
                    rope[j][1] += rope[j-1][1] > rope[j][1] ? 1 : -1;
                } else if (rope[j][0] == rope[j-1][0]) {
                    rope[j][1] += rope[j-1][1] > rope[j][1] ? 1 : -1;
                } else {
                    rope[j][0] += rope[j-1][0] > rope[j][0] ? 1 : -1;
                }
            }
        visited[rope[2 - 1]] = 1;
    }

    }
}

console.log(Object.keys(visited).length);