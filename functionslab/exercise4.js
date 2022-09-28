fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
   const completedNum = json.reduce((total,todo) => {
    return todo.completed ? total+1 : total},0)
   
console.log(completedNum)
})
.catch(function(err) { 
  console.log(err);
});
