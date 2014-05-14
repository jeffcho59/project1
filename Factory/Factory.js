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