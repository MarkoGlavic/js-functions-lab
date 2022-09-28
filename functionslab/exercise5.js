fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
   const uncompletedV2 = json.reduce((total,todo) => {
     todo.completed ? total : total.push({user: todo.userId,
    title:todo.title})
return total},[])
   
console.log(uncompletedV2)
})
.catch(function(err) { 
  console.log(err);
});
