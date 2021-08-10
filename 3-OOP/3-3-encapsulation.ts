{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // public : 아무것도 안붙이면 기본값 public, 외부에서 접근 가능함
    // private : 외부에서 접근 불가능한 상태로 만듦
    // protected : 외부에서는 접근 불가능, 이 클래스를 상속한 자식에서는 접근 가능
    class CoffeeMaker {
        private coffeeBeans: number = 0; 
        private static BEANS_GRAMM_PER_SHOT: number = 7;

        private constructor(coffeeBeans: number) {
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

   class User {
       firstName: string;
       lastName: string;
       fullName: string;
       constructor(firstName: string, lastName: string) {
           this.firstName = firstName;
           this.lastName = lastName;
           this.fullName = `${firstName} ${lastName}`;
       }
   }
   const user = new User('Steve', 'Jobs');
   console.log(user.fullName); // Steve Jobs
   user.firstName = 'Ellie';
   console.log(user.fullName); // Steve Jobs, 
   //fullName이 설정된 뒤로 firstName이나 lastName이 변경되어도
   // 다시 fullName이 계산되지 않고, 한번 할당되면 계속 지정되어 있음
   // 이럴경우 getter가 유용하게 쓰임

   class User2 {
        firstName: string;
        lastName: string;
        // 멤버 변수를 바로 선언하고 설정하는 것이 아니라, get을 
        // 이용해서 fullName을 정의, fullName에 접근할 때마다
        // 호출 시점에 새로운 데이터를 만들고, 계산 
       get fullName(): string {
           return `${this.firstName} ${this.lastName}`
       }
       constructor(firstName:string, lastName: string) {
           this.firstName = firstName;
           this.lastName = lastName;
       }
       // 이렇게 간단하게도 할 수 있다.
        //    constructor(private firstName:string, public lastName: string) {
        // }
   }
   const user2 = new User2('Steve', 'Jobs');
   console.log(user2.fullName); // Steve Jobs
   user2.firstName = 'Ellie';
   // 함수처럼 접근하는 게 아니고, 변수처럼 접근하면 됨.
   console.log(user2.fullName); // Ellie Jobs, 

   // getter 와 setter
   class User3 {
       private internalAge = 4;
       get age(): number {
           return this.internalAge
       }
       set age(num: number) {
           if (num < 0) {
               // 정확한 숫자인지 유효성 검사를 할 수 있고
               throw new Error('too young!');
           }
           // 바로 설정하는 게 아닌, 더 연산을 여기서 할 수 도 있음
           // private 인 internalAge 를 업데이트 할 수 있음
           this.internalAge = num;
       }
       constructor(private firstName: string, public lastName:string) {}
    }

    const user3 = new User3('Steve', 'Jobs');
    user3.age = 6;
}