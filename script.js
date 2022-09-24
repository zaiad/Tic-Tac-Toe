const home = document.querySelector('#home');
const play = document.querySelector('#play');
const name_player1 = document.querySelector('#name_player1');
const name_player2 = document.querySelector('#name_player2');
const error_names = document.querySelector('#error_names');
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');
const win1 = document.querySelector('#win1');
const win2 = document.querySelector('#win2');


let title = document.querySelector('.title');
let turn = 'x';
let squares = [];


localStorage.clear();
localStorage.setItem('name_player1', '');
localStorage.setItem('name_player2', '');
localStorage.setItem('win1', 0);
localStorage.setItem('win2', 0);
localStorage.setItem('winner', '');

home.style.display = 'flex';
play.style.display = 'none';

function namePlayers(){
    if ((name_player1.value != '') || (name_player2.value != '')) {
        localStorage.setItem('name_player1', name_player1.value);
        localStorage.setItem('name_player2', name_player2.value);

        home.style.display = 'none';
        play.style.display = 'flex';


        name1.innerHTML = localStorage.getItem('name_player1');
        name2.innerHTML = localStorage.getItem('name_player2');
        win1.innerHTML = localStorage.getItem('win1');
        win2.innerHTML = localStorage.getItem('win2');
    }else{
        error_names.innerHTML = 'Enter names of player 1 end player 2';
    }
}


function game(id){
    let element = document.getElementById(id);
    if ((turn == 'x') && (element.innerHTML == '') && (localStorage.getItem('winner') == '')) {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if ((turn == 'o') && (element.innerHTML == '') && (localStorage.getItem('winner') == '')) {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}

function end(num1, num2, num3, name_win){
    if(localStorage.getItem('winner') == ''){
        title.innerHTML = `${squares[num1]} winner`;
        document.getElementById('item' + num1).style.background = '#000';
        document.getElementById('item' + num2).style.background = '#000';
        document.getElementById('item' + num3).style.background = '#000';


        setTimeout(function(){
            for (let i = 1; i < 10; i++) {
                // squares[i] = document.getElementById('item' + i).innerHTML = '';
                squares[i] = document.getElementById('item' + i).style.background = '#f25';
            }
        }, 5000);
        
        localStorage.setItem('winner', name_win);
        generateWinner();
    }
}


function winner(){
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1,2,3,squares[1])
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        end(4,5,6,squares[4])
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != '') {
        end(7,8,9,squares[7])
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1,4,7,squares[1])
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '') {
        end(2,5,8,squares[2])
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '') {
        end(3,6,9,squares[3])
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '') {
        end(1,5,9,squares[1])
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != '') {
        end(3,5,7,squares[3])
    }
}


function generateWinner(){
    if(localStorage.getItem('winner') == 'X'){
        let a = localStorage.getItem('win1');
        localStorage.setItem('win1', ++a);
        win1.innerHTML = localStorage.getItem('win1');
    }
    else if(localStorage.getItem('winner') == 'O'){
        let b = localStorage.getItem('win2');
        localStorage.setItem('win2', ++b);
        win2.innerHTML = localStorage.getItem('win2');
    }
}


function ravenMatch(){
    localStorage.setItem('winner', '');
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML = '';
        // squares[i] = document.getElementById('item' + i).style.background = '#f25';
    }
}