
let ErrorMessage = '): 获取数据失败'

let baseConfig = {
	joke: { // 笑话配置
		url: "http://neihanshequ.com/", // 链接
		page: {
			listWarpper: '.content-wrapper',
			contentWrapper: 'p'
		},
		error: ErrorMessage
	},
	news: { // 新闻
		url: "http://news.baidu.com/",
		page: {
			listName: '.bold-item'
		},
        error: ErrorMessage
	},
    image: {
        url: "https://cn.bing.com/images/search?FORM=HDRSC2&q=",
		imgClassName: 'img.mimg',
		error: ErrorMessage,
		size: 120 // 图像输出分辨率
	}
};


module.exports = {
    joke: baseConfig.joke,
    news: baseConfig.news,
    image: baseConfig.image
}