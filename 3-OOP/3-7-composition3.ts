{
    /**
     * 밀크와 슈가를 전달해서 만들 수 있게 됐기 때문에,
     * 다양한 기계는 필요없게 되었다.
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

        public constructor(
            coffeeBeans: number,
            private milk: MilkFrother,
            private sugar: SugarProvider
            ) {
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
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
    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup) : CoffeeCup {
            return cup;
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
    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 우유
    const cheapMilkMaker = new CheapMilksteamer();
    const fancyMilksteamer = new FancyMilksteamer();
    const coldMilkSteamer = new ColdMilksteamer();
    const noMilk = new NoMilk();
    
    // 설탕
    const candySugar = new CandySugar();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    // 전달인자에 따라 설탕의 종류를 달리 할 수 있게됨.
    const candyWweetMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sugarSweetMachine = new CoffeeMachine(12, noMilk, sugar);

    // 전달인자에 따라 우유의 종류를 달리 할 수 있게됨.
    const coffeeLatteMachine = new CoffeeMachine(12, cheapMilkMaker, sugar);
    const sweetLatteMachine = new CoffeeMachine(
        12,
        fancyMilksteamer,
        candySugar
    )

    // 조금 더 원하는 기능들을 조립해서 어떤 커피 기계를 만들 건지 결정할 수있게됨.
}