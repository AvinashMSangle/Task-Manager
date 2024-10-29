import shortUUID from "short-uuid";

export function titleCase(str){
    return str
    .trim()
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase() )
}

export function randomID() {
    return shortUUID.generate();
}