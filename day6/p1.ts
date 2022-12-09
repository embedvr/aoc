const input = await Deno.readTextFile('in.txt');
// const input = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;

let splitted = input.split('');

let starts = [];
for (let i = 0; i < splitted.length; i++) {
    let ch = splitted.slice(i, i + 4);
    if(ch.length < 4) break;
    console.log(i, ch);
    let unique = true;
    for (let j = 0; j < ch.length; j++) {
        for (let k = j + 1; k < ch.length; k++) {
            if (ch[j] === ch[k]) {
                console.log(ch[j], ch[k]);
                unique = false;
                break;
            }
        }
    }
    if (unique) {
        console.log('unique', ch)
        starts.push(i + 4);
    }
}

console.log(starts);