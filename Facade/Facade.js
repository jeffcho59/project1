function addGuitar( color, wood, price ) {
  
  if( window.addGuitarListener ) {
    element.addGuitarListener( wood, price, false );
  } else if( document.attachGuitar ) {
    element.attachGuitar( 'on' + wood, price );
  } else {
    element[ 'on' + wood ] = price;
  }
  
}