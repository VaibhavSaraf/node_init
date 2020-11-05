const validator = require('validator')
const chalk = require('chalk') 
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('vaibhavgsaraf@gmail.com'))

console.log(validator.isURL('https://vaibhav.io'))

console.log(chalk.green('Success!'))

const redMsg = chalk.red('IRON MAN')

console.log(redMsg)

const log = console.log; 
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
 
