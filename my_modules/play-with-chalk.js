const chalk = require("chalk");

console.clear();
const log = console.log;

log("\x1b[43mHello\x1b[0m");
log(chalk.bgYellow("Hello"));

log(chalk.red.bgBlue.bold("Hello!"));

log(chalk.yellow("Hello", "World!", "Yes"));

log(chalk.red("Hello", chalk.underline("world")));

log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

log(chalk.rgb(123, 45, 67).underline("Hello!"));
log(chalk.hex("#BADA55").bold("Bold gray!"));
