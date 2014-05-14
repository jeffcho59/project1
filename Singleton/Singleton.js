var Guitar = (function () {

    var instance;

    function createGuitar() {
        var object = new Object("This is a guitar.");
        return object;
    }

    return {
        getGuitar: function () {
            if (!instance) {
                instance = createGuitar();
            }

            return instance;
        }
    };
})();


function run() {

    var instance1 = Guitar.getInstance();
    var instance2 = Guitar.getInstance();

    alert("Same instance? " + (instance1 === instance2));  
}