const input = await Deno.readTextFile('in.txt');
const commands = input.split('\n');

let c = 0;
let x = 1;
let pVis = [0, 1, 2];
let l = 0;
let crt = new Array(6).fill('|').map(() => new Array(40).fill('|'));

commands.forEach(command => {
    let [op, strength] = command.split(' ');
    if(op == "noop") {
        if(pVis.includes(c)) {
            crt[l][c] = "+";
        }
        c++;
        if(c % 40 == 0) {
            c = 0;
            l++;
        }
    } else if(op == "addx") {
        for(let i = 0; i < 2; i++) {
            if(pVis.includes(c)) {
                crt[l][c] = "+";
            }
            c++;
            if(c % 40 == 0) {
                c = 0;
                l++;
            }
            if(i == 1) {
                let v = parseInt(strength, 10);
                x += v;
                pVis = [x - 1, x, x + 1];
            }
        }
    }
})

for(let i = 0; i < crt.length; i++) {
    console.log(crt[i].join(""));
}