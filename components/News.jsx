import React from "react";

const News = () => {
  const news = [
    {
      title: "那些重機都是自以為高人一等，他性能再好，沒技術也只是個渣啦！",
      link: "https://youtu.be/GqNB_mZGoxY",
    },
    {
      title:
        "人生總會有些不如意，總會遇到瞎妹暈船，人生不瘋狂枉少年，或許這就是人生的課題吧！",
      link: "https://youtu.be/xMbOOc7iH1I",
    },
  ];

  return (
    <>
      <div className="news_box w-full flex flex-col">
        <div class="relative w-full flex py-5 items-center">
          <div class="shrink w-[2rem] border-t border-black"></div>
          <span class="whitespace-nowrap text-center news_box_title shrink px-8 py-0.5 text-white text-[1.25rem]">
            新聞專區
          </span>
          <div class="grow w-full border-t border-black"></div>
        </div>
        <div className="flex flex-col px-[2rem] px-5 pb-5">
          {news.map((news, index) => {
            return (
              <a href={news.link} key={index}>
                {news.title}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
