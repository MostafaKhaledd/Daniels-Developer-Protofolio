let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  function All(){
    $grid.isotope({ filter: '*' })
}
  function Brand(){
  $grid.isotope({ filter: '.Brand' })
}
  function Design(){
  $grid.isotope({ filter: '.Design' })
}
  function Graphic(){
  $grid.isotope({ filter: '.Graphic' })
}
