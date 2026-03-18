function pickVoucher(vouchers, delays, max_wait) {
    let bestIndex = -1;
    let bestRatio = -1; 

    for (let i = 0; i < vouchers.length; i++) {
        if (delays[i] <= max_wait) {
            let ratio = delays[i] === 0 ? Infinity : vouchers[i] / delays[i];

            if (ratio > bestRatio) {
                bestRatio = ratio;
                bestIndex = i;
            }
        }
    }

    return bestIndex;
}
let vouchers1 = [50, 120, 20];
let delays1 = [2, 4, 1];
let max_wait1 = 3;
console.log(pickVoucher(vouchers1, delays1, max_wait1)); 