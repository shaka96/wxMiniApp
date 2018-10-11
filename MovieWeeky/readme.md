

需求一：

需求二：
非本周幻灯片页添加“返回本周”按钮

 不能直接在data中设置：currentIndex: weeklyMovieList.length -1,
会编译错误：“weeklyMovieList is not defined 
 ReferenceError: weeklyMovieList is not defined”。
 
### 文本换行
P标签是默认是自动换行的
```
强制不换行 
p { white-space:nowrap; }

自动换行 
p { word-wrap:break-word; }

强制英文单词断行 
p { word-break:break-all; }

*注意：设置强制将英文单词断行，需要将行内元素设置为块级元素。

超出显示省略号 
p{text-overflow:ellipsis;overflow:hidden;}
```
---------------------
[全文地址](https://blog.csdn.net/nosayno/article/details/67632534?utm_source=copy)