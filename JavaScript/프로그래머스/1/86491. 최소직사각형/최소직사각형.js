function solution(sizes) {
    for(x of sizes) {
        x.sort((a, b) => a - b);
    }

    let width = 0;
    let height = 0;
    for(x of sizes) { 
        let [a, b] = x;
        width = Math.max(a, width);
        height = Math.max(b, height);
    }

    return width * height;
}