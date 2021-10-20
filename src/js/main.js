function triangleIso (stars) {

    for (var i = 0; i < (stars + 1) / 2; i++) {
        var res = '';

        for (var j = 0; j < (stars - (i * 2) - 1 ) / 2; j++) {
            res += ' ';
        }
        for (var j = 0; j < (i + 1) * 2 - 1 && j < stars; j++) {
            res += "*";
        }

        console.log(res)
    }

    for (var i = 0; i < (stars - 1) / 2; i++) {
        var res = '';

        for (var j = 0; j < i + 1; j++) {
            res += ' ';
        }
        for (var j = 0; j < stars - (i * 2) - 2; j++) {
            res += "*";
        }

        console.log(res)
    }
}

triangleIso(7);