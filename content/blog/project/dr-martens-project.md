---
title: 'Dr.Martens 웹 사이트 클로닝 팀 프로젝트 회고'
date: 2020-07-02 16:21:13
category: 'project'
draft: false
---

# 프로젝트 소개

<iframe width="1280" height="400" src="https://www.youtube.com/embed/x_OftNpGTy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- <strong>프로젝트 주제</strong> : 샌들, 슈즈, 부츠 등을 취급하는 영국 60년 전통 패션 브랜드 [닥터마틴](https://drmartens.co.kr/) 웹 사이트 클로닝 프로젝트
- <strong>구성원</strong> : Fronted 3명, Backend 3명
- <strong>기간</strong> : 2020.06.22 ~ 2020.07.13 (12일)
- <strong>적용 기술</strong> : React.js(Class형 컴포넌트), JavaScript(ES6), SASS, Git
- <strong>커뮤니케이션</strong> : Trello, Scrum, Slack
- <strong>담당 역할</strong> : Fronted
- [Frontend GitHub](https://github.com/wecode-bootcamp-korea/9-Dr_strange-frontend) / [Backend GitHub](https://github.com/wecode-bootcamp-korea/9-Dr_strange-backend)

# 사이트 주요 기능

담당한 부분을 <span style="background: linear-gradient(to right, #B2FEFA, #EAECC6);">체크</span>했습니다.

### <span style="position: relative">[ 회원가입/ 로그인 페이지 ]<div style="position: absolute;bottom:3px;width: 100%;height: 50%;background: linear-gradient(to right, #B2FEFA, #EAECC6);opacity: 0.9;z-index: -1;"></div><span></span></span></h1>

- 아이디 및 패스워드 유효성 검사<br>
  (아이디, 비밀번호 조건 확인 및 비밀번호, 비밀번호 확인란 일치 여부 검사)
- 로그인 및 로그아웃 기능 (localStorage)

### <span style="position: relative">[ 마이 페이지 ]<div style="position: absolute;bottom:3px;width: 100%;height: 50%;background: linear-gradient(to right, #B2FEFA, #EAECC6);opacity: 0.9;z-index: -1;"></div><span></span></span></h1>

- 회원가입한 유저 정보를 확인하고, 백엔드 서버에 저장된 유저 데이터를 불러와서 출력

### [ 메인 페이지 ]

- Nav, Footer
- 메인 페이지 최상단 슬라이더
- <span style="background: linear-gradient(to right, #B2FEFA, #EAECC6);">메인 페이지 내 콜라보레이션 섹션 컴포넌트화</span>
- 메인 페이지 내 카테고리 선택 시, 카테고리에 맞는 상품만 Filter
- 메인 페이지 내 Scroll에 따른 이미지 스타일 변화 Event
- 햄버거 메뉴

### [ 제품 리스트 페이지 ]

- 제품이 정해진 레이아웃에 따라(3-2-3-1) 재정렬되어 출력
- 부츠, 슈즈, 샌들 카테고리 클릭 시 카테고리에 맞는 제품만 Filter
- 리스트 페이지 장바구니 버튼 클릭 시 modal창 출력
- modal창에서 사이즈, 수량 선택 후 장바구니 담기 클릭 시 백엔드 서버로 유저 데이터 전송

### [ 제품 상세 페이지 ]

- 사이즈, 수량 선택 후 장바구니 담기 클릭 시 백엔드 서버로 유저 데이터 전송
- 동적 라우팅을 이용하여 color 선택 시 페이지 새로고침 없이 전환
- 상품 후기 (펼쳐 보기/접기) 버튼 기능 및 (더 보기) 버튼으로 동적인 페이지 구현
- 페이지 우측에 해당 위치로 바로 이동하는 네비게이션 버튼 구현

### [ 장바구니 페이지 ]

- 유저 정보 확인 후, 백엔드 서버에 저장된 장바구니 데이터를 불러와서 출력
- 삭제 버튼으로 장바구니 상품 삭제

## 3. 기록하고 싶은 코드

```css
 buttonHandler = () => {
    fetch("http://10.58.5.123:8001/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.username,
        nickname: this.state.id,
        password: this.state.password,
        birthday: this.state.date,
        email: `${this.state.emailId}@${this.state.emailAdd}`,
        phone_number: `${this.state.phoneNumber}${this.state.phoneNumber2}${this.state.phoneNumber3}`,
        checkedValue: false,
      }),
    }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        alert("회원가입이 완료되었습니다.");
        this.props.history.push("/login");
      }
    });
```

```css

<input className="email_import_add"
value={
  emailId && emailAdd ? `${emailId}@${emailAdd}` : emailId ? `${emailId}` : ""
}
/>
```

#### <center> [ 로그인 페이지 입력란 ]</center>

<center>

![form](/media/form2.png)

</center>

- 로그인과 회원가입 페이지의 레이아웃 구성이 반복되었기 때문에 하나의 Input을 컴포넌트화하여 재사용이 가능하도록 했다.

<center>

![form](/media/form.png)

</center>

- 위와 같이 이메일과 휴대폰 Input의 경우, 휴대폰 Input에는 컴포넌트를 재사용할 수 있었지만 이메일의 Address란은 HTML Select 태그를 사용해야 했기 때문에 미리 생성한 Input 컴포넌트를 사용하기에 제한 사항이 있었다.

- 프로젝트를 진행하면서 state와 props에 대한 이해가 많이 부족했기에 Input 컴포넌트에 원하는 값을 내려주는 접근에 도달하는 것에도 많은 시간을 할애했다.

- state와 props 개념에 대한 이해가 어느 정도 잡혔을 때는 이메일과 휴대폰 입력란의 Input이 분리되어 있는데 서로 다른 Input을 어떤 방법으로 Backend에서 원하는 데이터 형식으로 전송을 할까? 라는 고민을 하게 되었고 그 고민은 state 값을 여러 가지 형식의 데이터로 전송하는 방식에 대해 접근해서 그 문제를 해결하는 것까지 꼬리에 꼬리 물기를 반복했다.

- 그 과정에서 JavaScript ES6에서 새로 도입된 문자열 표기법인 템플릿 리터럴([Template literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals))을 사용해서 각각의 Input을 묶어서 전송하는 법을 알게 되었는데 같은 팀원이었던 솔미님께서 템플릿 리터럴에 대한 사용법을 알려주셨다. 처음 들어본 자바스크립트 개념인 것 같았지만, 이전에 한 번 학습했던 개념이었고 개념을 이해하는 것과 그것을 직접 응용하는 것에는 완전한 차이가 있음을 몸소 느끼게 되었다. 개념을 응용할 수 있어야 비로소 나의 지식이 되는 것이다. 코드를 반복적으로 타이핑하면서 응용력을 키워나가자.

## 잘한 점

- 하루에 한 번 진행하는 Stand Up 미팅을 빠짐없이 진행했다.<br>
  (전반적인 프로젝트 진행 상황, 팀원들의 진행 속도, blocker 등을 파악하며 원활한 커뮤니케이션을 했다.)
- 완벽하지 않지만, Output을 만들어 낼 수 있었다.
- 팀원들과 함께 웃음을 잃지 않으려고 노력했다. <br>
  (서로 웃음을 잃지 않으려고 노력했기 때문에 좋은 분위기 속에서 좋은 결과물을 낼 수 있었다.)

## Check List

- ✔️ CRA 초기 세팅을 할 수 있다.
- ✔️ Routes.js에 라우트를 추가할 수 있다.
- ✔️ 상황에 따라 어디에 어떤 Component를 생성해야 하는지 알고 있다.
- ✔️ event handler를 정의해서 특정 이벤트에 부여할 수 있다.
- ✔️ fetch를 통해 백엔드에 api를 호출하고, 응답 받은 데이터를 화면에 보여줄 수 있다.
- ✔️ scss의 mixin 기능을 자유자재로 사용할 수 있다.
- ✔️ 자식 컴포넌트에서 부모 컴포넌트에 데이터를 전달할 수 있다.
- ✔️ 기본적인 Flow에 따라 Git을 사용할 수 있다. branch를 생성하고 올바른 이름과 내용을 commit message로 작성할 수 있다.

## 부족한 점

- 정규식을 사용해서 완벽한 Validation을 구현하지 못했다.
  (간단한 삼항 연산자 조건을 이용해서 Validation을 진행하였으나 메인으로 맡은 파트가 회원가입 및 로그인 페이지였던만큼 조금 더 디테일하게 기능을 구현했어야 했다.)
- 팀 내 코드 컨벤션을 준수하지 못 했다.
  (팀원들과 규정했던 컴포넌트 Import 순서, sass style 배치순서, Github 브랜치명 등을 작업을 끝낸 뒤에 한 번에 맞추려고 하는 안일한 생각을 해버렸다. 그 결과 일을 두 번 반복하는 불상사가 발생했다.)
- 추상적인 변수명과 클래스명 사용
  (본인만 이해할 수 있는 변수명과 클래스명을 사용했다. 팀원분께서 도움을 주려고 했을 때, 해당 코드에 대해 한참 동안 설명하는 시간을 가져야 했다.)
- Component Life Cycle, State, Props, Event, 클래스형 컴포넌트 등.
  Copy 하는 것이 아니라 직접 타이핑할 수 있도록 반복 숙달을 해야 한다.
- 타인에게 질문을 할 때, 올바른 워딩 사용과 blocker를 정확히 얘기할 수 있도록 하자. 타인에게 의존하려고 하지 말고 스스로가 정확한 질문의 정도를 정하고, 그 안에서 최대한의 노력을 할 수 있도록 해야 한다.
- 팀 프로젝트를 진행하는 내내 일방적인 도움을 받는 입장이었다. 도움을 받은만큼 도움을 줄 수 있도록 끊임 없이 노력하자.
- 프로젝트를 중간중간 습득하는 지식을 완전히 내 것으로 소화시키는 시간을 가지지 않고 Output만을 생각했다.

## 프로젝트 시작 전의 두려움

위코드에 처음 온 후로부터 프로젝트를 진행하면서까지 나는 늘 초조했고 항상 불안했다. 몇 주가 지나고서야 타인과의 비교에서는 자유로워졌지만 나 자신에 대한 끊임 없는 의심으로부터는 자유로워질 수 없었다. 다른 사람들은 쉽게 이해하고 넘어가는 개념을 나는 세 번, 네 번 더 봐야 했다. 아직 턱없이 부족한 실력으로 프로젝트를 진행한다고 생각하니, 나와 팀이 되는 구성원들의 노력에 되려 걸림돌이 되는 게 아닐까. 하는 염려와 거듭된 걱정 속에서 프로젝트를 시작했다.

## 프로젝트를 끝내고

프로젝트를 마치고 되돌아보니, 어느 순간 내가 해결할 수 없을 것 같던 문제를 해결해내었고 염려했던 부분 역시 헤쳐나가는 과정 속에서 어느 정도 해소되었다. 물론, 그 과정은 고통스러웠다. [실력은 고통의 총합](https://zdnet.co.kr/view/?no=20170616090644)이라고 했던가. 프로젝트를 진행하면서 팀원들의 도움을 많이 받았는데 팀원들 간의 소통이 얼마나 중요한지를 몸소 느낄 수 있었다. 서로 다른 성향의 개인이지만, 프로젝트 완성이라는 공통의 목표가 있었기 때문에 그 안에서 서로 배려하면서 최대한의 결과물을 끌어낼 수 있도록 소통했다. 개인의 실력 또한 중요하지만, 팀원들 간의 원활한 커뮤니케이션이 Output 퀄리티에 많은 영향을 끼친다는 것을 눈으로 확인할 수 있었던 소중한 시간이었다.

<h5>할 수 있을까?</h5>
<h3> <span style="background: linear-gradient(to right, #B2FEFA, #EAECC6);">할 수 있다.</span></h3>
<h1>하고 싶다.</h1>

프로젝트를 진행하기 전, 자신에 대한 끊임 없는 의심을 품었지만 프로젝트를 마무리하면서 그 의심은 다음 스텝으로 넘어갔다. <strong><br>할 수 있다.</strong> 비록, 완성된 결과물에 부족함이 많지만 0에서 1로 넘어왔다는 생각을 가지고 나만의 보폭으로 꾸준히 나아가자. <br>포기하지 말고 끝까지 공부하자. <strong>하고 싶다. </strong>를 향해서.

P.S.
쉴 틈 없이 흘러가는 생활 속에서 잠시 잊고 있었던 중요한 가치를 되새겨 보고자 한다. <br>사소한 것에도 감사함을 찾으려고 하는 매 순간을 당연하게 생각하지 않으려고 했던 내 가치를 잠시 놓치고 있었던 것 같다.<br> 배우는 것에 스트레스를 받는 것이 아닌, 배울 수 있음에 감사해야 하며 배움의 과정을 즐길 수 있어야 한다.<br> 당장의 상황에 가치를 대입하는 것이 때에 따라서는 쉽지 않겠지만 항상 긍정적인 Attitude를 지향하자. 꾸준하게 나만의 보폭으로.
