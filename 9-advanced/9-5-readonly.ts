{
    type ToDo = {
        title: string;
        description: string;
    };

    // function display(todo: ToDo) {
    //     //  이 함수는 todo를 보여주기만 하는 곳인데, 수정이 가능함.
    //     // todo.title = 'jaja'
    // }
    function display(todo: Readonly<ToDo>) {
        todo.title = 'jaja'; // error
    }
}