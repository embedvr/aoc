const input = await Deno.readTextFile('in.txt');

// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`

const inputArr = input.split('\n');

const groups: string[][] = [];
let tmp_group: string[] = [];
inputArr.forEach(line => {
    if(tmp_group.length === 3) {
        groups.push(tmp_group);
        tmp_group = [];
    }
    tmp_group.push(line);
});
groups.push(tmp_group);



let sum: number = 0;
groups.forEach(group => {

    console.log(group);
    const firstElf = group[0];
    const secondElf = group[1];
    const thirdElf = group[2];

    // console.log(firstElf, secondElf, thirdElf);

    let sameChar: string = '';
    for (let i = 0; i < firstElf.length; i++) {
        const char = firstElf[i];
        if(secondElf.includes(char) && thirdElf.includes(char)) {
            sameChar = char;
        }
    }

    console.log(sameChar);

    const charCode = sameChar.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122) {
        sum += charCode - 96;
    }
    else if (charCode >= 65 && charCode <= 90) {
        sum += charCode - 64 + 26;
    }
    

});

console.log(sum);