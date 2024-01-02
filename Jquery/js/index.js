// Jquery

// jquery selector

// $('#parag') // id or tag or class name with prefix

// console.log($('#parag')); jquery object
// console.log($('.harchi'));
// console.log($('h2'));

// console.log($('#parag')[0]);
// console.log($('.harchi')[0]);
// console.log($('h2')[0]);

// $(document).ready(function () {

// });

// jquery text except inputs

// $('#parag').text();
// console.log($('#parag').text());
// $('#parag').text('hello')

// jquery val inputs

// $('input').val();
// console.log($('input').val());
// $('input').val('hello')

// jquery event

// $('#parag').click(function () {
//     console.log('click');
// });
// $('#parag').on('click',function(){
//     console.log('click');
// });
// $('#parag').on({
//     'click': function () { console.log('click'); },
//     'mouseup': function () { console.log('mouseup'); }
// });
// $('.harchi').click(function () {
//     console.log('click');
// });
// $('h2').click(function () {
//     console.log('click');
// });

// jquery html() text()

// $('#parag').text();
// console.log($('#parag').text());
// $('#parag').text('hello');

// $('#parag').html();
// console.log($('#parag').html());
// $('#parag').html('hi <b>hello</b>');

// jquery effect

// $(document).click(function () {
//     $('div').hide();
// });
// $(document).click(function () {
//     $('div').show();
// });
// $(document).click(function () {
//     $('div').toggle();
// });
// $(document).click(function () {
//     $('div').fadeOut();
// });
// $(document).click(function () {
//     $('div').fadeIn();
// });
// $(document).click(function () {
//     $('div').fadeToggle();
// });
// $(document).click(function () {
//     $('div').fadeTo('slow', 0.5);
// });
// $(document).click(function () {
//     $('div').fadeTo('meddium', 0.5);
// });
// $(document).click(function () {
//     $('div').fadeTo('fast', 0.5,function(){});
// });
// });
// $(document).click(function () {
//     $('div').slideUp();
// });
// $(document).click(function () {
//     $('div').slideDown();
// });
// $(document).click(function () {
//     $('div').slideToggle();
// });
// $(document).click(function () {
//     $('div').animate({ marginLeft: '300px' }, 5000);
// });

// jquery css

// $('p').css({ backgroundColor: 'black', color: 'white' });

// jquery attribiute

// $('p').attr({ title: 'harchi' });

// jquery class

// $('p').on('click', function () {
//     // $('p').addClass('hello');
//     // $('p').removeClass('hello');
//     // $('p').toggleClass('hello');
//     // console.log($('p')[0].classList);
// });

// optimization DOM

// const $text = $('p');

//jquery add element

// $('div').prepend('<p>harchi</p>');
// $('div').append('<p>jooooon</p>');
// $('div').before('<p>harchi</p>');
// $('div').after('<p>joooon</p>');

// jquery remove element

// $('div').empty();
// $('div').remove();

// jquery dimension

// $('div').width();
// $('div').height();
// console.log($('div').width() ,$('div').height());
// $('div').innerWidth();
// $('div').innerHeight();
// console.log($('div').innerWidth() ,$('div').innerHeight());
// $('div').outerWidth();
// $('div').outerHeight();
// console.log($('div').outerWidth() ,$('div').outerHeight());
