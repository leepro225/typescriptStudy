{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private coffeeBeans: number = 0; 
        private static BEANS_GRAMM_PER_SHOT: number = 7;

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeas: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeas);
        }
        
        clean() {
            console.log('cleaning the machine...');
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans;
        }
        
        private grindBeans(shots:number) {
            console.log(`grinding beans for ${shots}`);
             if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT; // 사용한 만큼 빼준다.
    
        }
        private preheat(): void {
            console.log('heating up');
        }
        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // 상속을 잘 이용하면, 부모함수의 것을 그대로 공통적인 기능은 재사용을 하면서
    // 자식 클래스에서만 조금 더 자식 클래스의 특화된 기능을 할 수 있다.
    class CoffeeLatteMachine extends CoffeeMachine {
        // 자식 클래스에서 전달인자를 사용하려면, 생성자를 만들고
        // 부모의 생성자를 super를 이용해 부모에게 전달해준다.
        constructor(beans: number, serialNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        // 자식 클래스에서 부모 클래스에서 구현된 것을 오버 라이팅한다.
        makeCoffee(shots: number): CoffeeCup {
            // 부모의 함수를 자식에서 이용하려면 , super 라는 키워드를 이용해 쓸 수 있다.
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

   const machine = new CoffeeMachine(23);
    const latteMachine = new CoffeeLatteMachine(23);
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
}