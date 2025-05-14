function solution(N, stages) {
    const stageCounts = Array(N + 2).fill(0);
    
    // Count number of players on each stage
    for (let stage of stages) {
        stageCounts[stage]++;
    }

    let totalPlayers = stages.length;
    const failureRates = [];

    for (let i = 1; i <= N; i++) {
        const fail = stageCounts[i];
        const rate = totalPlayers > 0 ? fail / totalPlayers : 0;
        failureRates.push({ stage: i, rate });
        totalPlayers -= fail;
    }

    // Sort by failure rate descending, then by stage number ascending
    failureRates.sort((a, b) => {
        if (b.rate === a.rate) return a.stage - b.stage;
        return b.rate - a.rate;
    });

    return failureRates.map(obj => obj.stage);
}