class PQ {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        if(this.items.length === 0){
            this.items.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                if(element < this.items[i]) {
                    this.items.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.items.push(element);
            }
        }
    }


    dequeue(){
        return this.items.shift();
    }
}


function solution(scoville, K) {

    const pq = new PQ();
    let answer = 0;
    
    for(let i = 0; i < scoville.length; i++) {
        pq.enqueue(scoville[i]);    
    }

    while(true){

        if(pq.items[0] >= K){
            break;
        }

        pq.enqueue(pq.dequeue() + pq.dequeue() * 2);
        answer++;


        if(pq.items.length === 1){
            if(pq.items[0] < K){
                answer = -1;
            }
            break;
        }
    }

    return answer;
}
