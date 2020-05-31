var xmlhttp;
function ajax(type , url , data , callback) {
    //第一步，创建一个请求对象(负责去服务端请求数据)

    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
//第二部，建立与服务器的连接(找到那个服务器去请求数据)
    xmlhttp.open(type,url);

//设置头信息，告诉服务器以表单的形式传递
    xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');

    //var par = "username="+ userName +"&pwd=" + pwd;

//第三步，向服务端发送请求
    xmlhttp.send(data);

//第四步，接受服务端返回的数据
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            callback(JSON.parse(xmlhttp.responseText).data);

        }
    }

}


