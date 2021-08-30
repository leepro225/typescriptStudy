{
    /**
     * js에서  this가 미친 이유
     * 다른 언어 에서 this는 생성된 클래스 인스턴스 자기 자신을 가리킨다.
     * 그런데 js에서는 호출한 문맥에 따라서 this가 동적으로 변경될 수 있다.
     */

    console.log(this); // window

    function simpleFunc() {
        console.log(this); // window
    }
    simpleFunc(); // === window.simpleFunc()와 같기 때문

    class Counter {
        count = 0;
        increase = function() {
            console.log(this); // conter
        }
        // increase = () => {
        //     console.log(this)
        // }
        // this에 접근하는 함수라면  arrow function을 사용하면 따로 일일히 binding을 해주지 않아도 된다.
    }
    const counter = new Counter();
    counter.increase();
    // caller에 할당하면서 this의 정보를 상실, let과 const 로 할당된 변수는 윈도우에 등록되지 않으므로 undefined
    const caller = counter.increase;
    // 정보를 상실하지 않으려면, binding 해줘야 한다. or arrow function을 사용해준다.
    // arrow function은 선언될 당시의 스코프의 this context를 유지한다. 
    // const caller = counter.increase.bind(counter);
    caller(); // undefined


    class Bob {}
    const bob = new Bob();
    bob.run = counter.increase;
    bob.run(); // Bob {run: f} , bob이 호출했으니까.
}