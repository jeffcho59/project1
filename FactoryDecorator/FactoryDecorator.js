function GuitarNeck( options ) {
  this.color = options.color || 'brown';
  this.frets = options.frets || '15';
}
 
function GuitarBody( options ) {
  this.type = options.type || 'medium';
  this.material = options.material || 'pine';
}
 
function GuitarFactory() {}
GuitarFactory.prototype.createGuitar = function createGuitar( options ) {
  var parentClass = null;
  
  if( options.partType === 'neck' ) {
    parentClass = GuitarNeck;
  } else if( options.partType === 'body' ) {
    parentClass = GuitarBody;
  }
  
  if( parentClass === null ) {
    return false;
  }
  
  return new parentClass( options );
}
 
var myGuitarFactory = new GuitarFactory();
var neck = myGuitarFactory.createGuitar( {
  type : 'medium',
  material : 'pine',
  color : 'brown',
} );
 
console.log( medium instanceof GuitarBody );
 
console.log( medium );

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