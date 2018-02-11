const puppeteer = require('puppeteer');
var fs = require('fs');
let Bower = require('./module/bower');

class Puppr {
    constructor () {

    }

    async pages () {
        const {page, browser} = await new Bower().openPage('http://www.baidu.com',
            {
                headless: false,
                slowMo: 250,
                devtools: true
            }
        );
        this.page = page;
        this.browser = browser;
         // 加载脚本和layer弹框文件
        await page.addScriptTag({url: '//cdn.bootcss.com/jquery/1.12.3/jquery.min.js'});
        await page.addScriptTag({path: 'module/layer/layer.js'});
        await page.addStyleTag({path: 'module/layer/theme/default/layer.css'});
        // const text = fs.readFileSync('./box.html', 'utf-8');
        const box = await this.evaluateAlert();
        // await openPageSilentContent();
        // page.setContent(otherPage);
        // button.click();                                                                                                                                                                                                                                                                                                                                                                                                                                
    }

    async openPageSilentContent (url) {
        const {page} = new Bower().openPage('http://www.sina.com');
        otherPage = await page.content();
        return otherPage;
    }

    async evaluateAlert () {
        await this.page.evaluate(() => {
            document.querySelector('#wrapper').addEventListener('click', (e) => {
                const target = e.target;
                layer.alert('layer loaded success');
                e.preventDefault();
                e.stopImmediatePropagation();
            });
            return document;
        });
        
    }

}

module.exports = Puppr;