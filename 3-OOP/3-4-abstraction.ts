{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    /**
     * 인터페이스란 나랑 의사소통하려면, 나는 이런 규약을 가지고 있어 라고
     * 명시해 놓는 contractor 계약서,명세서 이다.
     * 인터페이스를 구현하는 클래스에서는 인터페이스에 적혀 있는 모든 함수를
     * 구현해줘야 한다.
     */
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine {
        private coffeeBeans: number = 0; 
        private static BEANS_GRAMM_PER_SHOT: number = 7;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeas: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeas);
        }
        
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans;
        }
        
        private grindBeans(shots:number) {
            console.log(`grinding beans for ${shots}`);
             if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; // 사용한 만큼 빼준다.
    
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

    /**
     * 추상화는 인터페이스를 간단하게 만듬으로써 사용하는 사람이 간편하게,
     * 많은 생각을 하지 않고도 사용할 수 있도록 도와준다.
     * 예를 들어, CoffeeMaker 라는 클래스는 외부에 커피를 만드는 것과
     * 콩을 채우는 두가지 만 노출함으로써 사용자에게 내부의 커피 만드는 과정을
     * 은닉화하고, 외부에는 간단하게 인터페이스를 만든다.
     */
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(34);
    maker.fillCoffeeBeans(5); 
    maker.makeCoffee(2);
    
    /**
     * 인터페이스는 내가 얼마만큼의 행동을 보장할 건지 결정할 수 있다.
     */
    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(33);
    maker2.fillCoffeeBeans(4); // 인터페이스에 정의되어 있지 않기 때문에 쓸 수없다.
    maker2.makeCoffee(3);
    
}