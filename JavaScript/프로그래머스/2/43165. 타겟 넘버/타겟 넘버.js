let answer = 0;
let n;
let t;
function solution(numbers, target) {
    n = numbers;
    t = target;
    dfs(0, 0);

    return answer;
}

function dfs(depth, sum) {
    if(depth === n.length){
        if(sum === t){
            answer++;
            return;
        } else {
            return;
        }
    }

    let plus = sum + n[depth];
    dfs(depth + 1, plus);

    let minus = sum - n[depth];
    dfs(depth + 1, minus);
}