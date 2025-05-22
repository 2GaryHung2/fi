function runSimulation() {
    let initialCapital = parseFloat(document.getElementById("initial_capital").value);
    let initialSpending = parseFloat(document.getElementById("initial_spending").value);
    let years = parseInt(document.getElementById("years").value);
    let numSimulations = parseInt(document.getElementById("num_simulations").value);

    // 讓使用者輸入整數 (%)，然後轉換為小數
    let expectedReturn = parseFloat(document.getElementById("expected_return").value) / 100; // 6 -> 0.06
    let volatility = parseFloat(document.getElementById("volatility").value) / 100; // 15 -> 0.15
    let inflationRate = parseFloat(document.getElementById("inflation_rate").value) / 100; // 15 -> 0.15

    let successCount = 0;

    for (let i = 0; i < numSimulations; i++) {
        let capital = initialCapital;
        let spending = initialSpending;
        for (let j = 0; j < years; j++) {
            let marketReturn = Math.random() * (volatility * 2) - volatility + expectedReturn;
            capital *= (1 + marketReturn);
            capital -= spending;
            spending *= (1 + inflationRate);
            if (capital <= 0) break;
        }
        if (capital > 0) successCount++;
    }

    let successRate = (successCount / numSimulations) * 100;
    document.getElementById("result").innerText = `成功機率: ${successRate.toFixed(2)}%`;
}
