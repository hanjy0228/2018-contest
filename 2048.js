var board=new Array();  
$(document).ready(function(){
    newGame();
})
function newGame(){
    prepareForMobile();   
    init(); 
    generateOneNumber();
    generateOneNumber();
}
function init(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            var gridCell=$("#grid-cell-"+i+"-"+j);
            gridCell.css({
                "top":getPosTop(i,j),
                "left":getPosLeft(i,j)
            });
        }
    }
    for(var i=0;i<4;i++){
        board[i]=new Array();
        for(var j=0;j<4;j++){
            board[i][j]=0;
        }
    } 
    updateBoardView();
}

function getPosTop(i,j){
    var top=20+i*(100+20);
    return top;
}
function getPosLeft(i,j){
    var left=20+j*(100+20);
    return left;
}

function updateBoardView(){
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            $("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>')
            var theNumberCell=$("#number-cell-"+i+"-"+j);
            if(board[i][j]==0){
                theNumberCell.css({
                    "width":"0px",
                    "height":"0px",
                    "top":getPosTop(i,j)+50,
                    "left":getPosLeft(i,j)+50
                });
            }else{
                theNumberCell.css({
                    "width":100+'px',
                    "height":100+'px,
                    "top":getPosTop(i,j),
                    "left":getPosLeft(i,j),
                    "background-color":getNumberBackgroundColor(board[i][j]),
                    "color":getNumberColor(board[i][j])
                });
                theNumberCell.text(board[i][j]);
            }
        }
        $('.number-cell').css({
            'line-height':cellSideLength+'px',
            'font-size':0.6*cellSideLength+'px'
        })
    }
}


function getNumberBackgroundColor(number){
    var color="black";
    switch(number){
        case 2:
            color='#eee4da';
            break;
        case 4:
            color="#ede0c8";
            break;
        case 8:
            color='#f2b179';
            break;
        case 16:
            color="#f59563";
            break;
        case 32:
            color='#f67c5f';
            break;
        case 64:
            color="#f65e3b";
            break;
        case 128:
            color='#edcf72';
            break;
        case 256:
            color="#edcc61";
            break;
        case 512:
            color='#9c0';
            break;
        case 1024:
            color="#33b5e5";
            break;
        case 2048:
            color='#09c';
            break;
    }
    return color;
}
function getNumberColor(number){
    if(number<=4){
        return "#776e50";
    }
    return "white";
}

    if(nospace(board)){
        return false;
    }

function nospace(board){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0){
                return false;
            }
        }
    }
    return true;
}

    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));

  
