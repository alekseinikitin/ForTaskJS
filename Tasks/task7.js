//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML 
// и раставьте шахматы в соответсвующем порядке.

let arr =  [['♜', '■', '♝','♚',' ','■',' ','♜'] ,
['♟', '','■','♟','♗','♟','♘', '♙'],
['♞', '■', '','■',' ','♞',' ','■'] ,
['■', '♟','■','♘','♙',' ','■', '♙'],
['', '■', '','■',' ','■','♙','■'] ,
['■', '','■','♙','■',' ','■', ' '],
['♙', '■', '♙','■','♔','■',' ','■'] ,
['♕', '','■',' ','■',' ','♗', ' '],];




let table = document.querySelector('#table');

for (let subArr of arr) {
	let tr = document.createElement('tr');
	
	for (let elem of subArr) {
		let td = document.createElement('td');
		td.textContent = elem;
		tr.appendChild(td);
	}


	table.appendChild(tr);
}