fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    .then((response) => response.json())
    .then((data) => tasks(data));
const ul = document.querySelector("ul")
    function tasks(data) {
        for (const element of data) {
            const li = document.createElement("li")
            li.append(element.title)
            ul.append(li)
            console.log(element)
            if (element.completed) {
                li.style.color="green"
                
            } else {
                li.style.color="red"
            }
            
        }
    }
   