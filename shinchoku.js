function shinchoku(n){
    if(n == 0)
        return "進";
    else if(n == 1)
        return "捗";
    else if(n == 2)
        return "な";
    else if(n == 3)
        return "い";
    else if(n == 4)
        return "で";
    else if(n == 5)
        return "す";
    else
        return false;
}

function kanashimi(){
    var ct = 0;
    var word = [];
    var res = ['進', '捗', 'な', 'い', 'で', 'す'];
    var tsurai = setInterval(function(){
        var tmp = shinchoku(Math.floor(Math.random() * 6))
        document.write(tmp);
        word.push(tmp);
        ct++;
        if(word.length > 6)
            word.shift();
        if(word.join() == res.join()){
            document.write("<br />");
            document.write("かなしみの" + ct + "文字<br />");
            clearInterval(tsurai);
        }
    }, 30);
};
