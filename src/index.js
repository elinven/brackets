module.exports = function check(str, bracketsConfig) {
  //console.log('Check '+str);
  let gstrlength=str.length;
  let gfldim=true;
  do {
    for (let i=0;i<bracketsConfig.length;i++) {
      //console.log('Find '+bracketsConfig[i][0]+bracketsConfig[i][1]);
      let fldim=true;
      let strlength=str.length;
      do {
        str=str.replace(bracketsConfig[i][0]+bracketsConfig[i][1],'');
        //console.log('New '+str);
        if ((str.length==strlength) || (str.length==0)) fldim=false;
        strlength=str.length;
      } while (fldim);
    }
    if ((str.length==gstrlength) || (str.length==0)) gfldim=false;
    gstrlength=str.length;
  } while (gfldim);
  //console.log(str=='');
  return (str=='');
}
