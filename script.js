$(document).ready(function () {
  $("#button1").click(function () {
    $("p").hide();
  });
});

$(document).ready(function () {
  $("#button2").click(function () {
    $("#test").hide();
  });
});

$(document).ready(function () {
  $("#button3").click(function () {
    $(".test").hide();
  });
});

$(document).ready(function () {
  $(".clickgone").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $(".click2gone").dblclick(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $("#p1").mouseenter(function () {
    $(this).css("background-color", "#cccccc");
  });
});

$(document).ready(function () {
  $("#p2").mouseleave(function () {
    $(this).css("background-color", "#f8a622");
  });
});

$(document).ready(function () {
  $("#showhide").click(function () {
    $(".showhidetext").toggle(1000);
  });
});

$(document).ready(function () {
  $("#fadeto").click(function () {
    $("#divfade1").fadeTo("slow", 0.15);
    $("#divfade2").fadeTo("slow", 0.4);
    $("#divfade3").fadeTo("slow", 0.7);
  });
});

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});
