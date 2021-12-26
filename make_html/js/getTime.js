class getTime{
    var outDate;
    constructor(){
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        var date = nowDate.getDate();
        var hours = nowDate.getHours();
        var minutes = nowDate.getMinutes();
        var seconds = nowDate.getSeconds();
        var outDate = `<${year}-${month}-${date} ${hours}:${minutes}:${seconds} UTC+9:00>`;
    }
    getTime(outDate){
        return outDate;
    }
}