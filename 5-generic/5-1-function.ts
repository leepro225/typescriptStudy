{
    // 숫자 타입만 널 체크가 가능한 재활용이 떨어지는 함수
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    // any 를 사용하면 , 타입을 잃어 버리게 됨
    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    
    // 제네릭을 이용하면 어떤 타입이던지 받을 수 있고, 이것을 쓸 때
    // 타입이 결정되기 때문에 타입을 보장받을 수 있다.
    // 이 함수는 어떤 인자를 전달 하든지, 그 인자가 null 이 아닐때만,
    // 똑같은 타입으로 리턴하는 함수이다.
    // 보통 짧게 T 로 씀
    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}