async function execute(func, timer) {
    setTimeout(func, timer * 1000);
}

module.exports = execute;