function showBasic() {
    // 開啟新的子視窗，顯示特定文字
    var popupWindow = window.open("", "_blank", "width=400,height=300");
    popupWindow.document.write(
        "<title>我的基本資料</title><style>td{padding:10px;}</style><table border=\"1\" ><tr><td>身高</td><td>167</td></tr><tr><td>體重</td><td>60</td></tr><tr><td>學歷</td><td>淡江大學</td></tr></table>"
    );
}

function showimg() {
    // 開啟新的子視窗，顯示特定文字
    var popupWindow = window.open("", "_blank", "width=400,height=300");
    popupWindow.document.write(
        "<title>我的照片</title><img src=\"me&myson.jpg\" width=\"200px\" height=auto>"
    );
}