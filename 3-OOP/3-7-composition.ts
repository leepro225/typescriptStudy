{
    /**
     * 불필요한 상속보다 컴포지션을 선호하라!
     * 컴포지션이란 레고 부품처럼 구성품을 의미
     * 필요한 기능을 가져와서 외부에서 주입 받음으로써 컴포지션을 이용해서 필요한 기능을 재사용해
     * 코드의 재사용을 굉장히 높여준다.
     */
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

    class CheapMilksteamer {
        private steamMilk() : void {
            console.log('steaming something...');
        }
        makeMilk(cup: CoffeeCup) : CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    class AutomaticSugarMixer {
        private getSugar() {
            console.log('get suagr from jar...');
            return true
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }
    class CoffeeLatteMachine extends CoffeeMachine {
        // dependency injection : 외부에서 필요한 것들을 주입받아 오는 것
        constructor(
            beans: number,
            serialNumber: string, 
            private milkFrother: CheapMilksteamer
            ) {
            super(beans);
        }

        // private steamMilk(): void {
        //     console.log('Steaming some milk...');
        // }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            // this.steamMilk();
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(
            beans: number,
            private sugar: AutomaticSugarMixer
        ) {
            super(beans)
        }

        makeCoffee(shots:number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(
            beans: number,
            private sugar: AutomaticSugarMixer,
            private milk: CheapMilksteamer
            ) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = this.makeCoffee(shots);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
        /**
         * 클래스들 간에 서로 알고 지내는 것을 좋지 않다. 커플링, 결착, 관계 X
         */
    }
}