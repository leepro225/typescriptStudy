{
    /**
     * Type Assertions 💩
     * 정말 확신할때가 아니면 가급적 사용하지 않는다.
     */

    function jsStrFunc(): any {
        return 'hello'; // 절대적으로 스트링을 반환하는 함수
    }
    const result = jsStrFunc(); // 이 함수를 실행하기 전까지는 result는 any 타입이라 문자열 API를 사용할 수 없음
    console.log((result as string).length); // 개발자가 타입을 확신할때 쓴다.
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // error

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    // numbers.push(2);  error  
    numbers!.push(2); // 개발자가 배열을 리턴한다고 확신하는 경우, numbers에 값이 있다고 확신하는 경우

    const button = document.querySelector('class');
    
    // button이 null일 수 있기 때문에 예외처리를 보통 해줌 
    // 근데, button이 있다고 정말 확신하는 경우에는 
    // const button = document.querySelector('class')!;
    // 이렇게 뒤에 느낌표를 붙여줌
    
    if (button) {
        button.nodeName
    }
}