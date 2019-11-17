import React, { SFC, useState, useEffect, useCallback } from "react";
import Article from "../Article";
import { IArticle, IResponse, IListResponse } from "../../types";
import "./index.css";
import { Button } from "reactstrap";
import axios from "axios";

// typedef的效果，方便使用
type ArticleResponse = IResponse<IListResponse<IArticle>>;

const Home: React.SFC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  let myArticle: IArticle = {
    title: "title",
    createTime: new Date().getTime(),
    content: "content1",
    id: 1
  };


  const loadmore = () => {
    axios
      .request<ArticleResponse>({
        url:
          "https://api.ihaohaoxuexi.com/learning_fe/light/invoke/pkuArticles",
        params: {
          page: page + 1
        }
      })
      // promise的结构，then后面表示前面的异步请求成功后接下来做的事情，还可以加一个catch表示前面失败后要做的事情。
      .then(res => {
        //  res是我们给响应的结果起的变量名。响应是ArticleResponse类型的，所以后面能根据这个类型找到对应的域。
        //  request的时候就决定了响应的类型。
        // 第一个data表示获取相应中的数据部分，第二个data是获得的响应(IResponse类型)中的一个域叫做data。
        const resData = res.data.data;
        console.log(res);
        // 这里的current是IListResponse的一个域
        setPage(resData.current);
        setArticles(articles.concat(resData.list));
        setIsEnd(resData.total === resData.current);
      });
  };

  //   在页面渲染完之后自动先加载一次
  //   由于每次加载完，页面的渲染都发生了变化，变化会再次触发useEffect，所以为了确保只有初始加载页面的时候触发一次
  //   要用这个之前做过笔记的小技巧，增加一个空参数，使它永远不会变化。
  useEffect(() => {
    loadmore();
  }, []);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        {articles.map((article, index) => (
          <Article index={index} data={article} />
        ))}

        {isEnd ? (
          <div className="loadmore">
            <Button color="danger" onClick={()=>(alert("no more"))}>
              暂无更多文章
            </Button>
          </div>
        ) : (
          <div className="loadmore">
            <Button color="primary" onClick={loadmore}>
              点击加载更多
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
