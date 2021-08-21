{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
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
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    
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

    class CoffeeLatteMachine extends CoffeeMachine {
        constructor(beans: number, serialNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    // 다형성을 이용하여, 한 가지의 클래스나 인터페이스를 통해 다른 방식으로 구현한 클래스를 만들 수 있다. 
    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans: number) {
            super(beans)
        }

        makeCoffee(shots:number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }

    /**
     * 다형성이란, 하나의 인터페이스나 부모의 클래스를 상속한 자식 클래스들이
     * 인터페이스와 부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 더 다양성을 띄게 하는 것을 말한다.
     * 내부적으로 구현된 다양한 클래스들이 한 가지의 인터페이스를 구현하거나,
     * 동일한 부모클래스를 상속했을 때 동일한 함수를 어떤 클래스인지 구분하지 않고
     * 공통된 api 를 호출 할 수있다는 것이 큰 장점이다.
    */

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CoffeeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CoffeeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ];

    machines.forEach(machine => {
        console.log('--------------------');
        machine.makeCoffee(1);
    })

}