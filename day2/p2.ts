const input = await Deno.readTextFile('in.txt');

const inputArr = input.split('\n');

const winningOptions = new Map([
    ['A', 'C'],
    ['B', 'A'],
    ['C', 'B']
]);

const losingOptions = new Map([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A']
]);

const drawingOptions = new Map([
    ['A', 'A'],
    ['B', 'B'],
    ['C', 'C']
]);

const scoreAdds = new Map([
    ['A', 1],
    ['B', 2],
    ['C', 3]
]);

let player1Score: number = 0;
let player2Score: number = 0;

for (let i = 0; i < inputArr.length; i++) {
    console.log(`round: ${i}`);
    const round = inputArr[i].split(' ');
    const player1 = round[0];
    const player2 = round[1];

    if (player2 === 'X') {
        // player1Score += scoreAdds.get(winningOptions.get(player1)) + 0;
        console.log(`losing option: `, winningOptions.get(player1));
        console.log(`score add: `, scoreAdds.get(winningOptions.get(player1))); 
        player2Score += scoreAdds.get(winningOptions.get(player1)) + 0;
    }
    else if (player2 === 'Y') {
        // player1Score += scoreAdds.get(player1) + 3;
        console.log(`drawing option: `, drawingOptions.get(player1));
        console.log(`score add: `, scoreAdds.get(drawingOptions.get(player1)));
        player2Score += scoreAdds.get(player1) + 3;
    }
    else if (player2 === 'Z') {
        // player1Score += scoreAdds.get(player1) + 6;
        console.log(`winning option: `, losingOptions.get(player1));
        console.log(`score add: `,scoreAdds.get(losingOptions.get(player1)));
        player2Score += scoreAdds.get(losingOptions.get(player1)) + 6;
    }
}

console.log(player2Score);
