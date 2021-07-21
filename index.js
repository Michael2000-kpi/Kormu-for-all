var junk=prompt('Як тобі','Добре/Погано');
$('#butm').html(junk);
jQuery('body').append('<a href="https://www.youtube.com/watch?v=IZf7rgK59tw">Все мои волки делают АУФ</a>');
//var deus;
//deus=$('b').clone();
//$('body').append(deus);
//alert(Math.sqrt(2+2));
jQuery('input').on('keyup',function(){
    var number1 = jQuery('#val1').val();
    var number2  = jQuery('#val2').val();
    number1=parseInt(number1);
    number2=parseInt(number2);
    var NUMBER3= number1 + number2;
  $('#butm').html(NUMBER3);
});