
  var my_div = newDiv = null;

  function addElement() {

    // Создаем новый элемент span
    // и добавляем в него немного контента

    var newDiv = document.createElement("span");
        newDiv.innerHTML = "&#127754";

    // Добавляем только что созданый элемент в дерево DOM

    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
  }

  for (var i = 0; i < 99; i++) {
    
   addElement();

  }