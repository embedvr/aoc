const input = await Deno.readTextFile('in.txt');

// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`

const inputArr = input.split('\n');


let sum: number = 0;
inputArr.forEach(rucksack => {
    const half = rucksack.length / 2;
    const firstHalf = rucksack.slice(0, half);
    const secondHalf = rucksack.slice(half, rucksack.length);

    const firstHalfArr = firstHalf.split('');
    const secondHalfArr = secondHalf.split('');
    let sameChar: string = '';
    firstHalfArr.forEach(char => {
        if(secondHalfArr.includes(char)) {
            sameChar = char;
        }
    });
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