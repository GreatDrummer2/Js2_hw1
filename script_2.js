function makeDesk(node){
  this.desk = function(){
    desk = document.createElement('div'); // формируем шахматную доску
    desk.className = 'desk';
    node.appendChild(desk);
  }

  this.tup = function(){
    tup =document.createElement('div'); 
    tup.className = 'tup';
    node.appendChild(tup);
  }

  this.tdown = function(){
    tdown =document.createElement('div'); 
    tdown.className = 'tdown';
    node.appendChild(tdown);
  }

  this.tabdown = function(){
    for (var i = 0; i <8;i++){  //буквы снизу
    var tabdown = document.createElement('div');
    tabdown.className = 'tabdown';
    tabdown.innerHTML = String.fromCharCode(65+i);
    tdown.appendChild(tabdown);
    }
  }

  this.tabup = function(){
    for (var i = 0; i <8;i++){
    var tabup = document.createElement('div'); // буквы сверху
    tabup.className = 'tabup';
    tabup.innerHTML = String.fromCharCode(65+i);
    tup.appendChild(tabup);
    }
  }

  this.sqr = function(){
    for(var i= 1 ;i<= 8;i++){
      for(var j = 0;j<8;j++){
        if((i+j)%2){
          var black = document.createElement('div');
          black.className = 'black';
          black.id = String.fromCharCode(65+j)+i;
          desk.appendChild(black);
        }
        else{
          var white = document.createElement('div');
          white.className = 'white';
          white.id = String.fromCharCode(65+j)+i;
          desk.appendChild(white);
        }
      }
    }
  }

  this.colleft = function(){
    colleft = document.createElement('div'); //боковые цифры
    colleft.className ='colleft';
    node.appendChild(colleft);
  }

  this.colleftNum = function(){
    for (var i = 1; i <=8;i++){
      var number = document.createElement('div'); //создание цифр
      number.className = 'number';
      number.innerHTML = ''+i;
      colleft.appendChild(number);
    }
  }

  this.colright = function(){
    colright = document.createElement('div'); //боковые цифры
    colright.className ='colright';
    node.appendChild(colright);
  }

  this.colrightNum = function(){
    for (var i = 1; i <=8;i++){
      var number2 = document.createElement('div'); //создание цифр
      number2.className = 'number2';
      number2.innerHTML = ''+i;
      colright.appendChild(number2);
    }
  }

  this.eventClick = function () {
    desk.onclick = function(event){
    coord = document.getElementById('coordinates');
    var x= document.getElementsByClassName('active')[0];
    if(x != undefined)x.classList.remove('active');
    event.target.classList.add('active'); 
    coord.innerHTML = event.target.id;
    }
  }

  this.eventKeyBoard = function(){
    document.body.onkeydown = function(event){ 
      if(event.keyCode == 39){
        coord = document.getElementById('coordinates');
        elem = document.getElementsByClassName('active')[0].nextSibling;
        if(elem ==null){
          elem = desk.children[0];
        }
        x= document.getElementsByClassName('active')[0];
        if(x != undefined)x.classList.remove('active');
        elem.classList.add('active'); 
        coord.innerHTML = elem.id;
      }
      else if(event.keyCode == 37){
        coord = document.getElementById('coordinates');
        elem = document.getElementsByClassName('active')[0].previousSibling;
        if(elem ==null){
          elem = desk.children[63];
        }
        x= document.getElementsByClassName('active')[0];
        if(x != undefined)x.classList.remove('active');
        elem.classList.add('active'); 
        coord.innerHTML = elem.id;
      }
      else if(event.keyCode == 38){
        coord = document.getElementById('coordinates');
        arr=[].map.call(desk.children,function(el){return el});
        i=arr.indexOf(document.getElementsByClassName('active')[0]);
        desk.children[i].classList.remove('active');
        if(i<=7 && i!=0){
          desk.children[i+55].classList.add('active');
          a=i+55;
        }
        else if(i==0){
          desk.children[63].classList.add('active');
          a=63;
        }
        else {
          desk.children[i-8].classList.add('active');
          a=i-8;
        }
        coord.innerHTML = desk.children[a].id;
      }
      else if(event.keyCode == 40){
        coord = document.getElementById('coordinates');
        arr=[].map.call(desk.children,function(el){return el});
        i=arr.indexOf(document.getElementsByClassName('active')[0]);
        desk.children[i].classList.remove('active');
        if(i>=56 && i!=63){
          desk.children[i%8+1].classList.add('active');
          a=i%8+1;
        }
        else if(i==63){
          desk.children[0].classList.add('active');
          a=0;
        }
        else {
          desk.children[i+8].classList.add('active');
          a=i+8;
        }
        coord.innerHTML = desk.children[a].id;
      }
    }
  }

  this.exe = function(){
    this.desk();
    this.tup();
    this.tdown();
    this.tabdown();
    this.tabup();
    this.sqr();
    this.colleft();
    this.colleftNum();
    this.colright();
    this.colrightNum();
    this.eventClick();
    this.eventKeyBoard();
  }
}
var desk01 = new makeDesk(wraper);
desk01.exe();
