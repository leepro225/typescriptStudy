{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    // pick과 반대로
    // 기존에 있는 타입에서 내가 원하는 것만 빼고 타입을 만들고 싶을 때 사용한다.
    type VideoMetaData = Pick<Video, 'url' | 'data'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }

    function getVideoMetaData(id: string): VideoMetaData {
        return {
            id: id,
            title: 'title'
        }
    }

}