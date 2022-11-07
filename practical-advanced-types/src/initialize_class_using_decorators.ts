const fetch = require('node-fetch');

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function Get(url: string){
    function GetTodos(target: any, name: string){
        const hiddenInstanceKey = "_$$" + name + "$$_"
        const init = () => {
            return fetch('url')
                .then(response => response.json());
        };
    
        Object.defineProperty(target, name {
            get: function() {
                return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
            }
        });
    }
}

class TodoService {
    @Get("https://test.json")
    todos: Promise<ITodo[]>;
}

const todoService = new TodoService();
todoService.todos.then(todos => {
    console.log(todos);
})