FROM node
EXPOSE 8888
WORKDIR /app
# 安装npm模块
ADD . /app/
# 使用淘宝的npm镜像
RUN npm install --production -d --registry=https://registry.npm.taobao.org
# 运行app.js
CMD ["node", "/app/service.js"]

