# include
该脚本用于按需加载脚本样式。

加载多组脚本并设置回调（usage)：
include.js([[url,callback], ...]);

加载多个脚本（usage)：
include.js([url1, url2, ...]);

加载样式（usage)：
include.css([url]);  

注意是通过动态生成script和link标签来加载的
优点就是不需要像seajs那样修改模块化现有代码 :)

不依赖其他库（no dependence）
