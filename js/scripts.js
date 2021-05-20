$(document).ready(function () {
    play();
});

var check = true;
var players = ['X', 'O'];
var p = '';
var boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var r = '';
var index = '';
var played = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var winner = '';
var duration = 100;

function play() {
    var game_interval = setInterval(function () {
        // checking if anyone is winner
        if (winner == players[0] || winner == players[1]) {
            $('.result').html('Winner ' + winner);
            clearInterval(game_interval)
        } else {
            // keep the player in p var
            p = player(boxes);

            // keep the random box in r var
            r = random(boxes);

            if (r === undefined) {
                $('.result').html('Game Tie');
                clearInterval(game_interval)
            } else {
                removeBoxId(boxes, r);

                // put player name in box
                $('#' + r).text(p);

                // create an array for the game result
                played[r] = p;

                // check the winner
                winnerCheck(played);
            }
        }
    }, duration);
}

function winnerCheck(played) {
    // 1st row 1 == 2 == 3
    if ((played[0] === played[1]) && (played[1] === played[2])) {
        winner = played[2];
    }

    // 2nd row
    if ((played[3] === played[4]) && (played[4] === played[5])) {
        winner = played[5];
    }

    // 3rd row
    if ((played[6] === played[7]) && (played[7] === played[8])) {
        winner = played[8];
    }

    // 1st column 0 == 3 == 6
    if ((played[0] === played[3]) && (played[3] === played[6])) {
        winner = played[6];
    }

    // 2st column
    if ((played[1] === played[4]) && (played[4] === played[7])) {
        winner = played[7];
    }

    // 3st column
    if ((played[2] === played[5]) && (played[5] === played[8])) {
        winner = played[8];
    }

    // top left to bottom right 0 == 4 == 8
    if ((played[0] === played[4]) && (played[4] === played[8])) {
        winner = played[8];
    }

    // bottom right to left top
    if ((played[2] === played[4]) && (played[4] === played[6])) {
        winner = played[6];
    }
}

// remove that box id which is already played
function removeBoxId(boxes, r) {
    index = boxes.indexOf(r);
    if (index > -1) {
        boxes.splice(index, 1);
    }
}

// pick random box
function random(boxes) {
    return boxes[Math.floor(Math.random() * boxes.length)];
}

// getting player X and O
function player() {
    if (check) {
        check = !check;
        return players[0];
    } else {
        check = !check;
        return players[1];
    }
}

// short function for console :)
function dd(val) {
    console.log(val);
}