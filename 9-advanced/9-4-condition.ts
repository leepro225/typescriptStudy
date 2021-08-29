{
    // conditional type // 조건적으로 타입을 결정할 수 있는 타입
    type Check<T> = T extends string? boolean : number;
    // T 가 string 을 상속한다면, boolean 을 아니면 number 를 상속하겠다.
    type Type = Check<string>; // boolean



    type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

    type T0 = TypeName<string>; // string
    type T1 = TypeName<'a'>; // string
    type T2 = TypeName<() => void>; // function
}