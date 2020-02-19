module.exports = function toReadable(number) {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenForNinety = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20 && number >= 10) return tenForNinety[number % 10];
    let result = "";
    let hundred = Math.floor(number / 100);
    let ten = Math.floor(number / 10) % 10;
    let unit = number % 10;
    if (number === 0) return 'zero';
    if (hundred > 0) result += `${units[hundred - 1]} hundred`;
    if (number % 100 < 20 && number % 100 >= 10) {
        result += ` ${tenForNinety[number % 100 % 10]}`;
    } else {
        if (ten > 0) result += result === "" ? `${tens[ten - 2]}` : ` ${tens[ten - 2]}`;
        if (unit > 0) result += result === "" ? `${units[unit - 1]}` : ` ${units[unit - 1]}`;
    }
    return result;
}
