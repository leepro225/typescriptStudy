{
    /**
     * Type Inference: 타입스크립트가 알아서 타입을 추론하는 것
     */

    let text: string = 'hello';
    // text = 1;  // error 위에서 문자열로 할당해서, 타입스크립트가 text의 타입을 스트링으로 추론

    function print(message = 'hello') {
        console.log(message)
    };
    print('hi');
    // print(2) // error 매개변수에서 기본값을 스트링으로 할당해, 
    // 타입스크립트가 message의 타입을 스트링으로 추론

    function add(x: number, y: number): number{
        return x + y;
    }
    const result = add(1, 2); // result의 타입은 number로 추론
}