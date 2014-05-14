var Guitar = function(name) {
    this.name = name;
    this.say = function() {
        log.add("User: " + this.name);
    };
}

var DecoratedGuitar = function(guitar, wood, price) {
    this.guitar = guitar;
    this.name = user.name;
    this.wood = wood;
    this.price = price;
    this.say = function() {
        log.add("Decorated Guitar: " + this.name + ", " +
                   this.wood + ", " + this.price);
    };
}

var log = (function() {
    var log = "";
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {

    var guitar = new Guitar("Takamine");
    guitar.say();

    var decorated = new DecoratedGuitar(guitar, "Koa", 1500);
    decorated.say();

    log.show();
}