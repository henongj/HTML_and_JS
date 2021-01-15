const title = document.getElementById('title');
title.innerHTML = "Downloader";
title.style.color = "red";
function alert_button(str) {
    alert(str);
}
/* 

1. URL , 시간, 길이 을 입력받는다
    ex) ".../media_w12345667_0" 형태
    그리고 시작시간 , 다운길이를 입력받는다
    ex) 23 30 , 03 20

2. 입력받은 값을 기준으로 시작 URL을 만든다 (A)

3. while문을 돌려서 url을 갱신(B)하고
4. while문은 (C)번 반복한다
    4.1 첫 영상다운일 경우 6번 곧바로 다운하고
    4.2 영상이 다운완료 될 때마다 다음 것을 다운로드 한다.

5. 완료되면 창을 띄우거나 어떠한 방법으로 알린다.(???)

A. 첫 URL 만드는 법

    B 함수를 호출하고, parameter는 funtion(C)을 쓴다.
    첫 URL의 영상 번호는 _0.ts이다.
    funtion C의 parameter는 시작시간을 쓴다.
    즉 URL 생성 함수와 시작시간이 있으면 첫 URL이 나온다.

B. URL 을 생성
  
    0. URL 과 NUMBER 를 파라메터로 받는다
    1. URL을 뒤부터 탐색해서 _를 찾는다
    2. _까지 싹 자르고 숫자값을 추출해서
    3. 그 값에 NUMBER 를 더한다
    4. _number.ts 형태로 붙이고
    5. 변경된 경로를 return 한다    

C. 시간을 영상 번호나 반복 횟수로 변환하는 함수

    1. 숫자 두 개를 파라메터로 한다.
    2. 하나는 분 , 하나는 초다.
    3. 초는 일의 자리를 반올림 한다.
    4. return 분*6 + 초의 십의자리 한다.

D


*/
