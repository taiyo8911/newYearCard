result = ["大吉", "中吉", "小吉"]

function fortune() {
    var a = result[Math.floor(Math.random() * result.length)];
    alert(a);
}