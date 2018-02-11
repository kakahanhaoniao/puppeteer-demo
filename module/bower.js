let puppeteer = require('puppeteer')

class Bower{
	constructor(){

	}

	async openPage(url, option = {}, successCallback){
		try {
			const browser = await puppeteer.launch(option);
			const page = await browser.newPage();
			await page.goto(url);
			// 获取当前html
			const data = await page.$eval('body', e => e.innerHTML);
			return {data, page, browser};
		} catch (err) {
			console.warn(err);
		};
		
	}
}


module.exports = Bower;