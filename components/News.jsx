import React from "react";

const News = () => {
  const news = [
    {
      title: "那些重機都是自以為高人一等，他性能再好，沒技術也只是個渣啦！",
      link: "https://youtu.be/GqNB_mZGoxY",
    },
    {
      title: "「就說沒有要抽gogoro 要講幾次？」- 羅傑",
      link: "https://www.youtube.com/watch?v=3UvgV71ZnfY&ab_channel=%E5%BB%A2%E7%89%87%E4%BA%82%E5%89%AA",
    },
    {
      title: "館長被Toyz公開臭「無法拒絕」 直播一舉動驚呆了網友",
      link: "https://youtu.be/iCx_oq5jtQ4?si=0ZdZr3xfeC0JJYBg",
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
          <div className="flex flex-col px-[2rem] pb-5">
            {news.map((news, index) => {
              return (
                <a href={news.link} key={index}>
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
