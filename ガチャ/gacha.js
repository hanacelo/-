
//召喚ボタンを押すと乱数での抽選が行われる
$("#button").on('click',function(){
    let gacha = Math.floor(Math.random()*20);
    console.log(gacha,"ランダムな数字")

    if(gacha = 0){
         result = 'あ';
     }else if(gacha = 1){
        result = 'い';
    }else if(gacha = 2){
        result = 'う';
    }else if(gacha = 3){
        result = 'え';
    }else if(gacha = 4){
        result = 'お';
    }else if(gacha = 5){
        result = 'か';
    }else if(gacha = 6){
        result = 'き';
    }else if(gacha = 7){
        result = 'く';
    }else if(gacha = 8){
        result = 'け';
    }else if(gacha = 9){
        result = 'こ';
    }else if(gacha = 10){
        result = 'さ';
    }else if(gacha = 11){
        result = 'し';
    }else if(gacha = 12){
        result = 'す';
    }else if(gacha = 13){
        result = 'せ'
    }else if(gacha = 14){
        result = 'そ';
    }else if(gacha = 15){
        result = 'た';
    }else if(gacha = 16){
        result = 'ち';
    }else if(gacha = 17){
        result = 'つ';
    }else if(gacha = 18){
        result = 'て';
    }else if(gacha = 19){
        result = 'と';
    }

    $("h2").html(result).val;
    console.log(result, "ガチャの結果");

});

//ガチャ画面に表示する

let result = [
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
    {"title":"山崎賢人","img":"images/kento_yamazaki.jpeg","rarelity":3},
];


const html =`
        <h2>${result}</h2>
    `;



