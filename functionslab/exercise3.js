fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const finalResult = json.filter((todo) => !todo.completed
     ).map(todo=> ({userId : todo.userId, title :todo.title}))
 console.log(finalResult)
  })
  .catch(function(err) { 
    console.log(err);
  });
  