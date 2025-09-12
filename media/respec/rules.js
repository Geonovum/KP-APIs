$(window).bind("load", function () {
  var functionalList = [];
  var technicalList = [];

  function rules() {
    $(".rule").each(function () {
      const id = this.id;
      const titel = $(this).find(".rulelab");
      titel.prepend('<a href="#' + id + '">' + id + "</a>: ");
      const type = $(this).data("type");

      if (type == "functional") {
        functionalList.push(titel.html());
      } else if (type == "technical") {
        technicalList.push(titel.html());
      }
    });

    compileList(functionalList, "#functionalList");
    compileList(technicalList, "#technicalList");
  }

  function compileList(list, id) {
    var target = $(id);

    $.each(list, function (index, val) {
      target.append("<li>" + val + "</li>");
    });
  }

  if ($(".rule").length > 0) {
    rules();
  } else {
    window.setTimeout(rules, 500);
  }
});
