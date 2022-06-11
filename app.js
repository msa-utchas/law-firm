let btn1 = document.getElementById('t-1');
let btn2 = document.getElementById('t-2');
let btn3 = document.getElementById('t-3');
let btn4 = document.getElementById('t-4');
let btn5 = document.getElementById('t-5');
let team1 = document.getElementById('team-1');
let team2 = document.getElementById('team-2');
let team3 = document.getElementById('team-3');
let team4 = document.getElementById('team-4');
let team5 = document.getElementById('team-5');
team2.style.display = 'none';
team3.style.display = 'none';
team4.style.display = 'none';
team5.style.display = 'none';

let setButttonColor = (btn) => {
    btn.style.backgroundColor='white';
    btn.style.color='black';

}

btn1.addEventListener('click', () => {
    team1.style.display = 'grid';
    team2.style.display = 'none';
    team3.style.display = 'none';
    team4.style.display = 'none';
    team5.style.display = 'none';
    btn1.style.backgroundColor = 'blue';
    btn1.style.color = 'white';
    setButttonColor(btn2);
    setButttonColor(btn3);
    setButttonColor(btn4);
    setButttonColor(btn5);

});
btn2.addEventListener('click', () => {
    team1.style.display = 'none';
    team2.style.display = 'grid';
    team3.style.display = 'none';
    team4.style.display = 'none';
    team5.style.display = 'none';
    btn2.style.backgroundColor = 'blue';
    btn2.style.color = 'white';
    setButttonColor(btn1);
    setButttonColor(btn3);
    setButttonColor(btn4);
    setButttonColor(btn5);
});
btn3.addEventListener('click', () => {
    team1.style.display = 'none';
    team2.style.display = 'none';
    team3.style.display = 'grid';
    team4.style.display = 'none';
    team5.style.display = 'none';
    btn3.style.backgroundColor = 'blue';
    btn3.style.color = 'white';
    setButttonColor(btn1);
    setButttonColor(btn2);
    setButttonColor(btn4);
    setButttonColor(btn5);
});
btn4.addEventListener('click', () => {
    team1.style.display = 'none';
    team2.style.display = 'none';
    team3.style.display = 'none';
    team4.style.display = 'grid';
    team5.style.display = 'none';
    btn4.style.backgroundColor = 'blue';
    btn4.style.color = 'white';
    setButttonColor(btn1);
    setButttonColor(btn2);
    setButttonColor(btn3);
    
    setButttonColor(btn5);
});
btn5.addEventListener('click', () => {
    team1.style.display = 'none';
    team2.style.display = 'none';
    team3.style.display = 'none';
    team4.style.display = 'none';
    team5.style.display = 'grid';
    btn5.style.backgroundColor = 'blue';
    btn5.style.color = 'white';
    setButttonColor(btn1);
    setButttonColor(btn2);
    setButttonColor(btn3);
    setButttonColor(btn4);
});
