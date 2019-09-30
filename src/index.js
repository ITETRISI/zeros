module.exports = function zeros(expression) {
    var arr = expression.split('*')
    var integral = 1;
    for (let i in arr) {
        if (arr[i].indexOf('!!') == -1) {
            arr[i] = arr[i].slice(0, -1);
            for (let y = 1; y <= arr[i]; y++) {
                integral = BigInt(integral) * BigInt(y);
            }
        } else {
            arr[i] = arr[i].slice(0, -2);
            if (arr[i] % 2 == 0) {
                for (let y = 2; y <= arr[i]; y += 2) {
                    integral = BigInt(integral) * BigInt(y);
                }
            } else {
                for (let y = 1; y <= arr[i]; y += 2) {
                    integral = BigInt(integral) * BigInt(y);
                }
            }
        }
    }
    var zero = true;
    var zeros = [...integral + ''].reduceRight((sum, number) => {
        (number == '0' && zero) ? sum++ : zero = false;
        return sum;
    }, 0);
    return zeros;
};