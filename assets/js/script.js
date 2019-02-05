$(function(){
  $('.color').mouseover(function(){
// on crée une variable qui récupère l'id de la div (avec .attr('id'))
    var color = $(this).attr('id');
    $('#text').css('color',color);
})
    .mouseout(function(){
    $('#text').css('color', 'black');
    });
});


/* ma 1ere version mais pas de retour en noir
$(function(){
   $('#green').mouseenter(function(){
   $('#text').css({color: 'green'});;
   $('#red').mouseenter(function(){
   $('#text').css({color: 'red'});;
   $('#blue').mouseenter(function(){
   $('#text').css({color: 'blue'});;
});
});
});
});
*/
