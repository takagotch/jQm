$("#slider").val(38).slider("refresh");

$("#check").attr("checked", true).checkboxradio("refresh");

var s = $("#select");
s[0].selectedIndex = 2;
s.selectmenu("refresh");

var markup = '<div ...>';
$(markup).appendTo("form").trigger("create");

$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.keepNative = '.native';
});


