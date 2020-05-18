// 云函数入口函数

exports.main = (event, context) => {
  let that = event;
  var answer=0;

 var enda=that.a[3].count;
 var endb=that.b[3].count;
  //活动完全匹配 1车 2饭 3跑 4学
  if(that.a[0].count==1){
    //车
    //目的地
    var endlengthone;
    var endlengthtwo;
    endlengthone = (enda[0]-endb[0])*100;
    endlengthtwo = (enda[1]-endb[1])*100;
    answer=answer+endlengthone*endlengthone+endlengthtwo*endlengthtwo;
 }

  //时间 单位秒
  var timea=that.a[1].count;
  var timeb=that.b[1].count;
  answer=answer+(timea-timeb)*(timea-timeb)/3400000;


  //出发地
  var starta=that.a[2].count;
  var startb=that.b[2].count;
  var startlengthone;
  var startlengthtwo;
    startlengthone = (starta[0]-startb[0])*100;
    startlengthtwo = (starta[1]-startb[1])*100;
    answer=answer+(startlengthone*startlengthone+startlengthtwo*startlengthtwo)*1.5;


  //性别 0女 1男 2不限
  //若两者目标性别都不限，则并不加
  //若有一个有要求时 有一方不符合预期则answer+1

  var awant=that.a[4].count;
  var asex=that.a[5].count;
  var bwant=that.b[4].count;
  var bsex=that.b[5].count;
  if(awant!=2||bwant!=2){
    if(awant==2){
      answer=answer+(bwant-asex)*(bwant-asex);
    }
    else if(bwant==2){
      answer=answer+(awant-bsex)*(awant-bsex);
    }
    else if(awant!=2&&bwant!=2){
      answer=answer+(bwant-asex)*(bwant-asex)+(awant-bsex)*(awant-bsex);
    }
  }


  return {
    answer
  }
}
