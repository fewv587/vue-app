var Crawler = require("crawler");
function getJDTypes(cb) {
  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        // $ is Cheerio by default a lean implementation of core jQuery designed
        // specifically for the server console.log($("title").text());
        const $allTypes = $('.JS_navCtn .cate_menu_lk');
        var result = []; // 处理结果
        $allTypes.each(function () {
          // console.log($(this).text());
          // console.log($(this).attr('href'));
          const obj = {};
          obj.title = $(this).text();
          obj.link = $(this).attr('href')
          result.push(obj);
        })
        cb(result);
      }
      done();
    }
  });
  // Queue just one URL, with default callback
  c.queue('http://www.jd.com');
}
module.exports = {
  getJDTypes
}; // 导出模块