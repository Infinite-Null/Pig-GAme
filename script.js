'use strict';
let number, score = 0, count = 0, final1 = 0, final2 = 0;
const roll = document.querySelector('.btn--roll'), hold = document.querySelector('.btn--hold'), score_displayp1 = document.querySelector('#score--0'), score_displayp2 = document.querySelector('#score--1'), currentp1 = document.querySelector('#current--0'), currentp2 = document.querySelector('#current--1');
const dice = document.querySelector('#dek'), player1 = document.querySelector('.player--0'), player2 = document.querySelector('.player--1'), NewGame = document.querySelectorAll('.btn--new');
const enter = document.querySelector('.btn_enter'), text = document.querySelector('.Namein');
let x = 0, playerone, playertwo;
const number_genrate = function () {
    number = parseInt(Math.random() * 6);
    if (number == 0) {
        number = parseInt(Math.random() + 1 * 6)
    }
    return number;
}
const redo = function () {
    const nameinput = document.querySelector('.text_feild').value;
    if (!nameinput) {
        text.textContent = "Enter A Name Please.....";
    }
    else {
        if (x == 0) {
            text.textContent = 'Enter The Name Of Player 2';
            document.querySelector('#name--0').textContent = nameinput;
            playerone = nameinput;
            x++;
        }
        else {
            playertwo = nameinput;
            document.querySelector('#name--1').textContent = nameinput;
            document.querySelector('.Blur1').style.display = 'none';
            document.querySelector('.player_name').style.display = 'none';
            x = 0;
        }
    }
}
enter.addEventListener('click', redo);
const ani = function () {
    if (count % 2 == 0) {
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
    }
    else {
        player2.classList.add('player--active');
        player1.classList.remove('player--active');
    }
}
const ker = function () {
    score = 0, count = 0, final1 = 0, final2 = 0;
    currentp1.textContent = 0;
    currentp2.textContent = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    score_displayp1.textContent = 0;
    score_displayp2.textContent = 0;
    dice.src = `dice-6.png`;
    document.querySelector('.victory').style.display = 'none';
    document.querySelector('.Blur').style.display = 'none';
    text.textContent = 'Enter The Name Of Player 1';
    document.querySelector('.Blur1').style.display = 'inline-block';
    document.querySelector('.player_name').style.display = 'inline-block';
}
for (let i = 0; i < 2; i++) {
    NewGame[i].addEventListener('click', ker);
}
hold.addEventListener('click', function () {
    if (count % 2 == 0) {
        player2.classList.add('player--active');
        player1.classList.remove('player--active');
        currentp1.textContent = 0;
        final1 += score;
        score_displayp1.textContent = final1;
        score = 0;
    }
    else {
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        currentp2.textContent = 0;
        final2 += score;
        score_displayp2.textContent = final2;
        score = 0;
    }
    if (final1 >= 100) {
        document.querySelector('.won').textContent = `${playerone} Won....`;
        document.querySelector('.victory').style.display = 'inline-block';
        document.querySelector('.Blur').style.display = 'inline-block';

    }
    else if (final2 >= 100) {
        document.querySelector('.won').textContent = `${playertwo} Won....`;
        document.querySelector('.victory').style.display = 'inline-block';
        document.querySelector('.Blur').style.display = 'inline-block';
    }
    count++;
});
roll.addEventListener('click', function () {
    score += number_genrate();
    dice.src = `dice-${number}.png`;
    console.log(number);
    if (number == 1) {
        count++;
        currentp1.textContent = 0;
        currentp2.textContent = 0;
        score = 0;
        ani();
    }
    if (count % 2 == 0) {
        currentp1.textContent = score;
    }
    else {
        currentp2.textContent = score;
    }
});
