## teck spec
- JavaScript
- TypeScript
- React
- Redux/react-redux
- react-router
- styled-components
- Webpack
- Babel

## styled-components naming convention
이 프로젝트의 style은 `styled-components` 를 사용해서 적용한다. 이때, 컴포넌트의 네이밍을 어떻게 할것인가에 대해서 정의한다.
1. `<Wrapper>`

    가장 외부(부모)에 감싸져야하는 경우에 다음과 같은 이름으로 작성한다(`React.Fragment` 를 사용할 수 없는 경우). 일반적으로 큰 단위로 배치를 정렬하기 위해서 사용된다.

2. `<[ParentComponentName]+[TagName|FunctionName]>`

    부모 컴포넌트의 이름과 태그명 또는 기능명을 이어서 작성하는 방식으로 작성한다. 예를 들어서 부모를 `<Aside>` 라고 정하고, 기능을 `Filter` 라고 한다면, `<AsideFilter>` 로 작성한다.

3. `<[TagName|FunctionName]>`

    한 태그 또는 기능에 대해서 통용되는 style의 경우에 사용한다. 예를 들어서 `a` 태그의 underline을 모두 none으로 만들고 싶다고 한다면, 위의 규칙을 적용하여 다음과 같이 작성한다.
    ```javascript
    const A = styled.a`
      text-decoration: none;
    `
    ```
    public한 태그를 작성하는 경우에 사용된다.