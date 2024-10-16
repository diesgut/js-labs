function* seriesGenerator() {
    yield 100;
    yield 200;
    if (false) {
        yield 300;
    }
    yield 400;
    yield 500;
    yield 600;
}

const serieGenerator = seriesGenerator();
const series = [];
for (i = 1; i <= 6; i++) {
    const serie = serieGenerator.next().value;
    series.push(serie);
}
console.log(`Series ${JSON.stringify(series)}`); //Series [100,200,400,500,600,null]

function* getAlphaNumericId() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (const letter of letters) {
        for (let i = 1; i <= 10; i++) {
            yield letter + i;
        }
    }
}

const alphaNumericId = getAlphaNumericId();
const alphaNumericIds = [];
for (i = 0; i < 30; i++) {
    alphaNumericIds.push(alphaNumericId.next().value);
}
console.log(`AlphanumericIds ${JSON.stringify(alphaNumericIds)}`); //AlphanumericIds ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10"]