{
    /**
     * 어떤 특정한 기능만 자식 클래스에서 행동이 달라진다면, abstract  클래스를 만들어 볼 수 있다.
     */
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private coffeeBeans: number = 0; 
        private static BEANS_GRAMM_PER_SHOT: number = 7;

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // 클래스 앞에 abstract 를 붙이면, 이 클래스의 인스턴스 객체는 만들 수 없다.
        // abstract가 붙었다는 것은 이 클래스의 목적이 인스턴스를 만들어서 쓰기 위함 이 아니라
        // 무엇을 하는 클래스인지 정의해 놓고,
        // static makeMachine(coffeeBeas: number): CoffeeMachine {
        //     return new CoffeeMachine(coffeeBeas);
        // }
        
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
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    
        }
        private preheat(): void {
            console.log('heating up');
        }
        /**
         * 자식 클래스마다 달라질 수 있는 행동이 있다면, 그 행동에 함수 앞에 abstract 라는 키워드를 붙일 수있다.
         * 자식 클래스 마다 다르게 구현하려면, 여기에 접근 할 수 있어야 하기 때문에, protected 라는 키워드를 붙여준다.
         * 추상적인 메소드이기 때문에, 구현 사항은 작성하면 안된다. 구현부는 자식에서 써준다.
         */
        protected abstract extract(shots: number): CoffeeCup;
        // private extract(shots: number): CoffeeCup {
        //     console.log(`pulling ${shots} shots...`);
        //     return {
        //         shots,
        //         hasMilk: false
        //     }
        // }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CoffeeLatteMachine extends CoffeeMachine {
        constructor(beans: number, serialNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        // makeCoffee(shots: number): CoffeeCup {
        //     const coffee = super.makeCoffee(shots);
        //     this.steamMilk();
        //     return {
        //         ...coffee,
        //         hasMilk: true
        //     }
        // }

        // 부모의 것을 쓰는 거지만, super를 호출할 필요 없음.
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        // constructor(beans: number) {
        //     super(beans)
        // }

        // makeCoffee(shots:number): CoffeeCup {
        //     const coffee = super.makeCoffee(shots);
        //     return {
        //         ...coffee,
        //         hasSugar: true
        //     }
        // }
        // 부모의 것을 쓰는 거지만, super를 호출할 필요 없음.
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ];

    machines.forEach(machine => {
        console.log('--------------------');
        machine.makeCoffee(1);
    })

}