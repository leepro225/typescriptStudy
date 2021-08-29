{
    // 인덱스 타입을 이용하면, 다른 타입에 있는 키에 접근해서 그 키의 value의 타입을 그대로 다시 선언할 수 있다.

    const obj = {
        name: 'ellie'
    }
    // 접근할 수 있는 방법은?
    obj.name; // ellie
    obj['name']; // ellie

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name']; // string
    const text: Name = 'hi';

    type Gender = Animal['gender']; // 'male' | 'female'

    // 모든 key 값을 문자열 유니온으로 할당한다.
    type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    }
    const person: Person = {
        name: 'ellie',
        gender: 'male'
    }
}