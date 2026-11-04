'use strict';

// ===== PAGE → FILE MAP =====
const PAGE_MAP = {
  'home':  'index.html',
  's1-1':  'contents/preparation/components.html',
  's1-2':  'contents/preparation/parts.html',
  's1-3':  'contents/preparation/wearing.html',
  's2-1':  'contents/basics/power-pairing.html',
  's2-2':  'contents/basics/controls.html',
  's2-3':  'contents/basics/charging.html',
  's2-4':  'contents/basics/led.html',
  's3-1':  'contents/features/audio.html',
  's3-2':  'contents/features/app.html',
  's3-3':  'contents/features/multipoint.html',
  's4-1':  'contents/troubleshooting/faq.html',
  's4-2':  'contents/troubleshooting/symptoms.html',
  's4-3':  'contents/troubleshooting/reset.html',
  's5-1':  'contents/cs/specs.html',
  's5-2':  'contents/cs/safety.html',
  's5-3':  'contents/cs/service.html',
};

// ===== SEARCH INDEX =====
const SEARCH_INDEX = [
  { page: 'home',  title: '홈 / 빠른 시작',              section: '홈',          keywords: ['홈', '빠른시작'] },
  { page: 's1-1',  title: '구성품 확인',                   section: '제품 소개',    keywords: ['구성품', '박스', '이어팁', '충전 케이블'] },
  { page: 's1-2',  title: '각 부의 명칭 및 기능',           section: '제품 소개',    keywords: ['명칭', '기능', '부위', '전원 버튼', '볼륨', '마이크'] },
  { page: 's1-3',  title: '착용 및 연결 방법',              section: '제품 소개',    keywords: ['착용', '연결', '착용법'] },
  { page: 's2-1',  title: '전원 On/Off 및 페어링',          section: '기본 사용법',  keywords: ['전원', '켜기', '끄기', '페어링', '블루투스', 'pairing'] },
  { page: 's2-2',  title: '조작부 사용법',                  section: '기본 사용법',  keywords: ['버튼', '조작', '컨트롤', '클릭', '재생', '볼륨'] },
  { page: 's2-3',  title: '충전 및 배터리 상태',            section: '기본 사용법',  keywords: ['충전', '배터리', 'usb-c'] },
  { page: 's2-4',  title: 'LED 상태 표시등 안내',           section: '기본 사용법',  keywords: ['LED', '표시등', '파란색', '빨간색', '흰색', '점멸'] },
  { page: 's3-1',  title: '음성/음향 설정',                 section: '주요 기능',    keywords: ['음성', '음향', '이퀄라이저', 'EQ', 'ANC'] },
  { page: 's3-2',  title: '전용 앱 연동 및 활용',           section: '주요 기능',    keywords: ['앱', 'app', '다운로드', '설치'] },
  { page: 's3-3',  title: '다중 기기 연결 (Multi-point)',   section: '주요 기능',    keywords: ['다중', '멀티포인트', 'multipoint', '기기 연결'] },
  { page: 's4-1',  title: '자주 묻는 질문 (FAQ)',           section: '문제 해결',    keywords: ['FAQ', '자주 묻는', '질문'] },
  { page: 's4-2',  title: '증상별 해결 가이드',             section: '문제 해결',    keywords: ['증상', '해결', '연결 끊김', '소리 없음', 'troubleshooting'] },
  { page: 's4-3',  title: '초기화(Reset) 방법',             section: '문제 해결',    keywords: ['초기화', 'reset', '리셋', '공장 초기화'] },
  { page: 's5-1',  title: '상세 제품 제원',                 section: '제품 사양',    keywords: ['제원', '스펙', 'spec', '방수', 'IPX4', '재생 시간'] },
  { page: 's5-2',  title: '안전 주의사항 및 규격',          section: '제품 사양',    keywords: ['안전', '주의사항', '청력', '규격'] },
  { page: 's5-3',  title: 'A/S 및 고객센터 안내',          section: '제품 사양',    keywords: ['AS', 'A/S', '고객센터', '전화', '이메일', '수리'] },
];

// ===== BREADCRUMB MAP =====
const BREADCRUMBS = {
  'home':  [{ label: '홈' }],
  's1-1':  [{ label: '홈', page: 'home' }, { label: '제품 소개', page: 's1-1' }, { label: '구성품 확인' }],
  's1-2':  [{ label: '홈', page: 'home' }, { label: '제품 소개', page: 's1-1' }, { label: '각 부의 명칭' }],
  's1-3':  [{ label: '홈', page: 'home' }, { label: '제품 소개', page: 's1-1' }, { label: '착용 및 연결' }],
  's2-1':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: '전원 On/Off 및 페어링' }],
  's2-2':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: '조작부 사용법' }],
  's2-3':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: '충전 및 배터리' }],
  's2-4':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: 'LED 표시등' }],
  's3-1':  [{ label: '홈', page: 'home' }, { label: '주요 기능', page: 's3-1' }, { label: '음성/음향 설정' }],
  's3-2':  [{ label: '홈', page: 'home' }, { label: '주요 기능', page: 's3-1' }, { label: '전용 앱 연동' }],
  's3-3':  [{ label: '홈', page: 'home' }, { label: '주요 기능', page: 's3-1' }, { label: '다중 기기 연결' }],
  's4-1':  [{ label: '홈', page: 'home' }, { label: '문제 해결', page: 's4-1' }, { label: 'FAQ' }],
  's4-2':  [{ label: '홈', page: 'home' }, { label: '문제 해결', page: 's4-1' }, { label: '증상별 해결' }],
  's4-3':  [{ label: '홈', page: 'home' }, { label: '문제 해결', page: 's4-1' }, { label: '초기화(Reset)' }],
  's5-1':  [{ label: '홈', page: 'home' }, { label: '제품 사양', page: 's5-1' }, { label: '상세 제원' }],
  's5-2':  [{ label: '홈', page: 'home' }, { label: '제품 사양', page: 's5-1' }, { label: '안전 주의사항' }],
  's5-3':  [{ label: '홈', page: 'home' }, { label: '제품 사양', page: 's5-1' }, { label: 'A/S 및 고객센터' }],
};

const PAGE_SECTION_MAP = {
  's1-1': 's1', 's1-2': 's1', 's1-3': 's1',
  's2-1': 's2', 's2-2': 's2', 's2-3': 's2', 's2-4': 's2',
  's3-1': 's3', 's3-2': 's3', 's3-3': 's3',
  's4-1': 's4', 's4-2': 's4', 's4-3': 's4',
  's5-1': 's5', 's5-2': 's5', 's5-3': 's5',
};

// ===== BASE URL & CURRENT PAGE (file:// 호환) =====
const BASE = (() => {
  const href = window.location.href.split('?')[0].split('#')[0];
  return href.includes('/contents/')
    ? href.replace(/\/contents\/.+$/, '/')
    : href.replace(/\/[^/]+$/, '/');
})();

const CURRENT_PAGE = (() => {
  const href = window.location.href;
  for (const [page, file] of Object.entries(PAGE_MAP)) {
    if (href.endsWith('/' + file)) return page;
  }
  return 'home';
})();

// ===== SHELL 주입 (헤더 + LNB + 푸터) =====
(function buildShell() {
  const existing = document.getElementById('pageContent');
  const contentHtml = existing ? existing.innerHTML : document.body.innerHTML;

  document.body.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <button class="nav-toggle" id="navToggle" aria-label="메뉴 열기/닫기">
          <span></span><span></span><span></span>
        </button>
        <a class="logo" href="#" data-page="home">
          <img src="${BASE}images/withhear.svg" alt="WithHear" class="logo-img" />
          <span class="logo-sub">온라인 매뉴얼</span>
        </a>
        <div class="header-search">
          <input type="text" id="searchInput" placeholder="매뉴얼 검색 (예: 페어링, 충전, 초기화…)" autocomplete="off" />
          <button class="search-btn" aria-label="검색">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <div class="search-dropdown" id="searchDropdown"></div>
        </div>
      </div>
    </header>

    <div class="layout">
      <nav class="lnb" id="lnb">
        <div class="lnb-inner">
          <ul class="nav-tree">
            <li class="nav-item" data-section="home">
              <a href="#" class="nav-link nav-top" data-page="home">홈 / 빠른 시작</a>
            </li>
            <li class="nav-item has-children" data-section="s1">
              <a href="#" class="nav-link nav-top">제품 소개 및 준비하기<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s1-1">구성품 확인</a></li>
                <li><a href="#" class="nav-link" data-page="s1-2">각 부의 명칭 및 기능</a></li>
                <li><a href="#" class="nav-link" data-page="s1-3">착용 및 연결 방법</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s2">
              <a href="#" class="nav-link nav-top">기본 사용법<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s2-1">전원 On/Off 및 페어링</a></li>
                <li><a href="#" class="nav-link" data-page="s2-2">조작부 사용법</a></li>
                <li><a href="#" class="nav-link" data-page="s2-3">충전 및 배터리 상태</a></li>
                <li><a href="#" class="nav-link" data-page="s2-4">LED 상태 표시등 안내</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s3">
              <a href="#" class="nav-link nav-top">주요 기능 활용<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s3-1">음성/음향 설정</a></li>
                <li><a href="#" class="nav-link" data-page="s3-2">전용 앱 연동 및 활용</a></li>
                <li><a href="#" class="nav-link" data-page="s3-3">다중 기기 연결</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s4">
              <a href="#" class="nav-link nav-top">문제 해결<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s4-1">자주 묻는 질문 (FAQ)</a></li>
                <li><a href="#" class="nav-link" data-page="s4-2">증상별 해결 가이드</a></li>
                <li><a href="#" class="nav-link" data-page="s4-3">초기화(Reset) 방법</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s5">
              <a href="#" class="nav-link nav-top">제품 사양 및 고객 지원<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s5-1">상세 제품 제원</a></li>
                <li><a href="#" class="nav-link" data-page="s5-2">안전 주의사항 및 규격</a></li>
                <li><a href="#" class="nav-link" data-page="s5-3">A/S 및 고객센터</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <main class="main-content" id="mainContent">
        <nav class="breadcrumb" id="breadcrumb" aria-label="현재 위치"></nav>
        <div id="pageContent">${contentHtml}</div>
      </main>
    </div>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#" data-page="s5-3">고객 지원</a>
          <a href="#">오디에스오 공식 홈페이지</a>
        </div>
        <p class="footer-copy">© 2025 AUDISO Co., Ltd. All rights reserved.</p>
      </div>
    </footer>`;
})();

// ===== DOM =====
const lnb         = document.getElementById('lnb');
const navToggle   = document.getElementById('navToggle');
const searchInput = document.getElementById('searchInput');
const searchDrop  = document.getElementById('searchDropdown');
const breadcrumb  = document.getElementById('breadcrumb');

// ===== NAVIGATION =====
function navigateTo(page) {
  if (!page) return;
  if (page === CURRENT_PAGE) { closeMobileNav(); return; }
  const file = PAGE_MAP[page];
  if (!file) return;
  window.location.href = BASE + file;
}

function updateBreadcrumb(page) {
  const crumbs = BREADCRUMBS[page] || [{ label: '홈' }];
  breadcrumb.innerHTML = crumbs.map((c, i) => {
    if (i < crumbs.length - 1 && c.page)
      return `<a href="#" data-page="${c.page}">${c.label}</a><span class="breadcrumb-sep"></span>`;
    return `<span>${c.label}</span>`;
  }).join('');
}

function updateLnbActive(page) {
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

  const target =
    document.querySelector(`.nav-sub .nav-link[data-page="${page}"]`) ||
    document.querySelector(`.nav-item:not(.has-children) .nav-link[data-page="${page}"]`);
  target?.classList.add('active');

  const sectionKey = PAGE_SECTION_MAP[page];
  document.querySelectorAll('.nav-item.has-children').forEach(el => {
    const isActive = el.dataset.section === sectionKey;
    el.classList.toggle('open', isActive);
    el.classList.toggle('section-active', isActive);
  });
}

// ===== DELEGATED CLICK =====
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-page]');
  if (link) { e.preventDefault(); navigateTo(link.dataset.page); return; }

  const navTop = e.target.closest('.nav-top');
  if (navTop) {
    e.preventDefault();
    const item = navTop.closest('.nav-item.has-children');
    if (item) {
      const firstSub = item.querySelector('.nav-sub [data-page]');
      if (firstSub) navigateTo(firstSub.dataset.page);
      else item.classList.toggle('open');
    }
    return;
  }

  const hotspot = e.target.closest('.vi-hotspot');
  if (hotspot) { navigateTo(hotspot.dataset.target); return; }

  const tab = e.target.closest('.tab');
  if (tab) {
    const container = tab.closest('.tab-container');
    container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const id = tab.dataset.tab;
    container.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === id));
    return;
  }

  if (!e.target.closest('.header-search')) closeSearch();
});

// ===== MOBILE NAV =====
const backdrop = document.createElement('div');
backdrop.className = 'lnb-backdrop';
document.body.appendChild(backdrop);

function openMobileNav()  { lnb.classList.add('open'); backdrop.classList.add('visible'); document.body.style.overflow = 'hidden'; }
function closeMobileNav() { lnb.classList.remove('open'); backdrop.classList.remove('visible'); document.body.style.overflow = ''; }

navToggle.addEventListener('click', () => lnb.classList.contains('open') ? closeMobileNav() : openMobileNav());
backdrop.addEventListener('click', closeMobileNav);

// ===== SEARCH =====
function doSearch(q) {
  const lq = q.toLowerCase();
  return SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(lq) ||
    item.keywords.some(k => k.toLowerCase().includes(lq))
  ).slice(0, 8);
}
function hl(text, q) {
  return text.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'), '<mark>$1</mark>');
}
function renderDropdown(results, q) {
  if (!results.length) {
    searchDrop.innerHTML = '<div class="search-result-item" style="color:var(--c-text-3)">검색 결과가 없습니다.</div>';
  } else {
    searchDrop.innerHTML = results.map(r =>
      `<div class="search-result-item" data-page="${r.page}"><span>${hl(r.title,q)}</span><span class="sri-section">${r.section}</span></div>`
    ).join('');
    searchDrop.querySelectorAll('[data-page]').forEach(el =>
      el.addEventListener('click', () => { navigateTo(el.dataset.page); closeSearch(); })
    );
  }
  searchDrop.classList.add('open');
}
function closeSearch() { searchDrop.classList.remove('open'); searchDrop.innerHTML = ''; }

let st;
searchInput.addEventListener('input', () => {
  clearTimeout(st);
  const q = searchInput.value;
  if (!q.trim()) { closeSearch(); return; }
  st = setTimeout(() => renderDropdown(doSearch(q), q), 120);
});
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeSearch(); searchInput.blur(); return; }
  if (e.key === 'Enter') {
    const first = searchDrop.querySelector('[data-page]');
    if (first) { navigateTo(first.dataset.page); closeSearch(); }
  }
});

// ===== INIT =====
updateBreadcrumb(CURRENT_PAGE);
updateLnbActive(CURRENT_PAGE);
