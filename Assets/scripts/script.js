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

listTopics();
selectTopic();