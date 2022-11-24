const template1 = '<p class="p1">{{firstname}} {{lastname}}</p>';
const template1_info = {
  firstname: "Yehuda",
  lastname: "Katz",
};

function createTemplate1() {
  var template = Handlebars.compile(template1);
  document.getElementById("template1").innerHTML = template(template1_info);
}

export default function createApp() {
  console.log("create app");
  createTemplate1();
}
