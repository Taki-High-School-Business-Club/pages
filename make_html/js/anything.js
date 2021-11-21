$(document).ready(function(){
    //copyright
    var date = new Date();
    var y = date.getFullYear();
    if(y == 2021){
        $('.copyright').text('2021 coko-go');
    }else{
        $('.copyright').text(`2021-${y} coko-go`);
    }
  });