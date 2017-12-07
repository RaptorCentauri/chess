//GOAL A function that will take 3 parameters: A chess piece, a starting position, and an ending postion. It will return true if the move is valid.
//For now assume an empty board, no combat moves.
//letters go horizontal on the board,

//Move Logics=============================
//convert letter to charcode
function convertLetter(str) {
	return str.toLowerCase().charCodeAt(0) - 97 + 1
}

//convert string to chess notation array
function notation(str) {
	let position =[]
	let arr = str.split("");

	position.push(convertLetter(arr[0]));
	position.push(parseInt(arr[1]));

	return position;
}

//Pawn (need to add logic for first move)

let movePawn = (start, end) => (start[0]==end[0]) && (end[1]-start[1]==1)  ? true : false;

//Rook
let moveRook = (start, end) => (start[0]==end[0] && start[1]!=end[1]) || (start[0]!=end[0] && start[1]==end[1])  ? true : false;

//Knight

let moveKnight = (start, end) => ((Math.abs(start[0]-end[0]))==2 && (Math.abs(start[1]-end[1]))==1) || ((Math.abs(start[0]-end[0]))== 1 && (Math.abs(start[1]-end[1]))==2) ? true : false;

//Bishop
let moveBishop = (start, end) => (Math.abs(end[0]-start[0]) == Math.abs(end[1]-start[1]))  ? true : false;

//Queen
let moveQueen = (start,end) => (moveRook(start, end) || moveBishop(start, end))  ? true : false;

//King
let moveKing = (start, end) => (Math.abs(start[0]-end[0])<=1) && (Math.abs(start[1]-end[1])<=1)  ? true : false;

function validateMove(p, s, e){

	piece = p.toLowerCase();
	startPos = notation(s);
	endPos = notation(e);

	if((startPos[0]>8) || (startPos[1]> 8) || (endPos[0]>8) || (endPos[1]> 8)){
		console.log("Those are not valid coordinates.");
	}
	else{
		switch (piece) {
				case "pawn": console.log(movePawn(startPos, endPos));
				break;

				case "rook": console.log(moveRook(startPos, endPos));
				break;

				case "knight": console.log(moveKnight(startPos, endPos));
				break;

				case "bishop": console.log(moveBishop(startPos, endPos));
				break;

				case "queen": console.log(moveQueen(startPos, endPos));
				break;

				case "king": console.log(moveKing(startPos, endPos));
				break;
			}
		}
	}
//===========================================================

let piece = process.argv[2];
let startPos = process.argv[3];
let endPos = process.argv[4];

if((startPos.length >2) || (endPos.length >2)){
	console.log("Those are not valid coordinates.");
}
else {
	validateMove(piece, startPos, endPos);
}
