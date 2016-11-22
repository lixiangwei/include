# include
该脚本用于按需加载脚本样式。

加载多组脚本并设置回调
include.js([[url,callback], ...]);

加载多个脚本
include.js([url1, url2, ...]);

加载样式
include.css([url]);

优点就是不需要像seajs那样修改模块化现有代码 :)
