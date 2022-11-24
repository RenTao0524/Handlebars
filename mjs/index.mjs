// tempate1
// const template1 = '<p class="p1">{{firstname}} {{lastname}}</p>';
// const template1_info = {
//     firstname: "Yehuda",
//     lastname: "Katz",
// };
// const template1 =
//   '<p class="p1">{{#with person}}{{firstname}} {{lastname}}{{/with}}</p>';
// const template1_info = {
//   person: {
//     firstname: "Yehuda",
//     lastname: "Katz",
//   },
// };

const template1 =
  '<ul class="people_list">{{#each people}}<li>{{this}}</li>{{/each}}</ul>';
const template1_info = {
  people: ["Yehuda Katz", "Alan Johnson", "Charles Jolley"],
};

function createTemplate1() {
  var template = Handlebars.compile(template1);
  document.getElementById("template1").innerHTML = template(template1_info);
}

// template2
function createTempalte2() {
  const tempate = Handlebars.compile(
    "<p>{{person.firstname}} {{person.lastname}}</p>"
  );

  document.getElementById("template2").innerHTML = tempate({
    person: {
      firstname: "Yehuda",
      lastname: "Katz",
    },
  });
}
export default function createApp() {
  console.log("create app");
  createTemplate1();
  createTempalte2();
}
