function solution(s) {
    let a = [];
    let whatnumber = "";

    const map = new Map();

    map.set("zero", 0);
    map.set("one", 1);
    map.set("two", 2);
    map.set("three", 3);
    map.set("four", 4);
    map.set("five", 5);
    map.set("six", 6);
    map.set("seven", 7);
    map.set("eight", 8);
    map.set("nine", 9);

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            a.push(parseInt(s[i]));
        } else {
            whatnumber += s[i];
            while (!map.has(whatnumber)) {
                i++;
                whatnumber += s[i];
            }
            a.push(map.get(whatnumber));
            whatnumber = "";
        }
    }

    let answer = "";
    for (let i of a) {
        answer += i.toString();
    }

    return parseInt(answer);
}