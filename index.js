 //加减乘除函数声明
 function getSum(a, b) {
    return a + b;
}

function getSub(a, b) {
    return a - b;
}

function getMul(a, b) {
    return a * b;
}

function getDivi(a, b) {
    return a / b;
}
function getNeg(a){
    return '-'+a;
}
function getPer(a){
    return a/100;
}
 //s1，s2 记录输入的两个数；s3记录运算符
 var s1, s2, s3;
 //变量初始化
 s1 = '';
 s2 = '';
 s3 = '';
 // 添加鼠标响应事件
 var show = document.getElementById('show');
 //清除记录事件，只需将s1,s2,s3还有显示文本框中的内容全部置为空即可
 document.getElementById('clear').onclick = function () {
     show.innerText = '0';
     s1 = '';
     s2 = '';
     s3 = '';
 }
 //s3为空时，将再次获取的值与s1原字符串进行拼接，并将字符串s1的结果显示在显示文本框中；反之，则将获取的值与字符串s2进行拼接，并将s2显示在文本框中。
 document.getElementById('btn-1').onclick = function () {
     if (s3 == '') {
         s1 += '1';
         show.innerText = s1;
     } else {
         s2 += '1';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-2').onclick = function () {
     if (s3 == '') {
         s1 += '2';
         show.innerText = s1;
     } else {
         s2 += '2';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-3').onclick = function () {
     if (s3 == '') {
         s1 += '3';
         show.innerText = s1;
     } else {
         s2 += '3';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-4').onclick = function () {
     if (s3 == '') {
         s1 += '4';
         show.innerText = s1;
     } else {
         s2 += '4';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-5').onclick = function () {
     if (s3 == '') {
         s1 += '5';
         show.innerText = s1;
     } else {
         s2 += '5';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-6').onclick = function () {
     if (s3 == '') {
         s1 += '6';
         show.innerText = s1;
     } else {
         s2 += '6';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-7').onclick = function () {
     if (s3 == '') {
         s1 += '7';
         show.innerText = s1;
     } else {
         s2 += '7';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-8').onclick = function () {
     if (s3 == '') {
         s1 += '8';
         show.innerText = s1;
     } else {
         s2 += '8';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-9').onclick = function () {
     if (s3 == '') {
         s1 += '9';
         show.innerText = s1;
     } else {
         s2 += '9';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-0').onclick = function () {
     if (s3 == '') {
         s1 += '0';
         show.innerText = s1;
     } else {
         s2 += '0';
         show.innerText = s2;
     }
 }
 document.getElementById('btn-point').onclick = function() {
     if (s3 == '') {
         if(s1 != ''&& s1.indexOf(".")==-1){
             s1 += '.';
             show.innerText = s1;
         }
     }
     else {
         if(s2 != ''&& s2.indexOf(".")==-1){
             s2 += '.';
             show.innerText = s2;
         }
     }
 }
 document.getElementById('btn-negation').onclick = function() {
    if (s3 == '') {
        if(s1 != ''&& s1.indexOf("-")==-1){
            s1="-"+s1;
            show.innerText =s1;
        }
       else 
        {
            s1=s1.split("-").join("");
            show.innerText =s1;
        }
    }
       else {
        if(s2 != ''&& s2.indexOf("-")==-1){
            s2="-"+s2;
            show.innerText = s2;
        }
       else
        {
            s2=s2.split("-").join("");
            show.innerText =s2;
        }
    }
}
document.getElementById('btn-percent').onclick = function () {
    if (s3 == '') {
        if(s1 != ''){
        s1=parseFloat(s1)/100;
        show.innerText =s1.toString();
    } else {
        s2=parseFloat(s1)/100;
        show.innerText =s2.toString();
    }
}
}
 document.getElementById('btn-sum').onclick = function () {
     s3 = "+";
 }
 document.getElementById('btn-subtract').onclick = function () {
     s3 = "-";
 }
 document.getElementById('btn-multiply').onclick = function () {
     s3 = "*";
 }
 document.getElementById('btn-divide').onclick = function () {
     s3 = "/";
 }
/* document.getElementById('btn-negation').onclick = function () {
    s3 = "+/-";
}*/
 //等号事件响应：当s3获取的值为加号，则调用求和函数；当获取的值为减号，则调用求差函数；若获取的值为星号，则调用乘积函数；否则调用求商函数；
 document.getElementById('btn-equal').onclick = function () {
     if (s3 == '+') {
         s1 = parseFloat(s1);
         s2 = parseFloat(s2);
         show.innerText = getSum(s1, s2);
         s1 = getSum(s1,s2).toString();
         s2 = '';
         s3 = '';
     } else if (s3 == '-') {
         s1 = parseFloat(s1);
         s2 = parseFloat(s2);
         show.innerText = getSub(s1, s2);
         s1 = getSub(s1,s2).toString();
         s2 = '';
         s3 = '';
     } else if (s3 == '*') {
         s1 = parseFloat(s1);
         s2 = parseFloat(s2);
         show.innerText = getMul(s1, s2);
         s1 = getMul(s1,s2).toString();
         s2 = '';
         s3 = '';
     } /*else if (s3 == '+/-') {
        //s1 = parseFloat(s1);
        //s2 = parseFloat(s2);
        show.innerText = getNeg(s1, s2);
        s1 = getNeg(s1);
        s2 = '';
        s3 = '';
    }*/ else {
         s1 = parseFloat(s1);
         s2 = parseFloat(s2);
         show.innerText = getDivi(s1, s2);
         s1 = getDivi(s1,s2).toString();
         s2 = '';
         s3 = '';
     }
 }