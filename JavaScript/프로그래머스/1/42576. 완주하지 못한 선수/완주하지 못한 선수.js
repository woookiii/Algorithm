function solution(participant, completion) {
    const P = new Map();
    for(let x of participant) {
        if(!P.has(x)) {
            P.set(x, 1);
        } else {
            P.set(x, P.get(x) + 1);
        }
    }

    for(let x of completion) {
        P.set(x, P.get(x) - 1);
    }

    for(let x of P) {
        let [key, value] = x;
        if(value > 0){
            return key;
        }
    }

    return 1;
}