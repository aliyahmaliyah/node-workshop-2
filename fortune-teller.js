var fortune = require('./library/fortune.js');

process.argv.forEach(function(val, index, array){
 if (index === 2)
 for (var i = 0; i < Number(val); i++){
 console.log(fortune());
}});

process.argv.forEach(function(val,index,array){
  if (index === 2)
  console.log(val);
})