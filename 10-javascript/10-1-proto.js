{
    /**
     * 클래스를 이용해, 클래스를 선언하고 extends를 이용해 상속을 구현할 수 있는 것 처럼
     * 프로토타입을 이용해 이 상속을 구현할 수 있다. 
     * 클래스에서 속성과 함수들을 정의한 것 처럼, 반복적으로 쓸 수 있게 프로토타입을 이용해 속성과 함수들을 정의한다.
     * 프로토타입이란 자바스크립트에서 객체지향 프로그래밍 상속을 하기 위해 쓰이는 아이 이다. 그리고
     * 코드를 재사용하기 위해 만들어진 아이이다.
     */
    const x = {};
    const y = {};

    console.log(x);
    console.log(y);

    /**
     * 콘솔을 보면, {} ▶ __proto__: Object
     * 자바스크립트에서 모든 오브젝트는 이 오브젝트라는 프로토를 상속한다. (가지고 있다)
     * 따라서, x.toString 같은 함수를 이용할 수 있다.
     * x.__proto__ === y.__proto___ = true 
     * x와 y는 동일한 오브젝트의 프로토를 상속하고 있기 때문에 true
     */

    const array = [];
    console.log(array);

    /**
     * 콘솔을 보면, 
     * [] ▶ __proto__: Array
     *      ▶ length;
     *      ▶ sort: f
     *      ...
     *      ▶ __proto__: Object
     * 
     * array라는 변수의 오브젝트는 Array를 상속하고, Array는 Object를 상속한다.
     * 자바스크립트에 있는 모든 오브젝트들은 Object라는 프로토를 가지게 된다.
     * 어떤 종류의 오브젝트 든지 상관없이 무조건 toString를 사용할 수 있는 것도 이때문
     */

    function CoffeeMachine(beans) {
        this.beans = beans;
        // Instance member lever : 만들어지는 인스턴스 마다 각자 함수가 선언됨
        // this.makeCoffee = shots => {
        //     console.log('make coffee...');
        // };
    }

    // Prototype member level : makeCoffee 이 함수를 한번만 선언하고 싶다면?
    CoffeeMachine.prototype.makeCoffee = shots => {
        console.log('coffee...');
    }

    const machine1 = new CoffeeMachine(10);
    const machine2 = new CoffeeMachine(20);

    console.log(machine1);
    console.log(machine2);

    // LatteMachine 에서 CoffeeMachine을 상속하는 방법
    function LatteMachine(milk) {
        this.milk = milk;
    }
    // 프로타입을 이어주기
    LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

    const letteMachine = new LatteMachine(123);
    console.log(letteMachine);
    LatteMachine.makeCoffee();
}