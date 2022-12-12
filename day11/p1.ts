const input = await Deno.readTextFile('in.txt');

type Monkey = {
    items: number[],
    inspected: number,
    operation: string[],
    test: string
}

const monkeys: Monkey[] = [];
input.split('\n\n').forEach(monkey => {
    const info = monkey.split('\n').map(v => v.trim());
    let obj: Monkey = {
        items: info[1].slice(16).split(',').map(v => parseInt(v.trim(), 10)),
        inspected: 0,
        operation: [
            info[2].split(" ")[3],
            info[2].split(" ")[4],
            info[2].split(" ")[5],
        ],
        test: info[3].split(" ")[3] + ',' + info[4].split(" ")[5] + "," + info[5].split(" ")[5],
    }
    monkeys.push(obj);
})

for (let i = 0; i < 20 * monkeys.length; i++) {
    const monkey = monkeys[i % monkeys.length];
    const items = monkey.items;
    items.forEach(item => {
        let first = monkey.operation[0] == "old" ? item : parseInt(monkey.operation[0], 10);
        let op = monkey.operation[1];
        let second = monkey.operation[2] == "old" ? item : parseInt(monkey.operation[2], 10);
        let nv = 0;
        monkey.inspected++;
        if(op == "+") nv = first + second; else
        if(op == "*") nv = first * second;
        nv = Math.floor(nv / 3);
        const tarr = monkey.test.split(',').map(v => parseInt(v, 10));
        if(nv % tarr[0] == 0) {
            monkeys[tarr[1]].items.push(nv);
        } else {
            monkeys[tarr[2]].items.push(nv);
        }
    });
    monkey.items = [];
}

let max = 0;
let sMax = 0;
monkeys.forEach(monkey => {
    if(monkey.inspected > max) {
        sMax = max;
        max = monkey.inspected;
    } else if(monkey.inspected > sMax) {
        sMax = monkey.inspected;
    }
});

console.log(max * sMax);