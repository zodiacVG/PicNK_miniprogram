
exports.main = async (event, context) => {
data:{
  a:[{
    id:1,
    count:1},{
    id:2,
    count:2
    }]
}
  var answer=0;
  for (var i=0;i<2;i++){
    answer=answer+this.data.a[i].count;
  }
  return{
    answer
  }
}