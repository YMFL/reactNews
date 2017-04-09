import React from 'react';
class AppComponent extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
AppComponent.defaultProps = {};

export default AppComponent;

//http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10;
const ar = [
  {
    "Id": {
      "Timestamp": 1477661823,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845518,
      "CreationTime": "\/Date(1477661823000)\/"
    },
    "title": "赵丽颖现身机场，疲惫过度助理忙搀扶，仍不忘为粉丝签名后离开",
    "date": "2016-10-28 20:21",
    "author_name": "海哥聊娱乐",
    "thumbnail_pic_s": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028202106247.html?qid=juheshuju",
    "uniquekey": "161028202106247",
    "type": "头条",
    "realtype": "娱乐"
  }, {
    "Id": {
      "Timestamp": 1477661293,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845516,
      "CreationTime": "\/Date(1477661293000)\/"
    },
    "title": "陈伟霆看秀交谈被嫌弃！旁边观众表情亮了，素质问题还是另有隐情",
    "date": "2016-10-28 20:17",
    "author_name": "八卦小姨妈",
    "thumbnail_pic_s": "http://08.imgmini.eastday.com/mobile/20161028/20161028201752_4ea221b1b3f703a546a0c88df8cc66c6_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://08.imgmini.eastday.com/mobile/20161028/20161028201752_4ea221b1b3f703a546a0c88df8cc66c6_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://08.imgmini.eastday.com/mobile/20161028/20161028201752_4ea221b1b3f703a546a0c88df8cc66c6_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028201752132.html?qid=juheshuju",
    "uniquekey": "161028201752132",
    "type": "头条",
    "realtype": "娱乐"
  }, {
    "Id": {
      "Timestamp": 1477660522,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845513,
      "CreationTime": "\/Date(1477660522000)\/"
    },
    "title": "“拼娃之战”不止北京海淀 国外学子如何课外补习",
    "date": "2016-10-28 20:11",
    "author_name": "中国网",
    "thumbnail_pic_s": "http://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028201113900.html?qid=juheshuju",
    "uniquekey": "161028201113900",
    "type": "头条",
    "realtype": "国内"
  }, {
    "Id": {
      "Timestamp": 1477661823,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845519,
      "CreationTime": "\/Date(1477661823000)\/"
    },
    "title": "农民子弟20年200元变140亿，如今怎负债66亿？谁接盘？",
    "date": "2016-10-28 20:04",
    "author_name": "无冕财经",
    "thumbnail_pic_s": "http://00.imgmini.eastday.com/mobile/20161028/20161028200451_6b276fcbb002e4cdc0ae63078d95ef58_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://00.imgmini.eastday.com/mobile/20161028/20161028200451_6b276fcbb002e4cdc0ae63078d95ef58_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://00.imgmini.eastday.com/mobile/20161028/20161028200451_6b276fcbb002e4cdc0ae63078d95ef58_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028200451646.html?qid=juheshuju",
    "uniquekey": "161028200451646",
    "type": "头条",
    "realtype": "财经"
  }, {
    "Id": {
      "Timestamp": 1477658620,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845491,
      "CreationTime": "\/Date(1477658620000)\/"
    },
    "title": "“容嬷嬷”坐地铁出行 一身休闲装扮接地气",
    "date": "2016-10-28 19:59",
    "author_name": "腾讯娱乐",
    "thumbnail_pic_s": "http://07.imgmini.eastday.com/mobile/20161028/20161028195904_8a3fecc17f4e7e2118c1b2bb7006a8ca_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://07.imgmini.eastday.com/mobile/20161028/20161028195904_8a3fecc17f4e7e2118c1b2bb7006a8ca_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://07.imgmini.eastday.com/mobile/20161028/20161028195904_8a3fecc17f4e7e2118c1b2bb7006a8ca_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028195904898.html?qid=juheshuju",
    "uniquekey": "161028195904898",
    "type": "头条",
    "realtype": "娱乐"
  }, {
    "Id": {
      "Timestamp": 1477659006,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845511,
      "CreationTime": "\/Date(1477659006000)\/"
    },
    "title": "美国为何如此忌惮中国：美将军终于说了大实话！",
    "date": "2016-10-28 19:52",
    "author_name": "中国搜索",
    "thumbnail_pic_s": "http://05.imgmini.eastday.com/mobile/20161028/20161028195229_65f99d46ddacb2bef76ec1d28b5740ba_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://05.imgmini.eastday.com/mobile/20161028/20161028195229_65f99d46ddacb2bef76ec1d28b5740ba_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://05.imgmini.eastday.com/mobile/20161028/20161028195229_65f99d46ddacb2bef76ec1d28b5740ba_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028195229231.html?qid=juheshuju",
    "uniquekey": "161028195229231",
    "type": "头条",
    "realtype": "军事"
  }, {
    "Id": {
      "Timestamp": 1477658620,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845488,
      "CreationTime": "\/Date(1477658620000)\/"
    },
    "title": "外交部就达赖赴中印边界活动、朝核试验等答问",
    "date": "2016-10-28 19:23",
    "author_name": "外交部网站",
    "thumbnail_pic_s": "http://09.imgmini.eastday.com/mobile/20161028/20161028192307_b455603ae0f05556b694c7a60d9b08fa_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://09.imgmini.eastday.com/mobile/20161028/20161028192307_b455603ae0f05556b694c7a60d9b08fa_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://09.imgmini.eastday.com/mobile/20161028/20161028192307_b455603ae0f05556b694c7a60d9b08fa_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028192307417.html?qid=juheshuju",
    "uniquekey": "161028192307417",
    "type": "头条",
    "realtype": "国内"
  }, {
    "Id": {
      "Timestamp": 1477658620,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845490,
      "CreationTime": "\/Date(1477658620000)\/"
    },
    "title": "杜特尔特：做事讲求时机 我不会让人看透心思",
    "date": "2016-10-28 19:23",
    "author_name": "环球网",
    "thumbnail_pic_s": "http://01.imgmini.eastday.com/mobile/20161028/20161028192308_30bd999045818b0489d2afc1873c6849_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://01.imgmini.eastday.com/mobile/20161028/20161028192308_30bd999045818b0489d2afc1873c6849_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://01.imgmini.eastday.com/mobile/20161028/20161028192308_30bd999045818b0489d2afc1873c6849_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028192308012.html?qid=juheshuju",
    "uniquekey": "161028192308012",
    "type": "头条",
    "realtype": "国际"
  }, {
    "Id": {
      "Timestamp": 1477658620,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845504,
      "CreationTime": "\/Date(1477658620000)\/"
    },
    "title": "六中全会为反腐制度建设“开药方”",
    "date": "2016-10-28 19:20",
    "author_name": "海外网",
    "thumbnail_pic_s": "http://01.imgmini.eastday.com/mobile/20161028/20161028192044_5a3b645e8e622d59128f587f8703c958_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://01.imgmini.eastday.com/mobile/20161028/20161028192044_5a3b645e8e622d59128f587f8703c958_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://01.imgmini.eastday.com/mobile/20161028/20161028192044_5a3b645e8e622d59128f587f8703c958_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028192044435.html?qid=juheshuju",
    "uniquekey": "161028192044435",
    "type": "头条",
    "realtype": "国内"
  }, {
    "Id": {
      "Timestamp": 1477658620,
      "Machine": 6586036,
      "Pid": 4780,
      "Increment": 10845501,
      "CreationTime": "\/Date(1477658620000)\/"
    },
    "title": "美国东遏中国西堵俄罗斯：难道这就是终极对决了？错！",
    "date": "2016-10-28 19:15",
    "author_name": "第一军情",
    "thumbnail_pic_s": "http://06.imgmini.eastday.com/mobile/20161028/20161028191513_1b4a617d660ab48e89919315cf444131_1_mwpm_03200403.jpeg",
    "thumbnail_pic_s02": "http://06.imgmini.eastday.com/mobile/20161028/20161028191513_1b4a617d660ab48e89919315cf444131_1_mwpl_05500201.jpeg",
    "thumbnail_pic_s03": "http://06.imgmini.eastday.com/mobile/20161028/20161028191513_1b4a617d660ab48e89919315cf444131_1_mwpl_05500201.jpeg",
    "url": "http://mini.eastday.com/mobile/161028191513978.html?qid=juheshuju",
    "uniquekey": "161028191513978",
    "type": "头条",
    "realtype": "军事"
  }]
