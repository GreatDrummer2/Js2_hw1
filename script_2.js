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
    document.body.appendChild(colleft);
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
    document.body.appendChild(colright);
  }

  this.colrightNum = function(){
    for (var i = 1; i <=8;i++){
      var number2 = document.createElement('div'); //создание цифр
      number2.className = 'number2';
      number2.innerHTML = ''+i;
      colright.appendChild(number2);
    }
  }

  
}
var desk01 = new makeDesk(wraper);
desk01.desk();
desk01.tup();
desk01.tdown();
desk01.tabdown();
desk01.tabup();
desk01.sqr();
desk01.colleft();
desk01.colleftNum();
desk01.colright();
desk01.colrightNum();