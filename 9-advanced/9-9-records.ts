{
    // map 과 비슷하게, 하나와 어떤 하나의 타입을 연결하고 싶을 때 하나를 키로 쓰고, 나머지를 다른 타입으로 
    // 묶고 싶을 때 쓴다.
    type PageInfo = {
        title: string;
    }

    type Page = 'home' | 'about' | 'contact';

                    // <key, value>
    const nav: Record<Page, PageInfo> = {
        home: {title: 'Home'},
        about: {title: 'About'},
        contact: {title: 'Contact'}
    }
}