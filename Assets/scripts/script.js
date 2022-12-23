<<<<<<< HEAD
var topic = "HTML";
/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/

var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}
=======
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() 
{
 for (var x = 0; x < topics.length; x++) 
 {
   console.log(topics[x]);
 }
}

function selectTopic()
{
  if (topics[0])
  {
    console.log("Let's study HTML");
  }

  else if (topics === "CSS")
  {
    console.log("Let's study CSS");
  }

  else if(topics === "JS" || "Javascript")
  {
    console.log("Let's study JavaScript");
  }

  else 
  {
    console.log("Please try again!");
  }
}

console.log("Here are the topics we have learned through Prework:");
listTopics();

console.log("Which topic should we study first ?");
selectTopic();
>>>>>>> f0b44a47588d2ebcc0849c9ab4c6958903dce2f0
