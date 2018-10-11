// var thisWeekMoive = {
//     name: "教父",
//     comment: "最精彩的剧本，最真实的黑帮电影",
//     imagePath: "/images/jf.jpg"
// };
//this.weeklyMovieList.length -1

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
        autoplay: false,
        interval: 5000,
        duration: 1000,
        currentIndex: 0,
        count: 123,
        score: 60
    },
    f0: function (e) {
        this.setData({
          currentIndex: this.data.weeklyMovieList.length -1
        });
        console.log('f0:', e);
    },
    f1: function (e) {
      var movieId = event.currentTarget.dataset.movieId;
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + movieId
      });
      console.log('f1:', e);
    },
    onLoad: function (options) {
        this.setData({
            currentIndex: this.data.weeklyMovieList.length -1
        })
    },
    onShow: function (e) {
        console.log('onShow:',e)
    },
    onReady: function (e) {
        console.log('onReady:',e)
    },
    onHide: function (e) {
        console.log('onHide:',e)
    },
    onUnload: function (e) {
        console.log('onUnload:',e)
    }
})