import * as React from "react";
import "./index.css";
import { IArticle } from "../../types";

interface ArticleProps {
  index: number;
  data: IArticle;
}

/*
    如果方法体内没有其他的内容，只是单纯的直接return（如nav， footer，就可以直接用=>();来省略的写；
    如果还需要添加其他的东西，那么就要用{ ...  return(); }，在大括号里写其他内容，将return的部分显式的写出来；
    总之就是对箭头函数/lambda表达式的语法熟悉了就好了。
*/

const Article: React.FC<ArticleProps> = props => {
  // 这一段用了对象和数组结构的特性
  const {
    index,
    data: { title, createTime, content }
  } = props;

   
  return (
    <div className="article-item">
      <h2 className="article-title">
        #{index + 1} {title}
      </h2>
      <blockquote className="article-time">
        发表于{new Date(createTime).toLocaleDateString()}
      </blockquote>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Article;
