const minSafeInteger = Number.MIN_SAFE_INTEGER;
const maxSageInteger = Number.MAX_SAFE_INTEGER;

//outside this range, mathematical operations may fail
console.log(JSON.stringify({minSageInteger: minSafeInteger, maxSageInteger})); //{"minSageInteger":-9007199254740991,"maxSageInteger":9007199254740991}

const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);
console.log(aBigNumber);
console.log(anotherBigNumber);