$('#button-enable').button('enable');
$('#button-disable').button('disable');

$('#button-enable').removeClass('ui-disabled');
$('#button-disable').addClass('ui-disabled');

$('div').live('pagecreate', function(e){
  $('a.home').buttonMarkup({
    icon: 'home',
    iconpos: 'notext',
    inline: true,
  });
});


