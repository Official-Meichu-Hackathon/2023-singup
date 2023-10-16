import React from "react";

const News = () => {
  const news = [
    {
      title:
        "．《 超越理工壁壘，啟發創新思維，黑客力量與馬拉松的精彩碰撞！》— Podcast with 換日線",
      link: "https://open.firstory.me/story/clnoe3k7u01zz01urfm0sfxfn",
    },
    {
      title:
        "．2022 新竹 X 梅竹黑客松回歸實體活動順利落幕！梅竹大獎第一名：邪萬教教我",
      link: "https://agirls.aotter.net/post/61492",
    },
    {
      title: "． LINE 【梅竹黑客松 2022】活動分享",
      link: "https://engineering.linecorp.com/zh-hant/blog/meichu-hackathon-2022",
    },
    {
      title: "．2022「新竹X梅竹黑客松」競賽結果出爐！",
      link: "https://tw.news.yahoo.com/news/2022-%E6%96%B0%E7%AB%B9x%E6%A2%85%E7%AB%B9%E9%BB%91%E5%AE%A2%E6%9D%BE-%E7%AB%B6%E8%B3%BD%E7%B5%90%E6%9E%9C%E5%87%BA%E7%88%90-102750795.html?guccounter=1",
    },
    {
      title: "．2022 新竹 X 梅竹黑客松競爭夯 共450名好手角逐創意",
      link: "https://tw.news.yahoo.com/news/2022-%E6%96%B0%E7%AB%B9-x-%E6%A2%85%E7%AB%B9%E9%BB%91%E5%AE%A2%E6%9D%BE%E7%AB%B6%E7%88%AD%E5%A4%AF-%E5%85%B1450%E5%90%8D%E5%A5%BD%E6%89%8B%E8%A7%92%E9%80%90%E5%89%B5%E6%84%8F-072050298.html",
    },
    {
      title: "．2022 新竹X梅竹黑客松落幕　參賽者從日常激發靈感",
      link: "https://www.ettoday.net/news/20221121/2384809.htm",
    },
  ];

  return (
    <>
      <div className="pt-8">
        <div className="news_box mx-[5%] flex flex-col">
          <div className="relative w-full flex py-5 items-center">
            <div className="shrink w-[2rem] border-t border-black"></div>

            <h3 className="whitespace-nowrap text-center news_box_title shrink w-fit py-[0.3rem] md:py-[0.5rem] px-6 md:px-12 xl:px-16 text-white text-[1.25rem] md:text-[1.5rem] xl:text-[1.75rem]">
              新聞專區
            </h3>

            <div className="grow w-full border-t border-black"></div>
          </div>
          <div className="flex flex-col px-[2rem] pb-5 underline-offset-auto">
            {news.map((news, index) => {
              return (
                <a
                  href={news.link}
                  key={index}
                  className="underline underline-offset-4"
                >
                  {news.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
