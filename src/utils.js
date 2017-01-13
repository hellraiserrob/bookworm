
/**
 * generate random number
 */
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}


module.exports = {
    getRandomNumber: getRandomNumber
}