{
    /**
     * Type Aliases 타입을 내가 정의할 수 있다.
     */

    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: String,
        age: number
    };
    const student: Student = {
        name: 'ellie',
        age: 2
    }

    /**
     * String Literal Types: 값 자체를 타입으로 정의할 수 있다.
     */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';

}