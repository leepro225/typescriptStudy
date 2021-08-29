{
    type PositionType = {
        x: number;
        y: number;
    
    }
    interface PositionInterface {
        x: number;
        y: number;
    }

    // 공통점 1 : 둘 다 오브젝트를 정의하고 타입을 할당할 수 있다.
    const obj1: PositionType = {
        x: 1,
        y: 1
    };
    const obj2: PositionInterface = {
        x: 1,
        y: 1
    };

    // 공통점 2: 둘 다 클래스에서 구현이 가능하다.
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }
    class Pos2 implements PositionInterface {
        x: number;
        y: number;
    }
    
    // 공통점 3: 타입은 인터섹션을 통해, 인터페이스는 상속을 통해 확장을 할 수 있다.
    type ZPositiontype = PositionType & {z: number};
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    // 인터페이스는 결합이 가능하다. 각각 정의한 것을 합해서 사용할 일이 있을 때 인터페이스를 사용한다. 
    // 다시 한번 동일한 이름으로 재정의가 가능하고, 두 가지가 결합된 값을 사용한다.
    // interface PositionInterface {
    //     z: number;
    // }

    // 타입은 computed properties 를 사용할 수 있다.
    type Person = {
        name: string,
        age: number
    }
    type Name = Person['name']; // string

    /**
     *  interface : 어떤 것의 규격 사항. 어떤 규격을 정하고, 이 규격을 통해 클래스가 구현된다면 인터페이스를
     * 사용한다.
     */ 

    /**
     * type : 데이터를 담을 타입을 묘사. 데이터를 담는 목적이라면 type 을 사용한다.
     */

}