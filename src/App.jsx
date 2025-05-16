import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Main from "./page/main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";

export const base_url = "http://localhost:5174/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:testParam" element={<Test />} />
        <Route
          path="/:testParam/result/:resultParam"
          element={<TestResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / Loading : root/:testName
// 3. 결과 페이지 : root/:testName/result/:resultName

// Test Start Button(Intro)
// Copy Test Link Button(Intro, Result)
// Go-to-another Test Button(Result)
// Go-to-Other Tests Button(Intro, Result)

// SPA(Single Page Application ) & CSR(Client Side-Rendering)
// html + Javascript -> (Page 1 -> Metatag 1)
// =>
// page 마다 -> A.html / B.html / C.html, ...
