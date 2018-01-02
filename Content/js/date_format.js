
function getDate(){
  const date = new Date();
   const year = date.getFullYear();
   const months = date.getMonth()+1;
   const day = date.getDay();
   return year+'_'+months+'_'+day;
}
console.log(getDate());
console.log(3);