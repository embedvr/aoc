const input = await Deno.readTextFile('in.txt');
// const input = `30373
// 25512
// 65332
// 33549
// 35390`

const splitIn: string[] = input.split('\n');

type Cordinate = {
    x: number;
    y: number;
    size: number;
}

type Row = number[];

const cordinateMap: Cordinate[] = [];
let visTrees: Cordinate[] = [];

splitIn.forEach((line, iLine) => {
    let columns = line.split('');
    columns.forEach((col, iCol) => {
        console.log(col);
        cordinateMap.push({ x: iCol, y: iLine, size: parseInt(col) });
    });
});

// get largest x value and y value
const maxX = Math.max(...cordinateMap.map((cord) => cord.x));
const maxY = Math.max(...cordinateMap.map((cord) => cord.y));

// get all trees on the edges
// visTrees.push(...cordinateMap.filter((cord) => cord.x === 0 || cord.x === maxX || cord.y === 0 || cord.y === maxY));

// check every tree
cordinateMap.forEach((cord) => {
    // check all trees above and below
    const above = cordinateMap.filter((c) => c.x === cord.x && c.y < cord.y);
    const below = cordinateMap.filter((c) => c.x === cord.x && c.y > cord.y);
    // check all trees left and right
    const left = cordinateMap.filter((c) => c.y === cord.y && c.x < cord.x);
    const right = cordinateMap.filter((c) => c.y === cord.y && c.x > cord.x);
    // check if any of the trees above, below, left and right are blocking the tree in their respective directions.
    const aboveBlocking = above.some((a) => a.size >= cord.size);
    const belowBlocking = below.some((b) => b.size >= cord.size);
    const leftBlocking = left.some((l) => l.size >= cord.size);
    const rightBlocking = right.some((r) => r.size >= cord.size);

    if (!aboveBlocking || !belowBlocking || !leftBlocking || !rightBlocking) {
        visTrees.push(cord);
    }
    console.log(cord, aboveBlocking, leftBlocking, rightBlocking, belowBlocking);
    // console.log(above, below, left, right)

    
});

console.log(visTrees.length);