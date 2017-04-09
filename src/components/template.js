//这个文件在项目中没有用到，只是作为一个模板文件
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
//api  获取的文件结构
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

//api 获取详情页
//http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161028201113900
const b={"pagecontent":"\u003carticle id=\"J_article\" class=\"J-article article\"\u003e\r\n\u003cdiv id=\"title\"\u003e\r\n\u003cdiv class=\"article-title\"\u003e\r\n\u003ch1 class=\"title\"\u003e“拼娃之战”不止北京海淀 国外学子如何课外补习\u003c/h1\u003e\r\n\u003c/div\u003e\r\n\u003cdiv class=\"article-src-time\"\u003e\r\n\u003cspan class=\"src\"\u003e2016-10-28 20:11\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;来源：中国网\u003c/span\u003e\r\n\u003c/div\u003e\r\n\u003c/div\u003e\r\n\u003cdiv id=\"content\" class=\"J-article-content article-content\"\u003e\r\n\u003cfigure class=\"section img\"\u003e\r\n\u003ca class=\"img-wrap\" style=\"padding-bottom: 66.67%;\" href=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1.jpeg\" data-size=\"600x400\"\u003e\u003cimg width=\"100%\" alt=\"\" src=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1.jpeg\" data-weight=\"600\" data-width=\"600\" data-height=\"400\"\u003e\u003c/a\u003e\r\n\u003c/figure\u003e\r\n\u003cp class=\"section txt\"\u003e2015年12月19日，浙江杭州，第十六届“中环杯”中小学数学竞赛杭州赛区初赛在青蓝小学举行，从早到晚，共有四场赛事。每场比赛开考前，青蓝小学门口都被学生和家长围得水泄不通。（董旭明/东方IC）\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e中国网新闻10月28日讯（记者戚易斌李智）近日，微信公众号上一篇题为《海淀拼娃之战》的文章被广泛传播，引起了北京家有学子的父母的强烈共鸣。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e孩子的上学问题在许多家庭是头等大事，面对激烈的考试竞争和升学压力，不少家长将目光投向了五花八门的补习机构，而学校择优录取的种种条件，让学生们也只能“心甘情愿”地走进补习“围城”。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e升学竞争掀补习热潮\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e《海淀拼娃之战》一文指出，自1998年推行小升初免试入学以来，北京市的小升初一直坚持公平、就近入学的原则。但由于随机派位的中学良莠不齐，以致在暗处以奥数成绩、竞赛证书为依据的选拔方式成了北京部分小升初家长的“救命稻草”。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e尽管“提前点招”、“把竞赛证书当入学依据”、“合办培训班”等行为已经被教育部明文禁止。但在小升初大派位的背景下，许多重点中学由于名额有限，只能用推优、特长生等条件选择优秀生源，甚至还有一批重点学校根本不参加大派位。于是，学子们为了逃离“随机派位”，“主宰”自己未来的命运，只能踏上日复一日报班、刷题的征途。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e也正因如此，在禁令下，很多培训机构和比赛考试不停改头换面，仍然“茁壮成长”。在以教育实力闻名的北京海淀区，这种现象尤其普遍，大街上各类教育培训机构随处可见，针对中小学生的教育培训是其中的“中坚力量”。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e外国学生也上课外补习班\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e实际上，补习班并不是中国教育的“专利”。为了能考上好学校，国外的学生也不缺少补习热情。亚洲开发银行2012年公布的一份“补课调查”显示，在亚洲很多国家和地区，课外补习非常盛行，家长每年为孩子请家教或上辅导班补习的开销达数百亿美元之巨。\u003c/p\u003e\r\n\u003cfigure class=\"section img\"\u003e\r\n\u003ca class=\"img-wrap\" style=\"padding-bottom: 62.00%;\" href=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_2.jpeg\" data-size=\"600x372\"\u003e\u003cimg width=\"100%\" alt=\"\" src=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_2.jpeg\" data-weight=\"600\" data-width=\"600\" data-height=\"372\"\u003e\u003c/a\u003e\r\n\u003c/figure\u003e\r\n\u003cp class=\"section txt\"\u003e上世纪70年代起，韩国的课外辅导班大量涌现，现在，韩国家长们对课外教育的关注甚至超过学校的常规教育。（视觉中国）\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e韩国\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e跟中国一样，韩国孩子的课余时间几乎也被补习班占满了。家长们一般在寒暑假开始前就早早替孩子报上了补习班。不同的是，在中国，常能看到家长带着孩子东奔西走去补课，但在韩国，由于补习班实在太多，家长们一般都能在居住社区或孩子上课的学校附近报上辅导班。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e韩国人形象地称，学生们放学后要么在学院（实施课外教育的机构名称），要么在去学院的路上。有分析称，接受课外补习的韩国学生达九成，有些知名学院尽管价格不菲，但想要报名甚至要排队。\u003c/p\u003e\r\n\u003cfigure class=\"section img\"\u003e\r\n\u003ca class=\"img-wrap\" style=\"padding-bottom: 62.50%;\" href=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_3.jpeg\" data-size=\"600x375\"\u003e\u003cimg width=\"100%\" alt=\"\" src=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_3.jpeg\" data-weight=\"600\" data-width=\"600\" data-height=\"375\"\u003e\u003c/a\u003e\r\n\u003c/figure\u003e\r\n\u003cp class=\"section txt\"\u003e日本的补习班学费昂贵，但家长们仍然乐此不疲地把孩子送去上课。日本文部省统计资料表明，在日本，一个孩子从小学到大学所需总教育费用约为1000万日元（约合人民币80万元），其中大部分是课外学习费用。（网页截图）\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e日本\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e日本的各类补习班遍布各个住宅区，几乎所有中小学生放学后都会背着书包去补课。补习班几乎每天都有课，上补习班的学生基本上是走出校门就进补习班的门。补习班一般按能力分班，每班人数不多，老师对每个学生都非常认真、和蔼。很多补习班还开设了自习室，如果学生提前到了，可以在这里学习，这点很受家长们欢迎。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e日本公立中小学实施宽松式教育，教学进程较慢，教授内容也较少，私立学校讲课则讲究高、深、难、快。因此，学生们要想更上一层楼，去重点私立中小学就读，就必须先进补习班上课。日本的重点公立大学竞争也十分激烈，家长都希望自己的孩子能在各种选拔考试中占优势，所以纷纷把孩子送进补习班。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e美国\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e在美国，到了中学和高中，由于课程变难和升学压力等，学生自己上补习课的想法就越来越强烈。这样的补习以自愿为主，老师和特别辅导员也会单独提出建议。比如某个学生在学习中出现“瓶颈”时，学校就会与学生和家长沟通，建议学生上补习课程。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e从高校录取角度来看，认为考生只会使用自家的语言，有取巧之嫌，所以学生要想考上好学校，还要正式地学习一门“真正”的外语，才有竞争能力。所以补习班里更多的学生是学习如西班牙语、法语、德语等重要国际语言，他们的态度是非常认真的。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e美国孩子上补习课的一个重要目的是提高数学、物理、化学等课程方面的理解能力，尤其是到高中阶段，有针对性地请有经验的老师和具有大学水平以上的学生进行专项辅导，是美国孩子补习的大头儿。美国没有高考，所以中学和高中的统考以及高中毕业能力考试非常重要。\u003c/p\u003e\r\n\u003cfigure class=\"section img\"\u003e\r\n\u003ca class=\"img-wrap\" style=\"padding-bottom: 66.67%;\" href=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_d2cdb5bae75aadc2ea6abdba5d33234f_4.jpeg\" data-size=\"600x400\"\u003e\u003cimg width=\"100%\" alt=\"\" src=\"https://03.imgmini.eastday.com/mobile/20161028/20161028201113_d2cdb5bae75aadc2ea6abdba5d33234f_4.jpeg\" data-weight=\"600\" data-width=\"600\" data-height=\"400\"\u003e\u003c/a\u003e\r\n\u003c/figure\u003e\r\n\u003cp class=\"section txt\"\u003e2016年7月3日，河南省郑州市，郑州兴华街一栋楼布满课外辅导班的广告，让人眼花缭乱。（余洪恩/东方IC）\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e塑造青少年健全人格 需要全方位发展\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e伴随青少年成长的各类补习班本身并非完全坏事，适当根据孩子的兴趣爱好选择质量高的补习班可以起到锦上添花的作用。但是如果过多地依靠补习班来拔苗助长，往往可能造就事倍功半的结果。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e根据澎湃新闻发布的“2016年高考状元问卷调查”，在高中阶段，有85.71%的“状元”表示从未参加过课外补习班，有77.14%的状元没参加过课外兴趣班。相比于通过外界获取知识，状元们似乎更热衷于通过独立探究来进行学习。\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e徐州市开发区中学教师、国家注册心理咨询师武建强在接受采访时建议，家长不要盲目跟风，而是要根据孩子的实际情况，征求孩子的意愿，如有必要在选择正规的教育机构补习，“放假了，就该让孩子放松放松，也要让孩子学会自主安排时间，既要完成作业又要留出玩的时间，这本身就是一种锻炼。”\u003c/p\u003e\r\n\u003cp class=\"section txt\"\u003e孩子的自主学习与安排时间能力是未来我国以及各国青少年的主要培养方向。在成长过程中，书本上的内容仅占人生知识的一部分，包括社交能力、实践能力、思考能力以及规划能力等全方位发展，才能塑造更加健全的人格。\u003c/p\u003e\r\n\r\n\u003c/div\u003e\r\n\u003c/article\u003e","Id":{"Timestamp":0,"Machine":0,"Pid":0,"Increment":0,"CreationTime":"\/Date(0)\/"},"title":"“拼娃之战”不止北京海淀 国外学子如何课外补习","date":"2016-10-28 20:11","author_name":"中国网","thumbnail_pic_s":"http://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1_mwpm_03200403.jpeg","thumbnail_pic_s02":"http://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1_mwpl_05500201.jpeg","thumbnail_pic_s03":"http://03.imgmini.eastday.com/mobile/20161028/20161028201113_8e40c73b69f47866065a159c5c599c86_1_mwpl_05500201.jpeg","url":"http://mini.eastday.com/mobile/161028201113900.html?qid=juheshuju","uniquekey":"161028201113900","type":"头条","realtype":"国内"}
