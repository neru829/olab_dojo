function clock(){
    //Dateオブジェクトの初期化
    var now = new Date();

    //日付を取得
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var dayofweek = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

    //時間を取得
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    //常に２桁にする
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    //htmlのテキストを書き換え
    document.getElementById('date').innerText = year + "." + month + "." + date + " " + dayofweek[day];
    document.getElementById('clock').innerText = hour + ":" + min + ":" + sec;
}

//clock関数を1000msごとに実行
setInterval(clock, 1000);