//Recursion

const space1 = function(num1Spaces){
	if(num1Spaces === 0){
		return '';
	}
	return ' ' + space1(num1Spaces-1);
};
const character1 = function(num1Chars, char){
	if(num1Chars === 0){
		return '';
	}
	return char + character1(num1Chars-1, char);
};
const helper1 = function(spc1, str1, char){
	if(spc1<=0){
		return '';
	}
	console.log( space1(spc1) + character1(str1, char) );
	return helper1(spc1-1, str1+2, char);
};
const printDiamondUp = function(height1, char){
  if(height1%2 === 0){
      return;
  }

  if((height1-1)%2 === 0){
    
    if(((height1-1)/2)%2 === 1){
      if(((height1-1)/2)%2 === 1){
        helper1(height1-((height1+1)/2-1), 1, char);
        
      }
      else{helper1(height1-2, 1, char);}
    }
    else{helper1(height1-((height1+1)/2-1), 1, char);}
  }
};



const space2 = function(num2Spaces){
	if(num2Spaces === 0){
		return '';
	}
	return ' ' + space2(num2Spaces-1);
};
const character2 = function(num2Chars, char){
	if(num2Chars === 0){
		return '';
	}
	return char + character2(num2Chars-1, char);
};
const helper2 = function(spc2, str2, char){
	if(str2<=0){
		return '';
	}
	console.log( ' ' + space2(spc2) + character2(str2, char) );
	return helper2(spc2+1, str2-2, char);
};
const printDiamondDown = function(height2, char){
  if(height2%2 === 0){
    return;
  }else{helper2(1, height2-2, char);}
};


const printDiamond = function(height, char){
	printDiamondUp(height, char);

	printDiamondDown(height, char);
};
printDiamond(5, '@');


//Loop
const characters = function(height, char){
    let store1 = '';
    for(let i = 0; i <= height; i++){
        store1 = store1 + char;
    }
    return store1;
};

const spaces = function(height){
    let store2 = '';
    for(let i = 0; i <= height; i++){
        store2 = store2 + ' ';
    }
    return store2;
};

const printDiamond = function(height, char){
  if(height%2 === 0){  
      height = height + 1;
  }
  for(let i = 0; i <= height; i = i + 2){
	    console.log(spaces((height-i)/2) + characters(i, char));
  }

  for(let i = height - 2; i >= 1; i = i - 2){
	    console.log(spaces((height - i)/2) + characters(i - 1, char));
  }
};
printDiamond(5, '#');


//Tic-Tac Toe
const board = [
      	 ['1', '2', ''],
      	 ['4', '', '6'],
   	  	 ['7', '', '']
	    ];

Array.prototype.random = function () {
  	return this[Math.floor((Math.random()*this.length))];
};
  	a = board;
//  	console.log(a.random().random());
  
const rand = function(min, max){
  	const num = Math.floor(Math.random() * (max - min + 1)) + min;
};              

const checker = function(board){

  const free = [];
  	for(let i = 0; i <= 2; i++){
       for(let j = 0; j <=2; j++){
          if(board[i][j] === ''){
          	free.push([i,j]);
          }
       }
    }
  return free;
};
const arr = checker(board);
console.log(arr);

const nextMove = function(){
    const put = arr.random();
board[put[0]][put[1]]='x';
};

nextMove();


console.log(board)

