{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // public : 아무것도 안붙이면 기본값 public, 외부에서 접근 가능함
    // private : 외부에서 접근 불가능한 상태로 만듦
    // protected : 외부에서는 접근 불가능, 이 클래스를 상속한 자식에서는 접근 가능
    class CoffeeMaker {
        private coffeeBeans: number = 0; // instance (object) level
        // 멤버 변수를 작성할때는 let, const , function 필요 없음
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        // 클래스에서 정해졌으며 변하지 않는 것은 static을 붙여준다.
        // 그럼 인스턴스를 생성할때마다 중복적으로 데이터를 생성하지 않아 메모리를 절약할 수 있다.

        private constructor(coffeeBeans: number) {
            // 인스턴스를 만들때 항상 호출되는 함수
            this.coffeeBeans = coffeeBeans;
        }

        // static 으로 해당 클래스의 인스턴스를 만들 수 있는 메서드를 제공한다는 것은
        // 외부에서 constructor에 접근을 막으려는 의도로 주로 사용함.
        // 따라서 constructor를 private 로 해주고, 이 메서드만 외부에서 접근가능하게 하기
        static makeMachine(coffeeBeas: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeas);
        }
        
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans;
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

    // 클래스 안의 생성자가 private 라서 아래 처럼 객체를 생성하지 못함.
    // const maker = new CoffeeMaker(21);
    // 이런 식으로 호출하도록 유도
    const maker = CoffeeMaker.makeMachine(34);
    
    // maker.coffeeBeans = -34 이처럼 외부에서 잘못된 값을 입력해 상태를 잘못 변경할 수 있음
    // private 를 붙이면, 접근하지 못함
    // 이렇게 하면, 외부에서 값을 바로 변경하는 게 아니라, 함수에서 한번 걸러서 변경할 수있음
    maker.fillCoffeeBeans(5); 

    

}