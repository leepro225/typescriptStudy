{
    // Array을 정의하는 두 가지 방법
    const fruits: string[] = ['사과', '바나나'];
    const scores: Array<number> = [1, 2];

    function printArray(fruits: readonly string[]) {} 
    // readonly는 이 전달인자는 함수안에서 절대 변하면 안된다는 것을 명시
    // 첫번째 방법에서만 readonly를 사용가능하기 때문에, 자주 쓰임.

    // Tuple : 길이와 타입이 정해진 배열의 타입
    // 자주 사용하지 않음. 대신 --> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] // 'name' // 인덱스를 이용해 데이터에 접근하는 것은 매우 가독성이 떨어지기 때문
    const [name, age] = student; // tuple 을 오브젝트 디스트럭쳐링으로 받음 ex) 리액트 useState

}