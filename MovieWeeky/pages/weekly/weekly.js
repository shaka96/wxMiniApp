// var thisWeekMoive = {
//     name: "教父",
//     comment: "最精彩的剧本，最真实的黑帮电影",
//     imagePath: "/images/jf.jpg"
// };

Page({
    data: {
      weeklyMovieList: [
        {
          name: "教父",
          comment: "最精彩的剧本，最真实的黑帮电影",
          imagePath: "/images/jf.jpg",
          isHighlyRecommended: true,
          id: 1291841
        },
        {
          name: "这个杀手不太冷",
          comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
          imagePath: "/images/leon.jpg",
          isHighlyRecommended: false,
          id: 1295644
        },
        {
          name: "泰坦尼克",
          comment: "失去的才是永恒的",
          imagePath: "/images/titanic.jpg",
          isHighlyRecommended: false,
          id:1292722
        },
      ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        count: 123,
        score: 60
    }
})