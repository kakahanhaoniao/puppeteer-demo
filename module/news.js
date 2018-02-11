let Bower = require('./bower');
let config = require('../config/index').news;
let tool = require('../tool/index');
let cheerio = require('cheerio'); 
const chalk = require('chalk');

class News{
	constructor(){
		this.bower = new Bower();
	}

	async getNews(){
		const {data} = await this.bower.openPage(
			config.url
		);
		var $ = cheerio.load(data);
        var list = $(config.page.listName);
        console.log(chalk.red('+------------------------------------------------------------+'));
        list.each((key, dom)=>{
           console.log(chalk.yellow(`${$(dom).text().trim()}`)); 
		});
        console.log(chalk.red('+-----------------------------------------------------------+'));
	}
}


module.exports = {
    consoleNews: function () {
        new News().getNews();
	}
}