{
    /**
     * Intersection Types: & and
     * 다양한 타입을 하나로 묶어서 선언할 수 있다.
     */
    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        empolyeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.score, person.empolyeeId, person.work);
    }
    internWork({name: 'ellie', score: 1, empolyeeId: 2, work: () => {}});
}