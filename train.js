function order(words){
  // ...
    if(words.length==0){
    
     return "";
    }
    //空格分割 字符串 然后进行字符串的排序 sort函数 然后 join 进行重新组合
    
    return words.split(" ").sort(function(a,b){
    return  a.match(/d/) - b.match(/d/)}).join(" ");
     
  
  
}