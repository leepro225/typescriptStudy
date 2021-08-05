{
    // 타입을 지정한 함수는 안정적인 프로그래밍을 도와주고, 문서화함.

    // // JavaScript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2
    // }

    // // TypeScript ✨
    // function add(num1: number, num2: number): number {
    //     return num1 + num2
    // }

    // // JavaScript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript ✨ string 타입의 인자를 받아, 프로미스 중 숫자 타입을 리턴하는 구나
    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    //  Optional parameter : 전달하지 않으면, undefined
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter : 갯수와 상관없이 동일한 타입의 파라메터를 전달할때 사용
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 6));
}