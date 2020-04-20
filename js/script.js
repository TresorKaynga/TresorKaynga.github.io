var micro = document.getElementById("micro");
var musics = document.getElementById("musics");
var langvn = document.getElementById("langvn");
var langfr = document.getElementById("langfr");
var langen = document.getElementById("langen");
var textfrvn = document.getElementById("textfrvn");
var pano = document.getElementById("panoramique");
var audio = document.getElementById("chanson");
var comment = document.getElementById("comment");
var credit = document.getElementById("credit");
var divcredit = document.getElementById("divcredit");
var topleft = document.getElementById("topleft");
var bottonmleft = document.getElementById("bottonmleft");

credit.addEventListener("click", function(){
    if(divcredit.style.display === "none"){
        topleft.style.display = "none";
        bottonmleft.style.display = "none";
        divcredit.style.display = "block";
    }
    else{
        divcredit.style.display = "none";
        topleft.style.display = "block";
        bottonmleft.style.display = "block";   
    }
});

micro.addEventListener("click", function(){
   
    if(micro.src === window.location.href + "/image/microff.png"){
        micro.src = window.location.href + "/image/micron.png";
        comment.play();
    }
    else{
        micro.src = window.location.href + "/image/microff.png";
        comment.pause();
    }
})
micro.addEventListener("mouseenter", function(){
    micro.style.cursor = "pointer";
})
musics.addEventListener("click", function(){
    if(musics.src === window.location.href + "/image/iconmusic.png"){
        musics.src = window.location.href + "/image/iconmusicoff.png";
        audio.pause();

    }
    else{
        musics.src = window.location.href + "/image/iconmusic.png";
        audio.play();
    }
})
musics.addEventListener("mouseenter", function(){
    musics.style.cursor = "pointer";
})

langvn.addEventListener("click", function(){
    textfrvn.innerText = "Nhà Hát Lớn Hà Nội do các kiến trúc sư Harlay và Broyer thiết kế, có sự đóng góp của Lagisquet và do Travary và Savelon phụ trách thi công. Công trình được khởi công ngày 7 tháng 6 năm 1901 và hoàn thành ngày 9 tháng 12 năm 1911. Do nền đất yếu, các kỹ sư phải đóng 35000 cọc tre già và đổ một khối bê tông khổng lồ dày 90 cm. Khoảng 12 000m3 vật liệu khác nhau và gần 600 tấn thép đã được sử dụng. Với diện tích 2 600m2, chiều dài 87m, chiều rộng 30m, và điểm cao nhất so với mặt đường lên tới 34m, đây là một công trình rất lớn so với quy mô của thành phố Hà Nội khi đó với dân số chưa đến 80 ngàn người.";    
})
langvn.addEventListener("mouseenter", function(){
    langvn.style.cursor = "pointer";
});
langfr.addEventListener("click", function(){
    textfrvn.innerText = "Considéré comme un patrimoine colonial, l'Opéra de Hanoi est également un ouvrage monumental représentatif de l'interculturalité entre le Vietnam et la France. Au cours de plus d’un siècle d’une histoire parsemée de hauts et de bas, l'Opéra de Hanoi est devenu un symbole de la capitale du Vietnam. Conscient de son importance culturelle, architecturale et historique, le Ministère de la Culture, des Sports et du Tourisme a décidé le 12/09/2011, le classement de la place de la Révolution d'Août et de l'Opéra de Hanoi à l'occasion de son 100e anniversaire. En 2015, la poste française a émis un timbre portant l'image de l'Opéra, symbole des relations culturelles entre les deux pays.";
});
langfr.addEventListener("mouseenter", function(){
    langfr.style.cursor = "pointer";
})

langen.addEventListener("click", function(){
    textfrvn.innerText = "Considered a colonial heritage, the Hanoi Opera is also a monumental work representative of the interculturality between Vietnam and France. Over more than a century of history dotted with ups and downs, the Hanoi Opera House has become a symbol of the capital of Vietnam. Aware of its cultural, architectural and historical importance, the Ministry of Culture, Sports and Tourism decided on 09/12/2011, the classification of the place of the August Revolution and of the Hanoi Opera at on the occasion of its 100th anniversary. In 2015, the French Post Office issued a stamp bearing the image of the Opera, a symbol of cultural relations between the two countries. ";
});
langen.addEventListener("mouseenter", function(){
    langen.style.cursor = "pointer";
});