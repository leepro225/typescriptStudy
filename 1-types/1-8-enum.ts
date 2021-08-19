{
    /**
     * Eunm : 여러가지 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const THURTHDAY = 3;
    const FRIDAY = 4;
    const SATURDAY = 5;
    const SUNDAY = 6;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // Typescript
    enum Days {
        Monday, // = 0 값을 매기지 않으면 자동으로 할당됨.
        Tuesday, // = 1
        Wednesday ,
        Thurthday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(Days.Tuesday) // 1
    let day = Days.Saturday;
    day = 10;
    // let day: Days = Days.Saturday; Days 라는 타입이 추론되어 생략 가능함
    // eunm 으로 지정된 변수에 다른 타입으로 재할당이 가능하고, 컴파일 에러도 안뜸
    // 이렇게 enum은 타입을 보장해주지 않고, 상수를 묶어서 할당할 수 있는 다른 방법이 있음. (Union);
}