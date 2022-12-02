const input = await Deno.readTextFile('in.txt');

const inputArr = input.split('\n');

const player1: string[] = [];
const player2: string[] = [];

let player1Score: number = 0;
let player2Score: number = 0;
// convert player 2 to A B C

for (let i = 0; i < inputArr.length; i++) {
    const round = inputArr[i].split(' ');
    player1.push(round[0]);
    if(round[1] === 'X') {
        player2.push('A');
    } else if (round[1] === 'Y') {
        player2.push('B');
    } else if (round[1] === 'Z') {
        player2.push('C');
    }
    // player2.push(round[1]);
}

for (let i = 0; i < player1.length; i++) {
    if(player1[i] === player2[i]) {
        player1Score += 3;
        player2Score += 3;
    } else if (player1[i] === 'A' && player2[i] === 'B') {
        player2Score += 6;
    }
    else if (player1[i] === 'A' && player2[i] === 'C') {
        player1Score += 6;
    }
    else if (player1[i] === 'B' && player2[i] === 'A') {
        player1Score += 6;
    }
    else if (player1[i] === 'B' && player2[i] === 'C') {
        player2Score += 6;
    }
    else if (player1[i] === 'C' && player2[i] === 'A') {
        player2Score += 6;
    }
    else if (player1[i] === 'C' && player2[i] === 'B') {
        player1Score += 6;
    }

    if(player1[i] == 'A') {
        player1Score += 1;
    } else if (player1[i] == 'B') {
        player1Score += 2;
    } else if (player1[i] == 'C') {
        player1Score += 3;
    }

    if(player2[i] == 'A') {
        player2Score += 1;
    }
    else if (player2[i] == 'B') {
        player2Score += 2;
    }
    else if (player2[i] == 'C') {
        player2Score += 3;
    }



}

console.log(player1Score, player2Score);