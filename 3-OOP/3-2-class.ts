{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMaker {
        coffeeBeans: number = 0; // instance (object) level
        // 멤버 변수를 작성할때는 let, const , function 필요 없음
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        // 클래스에서 정해졌으며 변하지 않는 것은 static을 붙여준다.
        // 그럼 인스턴스를 생성할때마다 중복적으로 데이터를 생성하지 않아 메모리를 절약할 수 있다.

        constructor(coffeeBeans: number) {
            // 인스턴스를 만들때 항상 호출되는 함수
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeas: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeas);
        }
        
        makeCoffee(shots: number): CoffeeCup {
            // 클래스 안에 있는 친구에 접근할때는 this를 붙여준다.
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; // 사용한 만큼 빼준다.
        
            return {
                shots,
                hasMilk: false
            };
        }
    }

    const maker = new CoffeeMaker(21);
    console.log(maker);
    const maker2 = CoffeeMaker.makeMachine(30);
}