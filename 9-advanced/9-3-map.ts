{
    type Video = {
        title: string;
        author: string;
    };

    // 아래 처럼 뭔가 옵션을 추가할때 마다 늘려가지 말고, 재사용성을 높여주는게 map 타입 이다. 
    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }
    type Optional<T> = {
        [P in keyof T]?: T[P]; // for... in  주어진 타입의 키를 돌면서 재선언
    }

    type VideoOptional = Optional<Video>;

    const test: VideoOptional = {
        title: 'string'
    }

    // type VideoReadOlny = {
    //     readonly title: string;
    //     readonly author: string;
    // }

    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    }

    const test2: Readonly<Video> = {
        title: 'hi',
        author: 'ellie'
    };
    // test2.author = 'test' // 변경 불가

    type Nullable<T> = {[P in keyof T]: T[P] | null};
    const test3: Nullable<Video> = {
        title: null,
        author: null
    }
}