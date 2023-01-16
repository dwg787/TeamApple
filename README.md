![logo2](https://user-images.githubusercontent.com/80263801/212575656-4e9e9683-0e9a-4194-9c8f-47d5add437d5.png)


## ApplePet 
공공데이터 사이트에서 제공한 API를 이용하여 유기동물에게 반려인을 찾아주는 앱 사이트 프로젝트🐕

## 팀원 소개
|박진양|한재창|예재현|김민성|
|------|------|------|------|
|[Github](https://github.com/Jinyang-Park)|[Github](https://github.com/JAECHANGG)|[Github](https://github.com/dwg787)|[Github](https://github.com/GhostPines)|

## 기능 구현
* 로그인, 회원 가입 페이지
    - 로그인하지 않을 경우 좋아요, 댓글 클릭 시 로그인 페이지로 전환
* 필터 페이지
    - 지역과 축종 선택하고 메인 페이지로 이동 버튼 클릭 시 메인 페이지로 전환
    - redux, toolkit 활용하여 지역, 축종 선택 값 store에 저장하도록 구현
* 메인 페이지
    - 유기동물 API 불러오기 / 필터 페이지에서 선택한 축종 값 불러오기
    - useInfinityQuery로 Infinite Scroll 구현
    - 뒤로가기 버튼 구현
* 디테일 페이지
    - route로 데이터 받아서 정보를 보여주는 기능 구현
    - 뒤로가기 버튼 구현
* 댓글 작성
    - 댓글 모달창 구현
    - 스와이프 삭제 버튼 구현
    - Firestore 에서 제공하는 api를 이용하여 CRUD구현
* 관심 목록 페이지
    -  파이어베이스로 updatedoc 메서드를 사용해 구현
    -  좋아요 클릭시 관심 목록 페이지에 업데이트
    -  로그인하지 않을 경우 로그인으로 유도하는 페이지로 전환
* 마이페이지
    - 로그인시 닉네임 수정
    - 로그아웃 기능 구현
* 인트로 슬라이드 구현
*  다크모드 구현
*  Navbar 구현

## 사용스택

<div align="left">
	<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
        <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
	<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white" />
	<img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white">
</div>

* Expo를 통한 배포 (eas update) 


## 기간
* 2023.01.06(금) ~ 2023.01.12(목)
* 2023.01.13(금) 프로젝트 발표

## QR Code

<img width="467" alt="스크린샷 2023-01-13 오후 12 28 23" src="https://user-images.githubusercontent.com/95618332/212230445-ac2b9702-3eae-4d15-88b7-327e0b4fa9da.png">

<img width="464" alt="스크린샷 2023-01-13 오후 12 29 11" src="https://user-images.githubusercontent.com/95618332/212230508-82fdd387-4654-4d28-bb11-2279aba7d916.png">
