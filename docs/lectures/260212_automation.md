# AI 실무 자동화: 내 구글 시트에 AI 콘텐츠 공장 만들기
> **대상**: 마케터, 1인 창업가, 직장인 | **시간**: 3시간 실습 | **핵심**: 구글 스프레드시트 + Apps Script + Gemini API를 활용해 트렌드 자동 수집부터 채널별 마케팅 콘텐츠 초안 생성까지 완전 자동화하는 파이프라인 구축.

---

## 📌 실무 자동화 구축 로드맵 (4단계)

이 가이드는 실제 특강에서 제공된 구글 시트 템플릿과 Apps Script 코드를 기반으로 나만의 AI 콘텐츠 공장을 짓는 실습 매뉴얼입니다.

---

### Step 1. 구글 AI Studio에서 API 키 발급받기 (10분)
- **판단 (Trigger):** 웹 UI(채팅창)에 매번 기획서나 글감을 복사-붙여넣기하는 단순 반복 노동에서 벗어나고 싶을 때.
- **할 일 (Actions):**
  1. [Google AI Studio](https://aistudio.google.com)에 접속한다.
  2. Google 계정으로 로그인한 뒤 **Get API Key** 버튼을 누른다.
  3. 신규 프로젝트용 API Key를 생성하고 메모장에 안전하게 복사해 둔다.
- **처음이라면 (Tip):**
  - Gemini API는 개인 테스트 및 소규모 실무 자동화용 무료 범위(Rate Limit 이내)를 넓게 제공하므로 비용 부담 없이 시작할 수 있습니다.

---

### Step 2. 구글 시트에 AI 엔진 이식하기 (Apps Script) (20분)
- **판단 (Trigger):** 구글 시트 셀에 텍스트를 적어두면 AI가 자동으로 셀 값을 읽어 분석/변환하기를 원할 때.
- **할 일 (Actions):**
  1. 구글 스프레드시트를 하나 생성한다.
  2. 상단 메뉴에서 **확장 프로그램** -> **Apps Script**를 선택한다.
  3. 기본 코드를 모두 지우고 아래 제공된 Apps Script 연동 함수를 붙여넣는다.
  4. 복사해 둔 API 키를 코드의 `YOUR_API_KEY` 부분에 넣고 저장한다.
- **실전 코드 (Gemini API 호출용):**
  ```javascript
  function GEMINI(prompt, cellValue) {
    var apiKey = "YOUR_API_KEY_HERE"; // 발급받은 API 키 입력
    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;
    
    var fullPrompt = prompt + (cellValue ? "\n\n[참조 데이터]:\n" + cellValue : "");
    
    var payload = {
      "contents": [{
        "parts": [{
          "text": fullPrompt
        }]
      }]
    };
    
    var options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true
    };
    
    var response = UrlFetchApp.fetch(url, options);
    var json = JSON.parse(response.getContentText());
    
    try {
      return json.candidates[0].content.parts[0].text;
    } catch(e) {
      return "에러 발생: " + response.getContentText();
    }
  }
  ```
- **시트 사용법:**
  - 시트 빈 셀에 `=GEMINI("이 제품명을 보고 바이럴 카피 한 줄 써줘", A2)` 형식으로 입력하면 실시간으로 AI 답변이 셀에 채워집니다.

---

### Step 3. 해외 바이럴·트렌드 RSS 자동 수집기 만들기 (30분)
- **판단 (Trigger):** 매일 아침 구글링을 통해 글로벌 뉴스나 트렌드 사이트를 하나하나 방문하여 소스를 긁어오는 작업을 자동화하고 싶을 때.
- **할 일 (Actions):**
  1. 수집하고 싶은 타겟 사이트의 RSS 피드 URL을 확보한다 (예: IT 트렌드의 경우 TechCrunch 등).
  2. 구글 시트의 `IMPORTFEED` 함수를 활용해 실시간으로 제목과 링크를 파싱한다.
- **실전 수식:**
  - `=IMPORTFEED("https://techcrunch.com/feed/", "items title", false, 10)` : 테크크런치 최신 뉴스 제목 10개를 실시간 수집.

---

### Step 4. 수집기와 AI 엔진 결합하여 콘텐츠 공장 가동하기 (30분)
- **판단 (Trigger):** 수집된 원문 뉴스를 읽고, 번역하고, 블로그/SNS/인스타그램용 카드뉴스 카피로 재생산하는 전 과정을 논스톱 파이프라인으로 연결할 때.
- **할 일 (Actions):**
  1. **A열:** `IMPORTFEED`로 긁어온 뉴스 원문 제목
  2. **B열:** `=GEMINI("아래 영어 뉴스를 한국어로 번역하고 핵심 내용 3줄 요약해줘", A2)`
  3. **C열:** `=GEMINI("위 요약을 바탕으로 인스타그램 카드뉴스에 들어갈 5장짜리 슬라이드 카피 대본을 작성해줘. 뻔한 정보 나열 금지.", B2)`
- **처음이라면 (Tip):**
  - 한꺼번에 너무 많은 셀을 수정하면 API Rate Limit 에러가 날 수 있으므로, 하루에 10~20개씩 끊어서 가동하거나 스프레드시트의 자동 갱신 주기를 제어하십시오.

---

## 💾 강의 리소스 & 다운로드
- [구글 드라이브 강의 폴더 (260212 자동화)](https://drive.google.com/drive/folders/1RSyFdUPWWlua2bmA3ZzZ6mzdwyUrC7h8)
- [콘텐츠 자동화 강의 도입부 슬라이드 PDF](https://drive.google.com/drive/folders/1RSyFdUPWWlua2bmA3ZzZ6mzdwyUrC7h8)
- [AI Marketing System Blueprint PDF](https://drive.google.com/drive/folders/1RSyFdUPWWlua2bmA3ZzZ6mzdwyUrC7h8)
