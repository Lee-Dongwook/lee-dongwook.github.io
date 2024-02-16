# Debouncing / Throttling

함수가 너무 많이 실행되지 않도록 제어하는 테크닉으로 성능 최적화와 리소스 관리에 이용된다.

Debouncing(디바운싱) : 빈번하게 발생하는 이벤트들을 `특정 시간 이후 한번만` 실행 시키는 최적화 방법

Throttling(쓰로틀링) : 빈번하게 발생하는 이벤트들을 `일정한 시간 간격으로 한번만` 실행 시키는 최적화 방법

***

### React로 적용해보는 예시

1. Debouncing - lodash 라이브러리의 debounce 활용

```ts
import React, { useCallback, useEffect, type ChangeEvent } from 'react';
import { debounce } from 'lodash';

const SearchComponent = () => {
    const [query, setQuery] = useState<string>('');

    const debouncedSearchResult = useCallback(
        debounce((searchQuery: string) => {
          console.log("해당 검색어는: ", searchQuery);
        }, 500),
        []
    );

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        debouncedSearchResult(newQuery);
    };

    return (
        <div>
          <input type="text" value={query} onChange={handleInputChange}>
        </div>
    )
}

```
