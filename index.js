function receivesAFunction(function1) {
    function1()
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
   return function() {}
}