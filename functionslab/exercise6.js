fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
   const end = json.reduce((total,todo) => {
    if(todo.completed){
        total[todo.userId]===undefined ? 
    (total [todo.userId]=1):(total[todo.userId]+=1)
     }   return total  }, {})
console.log(end)
})
.catch(function(err) { 
  console.log(err);
});