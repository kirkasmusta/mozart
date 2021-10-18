/* $(document).ready(function(){
    $('.slider').slick({
        dots:true,
    }
    );
}); */


function triangleIso (stars) {

        for (var i = 0; i < stars; i++) {
        var res = '';
        for (var j = 0; j < (stars - (i * 2) - 1 ) / 2; j++) {
            res += '+';
        }
        for (var j = 0; j < (i + 1) * 2 - 1 < stars; j++) {

            if (j < stars) {
            res += '*';
        } }

        console.log(res)
    }
}

triangleIso(5);