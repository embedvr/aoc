const input = await Deno.readTextFile('in.txt');
const commands = input.split('\n');

let s = 0;
let c = 0;
let x = 1

commands.forEach(command => {
    let [op, strength] = command.split(' ');
    if(op == "noop") {
        c++;
        if([20, 60, 100, 140, 180, 220].includes(c)) {
            s += x * c;
        }
    } else if (op == "addx") {
        for(let i = 0; i < 2; i ++) {
            c++;
            if([20, 60, 100, 140, 180, 220].includes(c)) {
                s += x * c;
            }
            if(i == 1) {
                let v = parseInt(strength, 10);
                x += v;
            }
        }
    }
});

console.log(s);