# aplha-tetris
### 简介
* 一个智能化的俄罗斯方块，自主游玩行数高达10K，远超人类玩家。
* 游戏开发方面参考https://github.com/chvin/react-tetris。
* 前端方面的亮点在于响应式、自适应、数据持久化。
* 智能体方面利用强化学习训练对应特征点的权重，对方块的每一个位置和每一种形状进行判断，选择综合奖励值最高的动作。
* 分为六个特征点：高度特征点、能消除的行、容器中水平变化的次数、容器中竖直变化的次数、容器中空洞的个数、容器中井的个数（井的定义是为空，且左右都是墙）。
 
### 安装
```
npm install
```
### 运行
```
npm start
```
浏览自动打开 [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
### 多语言
在 [i18n.json](https://github.com/chvin/react-tetris/blob/master/i18n.json) 配置多语言环境，使用"lan"参数匹配语言如：`https://chvin.github.io/react-tetris/?lan=en`
### 打包编译
```
npm run build
```

在build文件夹下生成结果。



