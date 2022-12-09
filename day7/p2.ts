const input = Deno.readTextFileSync("in.txt");

const consoleInput: string[] = input.split("\n");

type Directory = {
    parent?: Directory;
    files: { [name: string]: number};
    dirs: { [name: string]: Directory};
};

const fs: Directory = { files: {}, dirs: {} };

let current = fs;

for (const command of consoleInput) {
    const [cmd, ...rest] = command.split(" ");
    if(cmd == "$") {
        if(rest[0] == "cd") {
            const dir = rest[1];
            if(dir == "..") {
                current = current.parent!;
            } else if (dir == "/") {
                current = fs;
            } else {
                if(!current.dirs[dir]) {
                    current.dirs[dir] = { parent: current, files: {}, dirs: {} };
                }
                current = current.dirs[dir];
            }
        }   
    } else if(cmd !== "dir") {
        current.files[rest[0]] = parseInt(cmd);
    }
}

const dSizes: number[] = [];

function getDirSize(dir: Directory): number {
    let size = 0;
    for(const file in dir.files) {
        size += dir.files[file];
    }
    for(const d in dir.dirs) {
        const dSize = getDirSize(dir.dirs[d]);
        size += dSize;
        dSizes.push(dSize);
    }
    return size;
}

let rs = getDirSize(fs);

// console.log(dSizes.filter(x => x <= 100000).reduce((a, b) => a + b));

console.log(Math.min(...dSizes.filter(x => x >= 30000000 - (70000000 - rs))));
