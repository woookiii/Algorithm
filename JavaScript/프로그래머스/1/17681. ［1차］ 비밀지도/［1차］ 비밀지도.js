function solution(n, arr1, arr2) {
    
    let a1 = [];
    let a2 = [];
    let answer = [];

    for(let i = 0; i < n; i++) { 

        let s1 = arr1[i].toString(2);
        let s2 = arr2[i].toString(2);

        while(!(s1.length === n)){
            s1 = "0" + s1;
        }
        while(!(s2.length === n)){
            s2 = "0" + s2;
        }

        a1.push(s1);
        a2.push(s2);
    }

    for(let i = 0; i < n; i++) {
        let s = ""
        for(let j = 0; j < n; j++){
            if(a1[i][j] === "0" && a2[i][j] === "0") {
                s += " ";
            } else {
                s += "#";
            }
        }
        answer.push(s);
    }
    
    return answer;
}