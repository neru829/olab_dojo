//idを取得
const btn = document.getElementById('btn');
const hello = document.getElementById('hello');
//btnをクリックした時のイベントリスナー
btn.addEventListener('click', function() {
    hello.innerText = "Hello,JS!";
}, false)
//innerHTMLだとHTMLの中にHTML入ってるみたいな扱いになっちゃう
