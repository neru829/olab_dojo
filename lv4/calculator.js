//idから取得
const btn = document.getElementById('btn');
var result = document.getElementById('result');

//btnをクリックした時のイベントリスナー
btn.addEventListener('click', function() {
    //inputの内容を取得して数値に変換
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    //計算してHTMLの中身を変更
    result.innerText = num1 + num2;
    
    //空欄の時にアラート出したい。。。どっちも空欄の時も条件追加しないと？
    // if((num1 === '') && (num2 === '')){
    //     alert('数字を入力してください')
    // } else {
    // //計算してHTMLの中身を変更
    // result.innerText = num1 + num2;
    // }
}, false)
