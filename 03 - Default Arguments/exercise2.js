let counter = 1;

function printComment( comment, line = counter++ ) {
    console.log( line, comment );
}

printComment('comment 1');
printComment('comment 2');
printComment('comment 3');
printComment('comment 4');
printComment('comment 5');