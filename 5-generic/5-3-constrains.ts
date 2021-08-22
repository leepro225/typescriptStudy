{
    interface Employee {
        pay(): void;
    }

    class FulltimeEmployee implements Employee {
        pay() {
            console.log(`full time@@`)
        }
        workFullTime() {

        }
    }

    class PartTimeEmployee {
        pay() {
            console.log(`part time!!`);
        }
        workPartTime() {

        }
    }

    // 세부적인 타입을 인자로 받아서, 정말 추상적인 타입으로 다시 리턴하는 함수는 똥
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    // constraints 조건
    // Employee를 확장한 아이만 가능하다고 제한 조건
    function pay<T extends Employee> (employee: T): T {
        employee.pay();
        return employee
    }

    const ellie = new FulltimeEmployee();
    const bob = new PartTimeEmployee();
    ellie.workFullTime();
    bob.workPartTime();

    const ellieAfterPay = pay(ellie);
    const bobAfterPay = pay(bob);


    // 조금 더 제한을 걸어보면

    const obj = {
        name: 'steve',
        age: 40
    }
    const obj2 = {
        name: 'test',
        animal: 'dog'
    }

    function getValue<O, K extends keyof O>(obj:O, key: K): O[K] {
        return obj[key];
    }

    console.log(getValue(obj, 'name')) // steve
    console.log(getValue(obj2, 'animal')) // dog
}