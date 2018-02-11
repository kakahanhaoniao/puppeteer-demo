let Bower = require('./bower');
let config = require('../config/index').joke;
let tool = require('../tool/index');
let cheerio = require('cheerio');  
const chalk = require('chalk');

class Joke{
	constructor(){
		this.bower = new Bower();
	}

	async getJoke(){
		const {data} = await this.bower.openPage(
			config.url
		);
		var $=cheerio.load(data);
        var list = $(config.page.
        	listWarpper);
        const color = ['yellow', 'blue', 'red', 'white'];
        console.log(chalk.red('+------------------------------------------------------------+'));
        list.each((index, item) => {
        	console.log(chalk[color[index%4]](`${index}: ${$(item).find(config.page.contentWrapper).text()}`)); 
        });
        console.log(chalk.red('+------------------------------------------------------------+'));
	}
}


module.exports = {
	consoleJoke: function () {
        new Joke().getJoke();
	}
}