var factorial = function(num_to_calc) {

    if (num_to_calc < 0) {
        return null;
    } else if (num_to_calc === 0) {
        return 1;
    } else {
        return num_to_calc * factorial(num_to_calc - 1);

    }


};
