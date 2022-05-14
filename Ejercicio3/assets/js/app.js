var modal = document.getElementById("myModal");
var addButton = document.getElementById("AddButton");
var span = document.getElementsByClassName("close")[0];
var insertButton = document.getElementById("InsertButton");
var updateButton = document.getElementById("UpdateButton");

addButton.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

function GetCheckedRadioValue(name) {
  var radios = document.getElementsByName(name);
  var selectedOption = "";
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      selectedOption = radios[i].value;
      break;
    }
  }

  return selectedOption;
}

function GetCheckedBoxesValue(name) {
  var checkBoxes = document.getElementsByName(name);
  var checkBoxesChecked = "";

  for (var i = 0, length = checkBoxes.length; i < length; i++) {
    if (checkBoxes[i].checked) {
      checkBoxesChecked += checkBoxes[i].value + ",";
    }
  }

  checkBoxesChecked = checkBoxesChecked
    .trim()
    .substring(0, checkBoxesChecked.trim().length - 1);

  return checkBoxesChecked.length > 0 ? checkBoxesChecked : "";
}

function InsertarRegistro() {
  if (
    document.getElementById("IDTextBox").value !== null &&
    document.getElementById("IDTextBox").value !== undefined &&
    document.getElementById("IDTextBox").value.toString().length == 14
  ) {
    var icons = {
      Masculino: "fas fa-mars",
      Femenino: "fas fa-venus",
    };
    var a = document.getElementById("PersonTable").insertRow(1);
    var icon = a.insertCell(0);
    var b = a.insertCell(1);
    var c = a.insertCell(2);
    var d = a.insertCell(3);
    var e = a.insertCell(4);
    var f = a.insertCell(5);
    var g = a.insertCell(6);

    icon.innerHTML =
      '<i class="' + icons[GetCheckedRadioValue("Sexo")] + '"></i>';
    b.innerHTML = document.getElementById("IDTextBox").value;
    c.innerHTML = document.getElementById("FirstNameTextBox").value;
    d.innerHTML = document.getElementById("LastNameTextBox").value;
    e.innerHTML = GetCheckedRadioValue("Sexo");
    f.innerHTML = GetCheckedBoxesValue("Pasatiempos");

    var buttons =
      "<button name='EditButton' onclick='ShowModalForEdit(this)'>Eliminar</button>";
    buttons +=
      "<button name='DeleteButton' onclick='deleteRow(this)'>Editar</button>";
    g.innerHTML = buttons;

    modal.style.display = "none";
  }
}
