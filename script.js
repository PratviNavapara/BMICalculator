function resetForm() {
  document.getElementById("age").value = "";
  document.querySelector('input[name="gender"]:checked').value;
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
}
var isValid = true;
function validate(event) {
    event.preventDefault();
  let data = {};
  data.age = document.getElementById("age").value;
  data.gender = document.querySelector('input[name="gender"]:checked').value;
  data.height = document.getElementById("height").value;
  data.weight = document.getElementById("weight").value;
  if (data.age == "" || data.height == "" || data.weight == "") {
    isValid = false;
    alert("all fields are required!");
  } else {
    isValid = true;
  }
  let status = document.getElementById("status");
  let bmiStatus = document.getElementById("bmi");
  let bmi = [data.weight / data.height / data.height] * 10000;
  bmi = bmi.toFixed(2);
  document.getElementById("displayheight").innerHTML = data.height + "cm";
  document.getElementById("displaygender").innerHTML = data.gender;
  document.getElementById("displayage").innerHTML = data.age;
  document.getElementById("displayweight").innerHTML = data.weight + "kg";
  if (bmi < 18.5) {
    status.innerHTML = "UnderWeight";
    status.style.color = "#00008B";
    bmiStatus.innerHTML = bmi;
  } else if (bmi > 18.5 && bmi < 24.9) {
    status.innerHTML = "Healthy";
    status.style.color = "#008000";
    bmiStatus.innerHTML = bmi;
  } else if (bmi > 25 && bmi < 29.9) {
    status.innerHTML = "OverWeight";
    status.style.color = "#FDD017";
    bmiStatus.innerHTML = bmi;
  } else if (bmi > 30 && bmi < 34.9) {
    status.innerHTML = "Obese";
    status.style.color = "#FF6700";
    bmiStatus.innerHTML = bmi;
  } else {
    status.style.color = "FF0000";
    status.innerHTML = "Extremely Obese";
    bmiStatus.innerHTML = bmi;
  }
  return isValid;
}

$(document).ready(function () {
  $("#displaydata").hide();
  $("#btn1").click(function () {
    if (isValid == true) {
      $("#displaydata").show();
    } else {
      $("#displaydata").hide();
    }
  });
});
