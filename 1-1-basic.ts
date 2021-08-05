{
    /**
     * Javascript의 타입
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */

    // number
    const num: number = -4;

    // string
    const str: string = 'hello';

    // boolean
    const bool: boolean = false;

    // undefined : 값이 있는 지 없는 지 조차 알 수 없는 상태
    let name: undefined; // 💩
    let age: number | undefined; // undefined를 쓴다면 보통 이렇게 쓴다.
    age = undefined;
    age = 1;

    // null : 값이 없다는 뜻, 값이 있거나 없다는 문맥
    let person: null; // 💩
    let person2: string | null; // null을 쓴다면 보통 이렇게 쓴다.

    // unknown : 어떤 타입을 담을 수 있는 지 모르는 상태, 가능하면 쓰지 않는다. 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩 가능하면 쓰지 않는다.
    let anything: any = 0;
    anything = 'hello';

    // void : 아무것도 리턴하지 않는다. 
    function print() {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 💩 변수에는 사용하지 않는다. 어차피 리턴하는게 undefined 뿐이므로.

    // never 아무것도 리턴하지 않는 타입, 에러를 핸들링할때 사용. 
    function throwError(message: string): never {
        // 에러가 발생했을 때 에러 메세지를 서버에 보내고, 에러를 던지고 끝
        throw new Error(message);
        // 또는 무한 루프를 돌며 실행할 때
        while(true) {

        }
    }
    let neverEnding: never; // 💩
 
    // object : 원시 타입을 제외한 모든 객체 타입, 가능하면 구체적으로 명시해야하므로 사용하지 않는다. // 💩
    let obj: object;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'ellid'});
    acceptSomeObject({animal: 'cat'});
}