{
    /**
     * 클래스들 사이에 서로 상호 작용을 하는 경우에는 클래스 자신을 노출하는 것이 아니라, 
     * 인터페이스를 통해 서로 간의 상호작용을 하는 것이 더 좋다. 이것이 디커플링의 원칙이다.
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

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 다양한 거품기 종류
    class CheapMilksteamer implements MilkFrother {
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
    class FancyMilksteamer implements MilkFrother {
        private steamMilk() : void {
            console.log('Fancy steaming something...');
        }
        makeMilk(cup: CoffeeCup) : CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    class ColdMilksteamer implements MilkFrother {
        private steamMilk() : void {
            console.log('Cold steaming something...');
        }
        makeMilk(cup: CoffeeCup) : CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }
    // 다양한 설탕 종류
    class CandySugar implements SugarProvider {
        private getSugar() {
            console.log('get suagr from candy...');
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
    class SugarMixer implements SugarProvider {
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
        constructor(
            beans: number,
            serialNumber: string, 
            private milkFrother: MilkFrother // 인터페이스를 통해 디커플링함
            ) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            // this.steamMilk();
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(
            beans: number,
            private sugar: SugarProvider
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
            private milk: MilkFrother,
            private sugar: SugarProvider
            ) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = this.makeCoffee(shots);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
    }

    // 우유
    const cheapMilkMaker = new CheapMilksteamer();
    const fancyMilksteamer = new FancyMilksteamer();
    const coldMilkSteamer = new ColdMilksteamer();
    
    // 설탕
    const candySugar = new CandySugar();
    const sugar = new SugarMixer();

    // 전달인자에 따라 설탕의 종류를 달리 할 수 있게됨.
    const candyWweetMachine = new SweetCoffeeMaker(12, candySugar);
    const sugarSweetMachine = new SweetCoffeeMaker(12, sugar);

    // 전달인자에 따라 우유의 종류를 달리 할 수 있게됨.
    const coffeeLatteMachine = new CoffeeLatteMachine(12, 'SS', cheapMilkMaker);
    const sweetLatteMachine = new SweetCaffeLatteMachine(
        12,
        fancyMilksteamer,
        candySugar
    )

    // 조금 더 원하는 기능들을 조립해서 어떤 커피 기계를 만들 건지 결정할 수있게됨.
}