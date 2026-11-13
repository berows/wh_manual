'use strict';

// ===== PAGE → FILE MAP =====
const PAGE_MAP = {
  'home':  'index.html',
  's1-1':  'contents/preparation/parts.html',
  's1-2':  'contents/preparation/components.html',
  's1-3':  'contents/preparation/wearing.html',
  's2-1':  'contents/basics/power.html',
  's2-2':  'contents/basics/controls.html',
  's2-4':  'contents/basics/caution.html',
  's3-1':  'contents/features/audio.html',
  's3-2':  'contents/features/app.html',
  's4-1':  'contents/troubleshooting/faq.html',
  's4-3':  'contents/troubleshooting/reset.html',
  's5-1':  'contents/cs/specs.html',
  's5-2':  'contents/cs/safety.html',
  's5-3':  'contents/cs/service.html',
};

// ===== SEARCH INDEX =====
const SEARCH_INDEX = [
  { page: 'home',  title: '홈 / 빠른 시작',              section: '홈',          keywords: ['홈', '빠른시작'] },
  { page: 's1-1',  title: '주요 구성품',                section: '제품 소개',    keywords: ['구성품', '박스', '이어팁'] },
  { page: 's1-2',  title: '각 부의 명칭 및 기능',           section: '제품 소개',    keywords: ['명칭', '기능', '부위', '전원 버튼', '볼륨', '마이크'] },
  { page: 's1-3',  title: '키오스크 설치',              section: '제품 소개',    keywords: ['설치', '키오스크', '설치순서'] },
  { page: 's2-1',  title: '전원 On/Off',                   section: '기본 사용법',  keywords: ['전원', '켜기', '끄기'] },
  { page: 's2-2',  title: '사용전 기본 확인 사항',                  section: '기본 사용법',  keywords: ['확인', '전원', '프린터', '헤드폰', '인터넷', '음향', '볼륨'] },
  { page: 's2-4',  title: '사용시 주의사항',           section: '기본 사용법',  keywords: ['주의사항', '소독', '전문의', '보호자'] },
  { page: 's3-1',  title: '자동 청력 검사',                 section: '주요 기능',    keywords: ['청력검사', '검사', 'WithHear', '앱', '프린트', '이경'] },
  { page: 's3-2',  title: '전용 앱 연동 및 활용',           section: '주요 기능',    keywords: ['앱', 'app', '다운로드', '설치'] },
  { page: 's4-1',  title: '자주 묻는 질문 (FAQ)',           section: '문제 해결',    keywords: ['FAQ', '자주 묻는', '질문'] },
  { page: 's4-3',  title: '초기화(Reset) 방법',             section: '문제 해결',    keywords: ['초기화', 'reset', '리셋', '공장 초기화'] },
  { page: 's5-1',  title: '상세 제품 제원',                 section: '제품 사양',    keywords: ['제원', '스펙', 'spec', '방수', 'IPX4', '재생 시간'] },
  { page: 's5-2',  title: '안전 주의사항 및 규격',          section: '제품 사양',    keywords: ['안전', '주의사항', '청력', '규격'] },
  { page: 's5-3',  title: '고객센터',                      section: '제품 사양',    keywords: ['AS', 'A/S', '고객센터', '전화', '이메일', '수리'] },
];

// ===== BREADCRUMB MAP =====
const BREADCRUMBS = {
  'home':  [{ label: '홈' }],
  's1-1':  [{ label: '홈', page: 'home' }, { label: '제품 소개', page: 's1-1' }, { label: '주요 구성품' }],
  's1-2':  [{ label: '홈', page: 'home' }, { label: '제품 소개', page: 's1-1' }, { label: '각 부의 명칭' }],
  's1-3':  [{ label: '홈', page: 'home' }, { label: '제품 소개', page: 's1-1' }, { label: '키오스크 설치' }],
  's2-1':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: '전원 On/Off' }],
  's2-2':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: '사용전 기본 확인 사항' }],
  's2-4':  [{ label: '홈', page: 'home' }, { label: '기본 사용법', page: 's2-1' }, { label: '사용시 주의사항' }],
  's3-1':  [{ label: '홈', page: 'home' }, { label: '주요 기능', page: 's3-1' }, { label: '자동 청력 검사' }],
  's3-2':  [{ label: '홈', page: 'home' }, { label: '주요 기능', page: 's3-1' }, { label: '전용 앱 연동' }],
  's4-1':  [{ label: '홈', page: 'home' }, { label: '문제 해결', page: 's4-1' }, { label: 'FAQ' }],
  's4-3':  [{ label: '홈', page: 'home' }, { label: '문제 해결', page: 's4-1' }, { label: '초기화(Reset)' }],
  's5-1':  [{ label: '홈', page: 'home' }, { label: '제품 사양', page: 's5-1' }, { label: '상세 제원' }],
  's5-2':  [{ label: '홈', page: 'home' }, { label: '제품 사양', page: 's5-1' }, { label: '안전 주의사항' }],
  's5-3':  [{ label: '홈', page: 'home' }, { label: '제품 사양', page: 's5-1' }, { label: '고객센터' }],
};

const PAGE_SECTION_MAP = {
  's1-1': 's1', 's1-2': 's1', 's1-3': 's1',
  's2-1': 's2', 's2-2': 's2', 's2-4': 's2',
  's3-1': 's3', 's3-2': 's3',
  's4-1': 's4', 's4-3': 's4',
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
          <input type="text" id="searchInput" placeholder="매뉴얼 검색 (예: 기능, 초기화, 조작…)" autocomplete="off" />
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
              <a href="#" class="nav-link nav-top">제품 준비<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s1-1">주요 구성품</a></li>
                <li><a href="#" class="nav-link" data-page="s1-2">각 부의 명칭 및 기능</a></li>
                <li><a href="#" class="nav-link" data-page="s1-3">키오스크 설치</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s2">
              <a href="#" class="nav-link nav-top">기본 사용법<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s2-1">전원 On/Off</a></li>
                <li><a href="#" class="nav-link" data-page="s2-2">사용전 기본 확인 사항</a></li>
                <li><a href="#" class="nav-link" data-page="s2-4">사용시 주의사항</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s3">
              <a href="#" class="nav-link nav-top">주요 기능 활용<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s3-1">자동 청력 검사</a></li>
                <li><a href="#" class="nav-link" data-page="s3-2">전용 앱 연동 및 활용</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s4">
              <a href="#" class="nav-link nav-top">문제 해결<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s4-1">자주 묻는 질문 (FAQ)</a></li>
                <li><a href="#" class="nav-link" data-page="s4-3">초기화(Reset) 방법</a></li>
              </ul>
            </li>
            <li class="nav-item has-children" data-section="s5">
              <a href="#" class="nav-link nav-top">제품 사양 및 고객 지원<svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></a>
              <ul class="nav-sub">
                <li><a href="#" class="nav-link" data-page="s5-1">상세 제품 제원</a></li>
                <li><a href="#" class="nav-link" data-page="s5-2">안전 주의사항 및 규격</a></li>
                <li><a href="#" class="nav-link" data-page="s5-3">고객센터</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <main class="main-content" id="mainContent">
        <nav class="breadcrumb" id="breadcrumb" aria-label="현재 위치"></nav>
        <div id="pageContent">${contentHtml}</div>
        <p class="last-modified">최종수정.2026-11-12</p>
      </main>
    </div>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="https://www.audiso.co.kr" target="_blank" rel="noopener"><img src="${BASE}images/audiso_logo_h.svg" alt="Audiso" class="footer-logo" /></a>
        </div>
        <p class="footer-copy">©2026 Audiso Co., Ltd. All rights reserved.</p>
      </div>
    </footer>

    <div class="print-popup" id="printPopup">
      <button class="print-opt" id="printCurrent">현재 문서</button>
      <button class="print-opt" id="printAll">전체 문서</button>
    </div>
    <button id="printFab" class="print-fab" aria-label="PDF 출력">PDF</button>`;
})();

// ===== PRINT FAB =====
(function initPrint() {
  const fab     = document.getElementById('printFab');
  const popup   = document.getElementById('printPopup');

  function openPopup()  { popup.classList.add('open'); fab.classList.add('active'); }
  function closePopup() { popup.classList.remove('open'); fab.classList.remove('active'); }

  fab.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.classList.contains('open') ? closePopup() : openPopup();
  });

  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) closePopup();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  document.getElementById('printCurrent').addEventListener('click', () => {
    closePopup();
    window.print();
  });

  document.getElementById('printAll').addEventListener('click', async () => {
    closePopup();
    const pages = Object.entries(PAGE_MAP).filter(([id]) => id !== 'home');
    const styleUrl = BASE + 'style.css';

    const results = await Promise.all(pages.map(async ([, path]) => {
      try {
        const pageUrl = BASE + path;
        const res = await fetch(pageUrl);
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const pageBase = pageUrl.replace(/\/[^/]+$/, '/');
        doc.querySelectorAll('#pageContent img').forEach(img => {
          const src = img.getAttribute('src');
          if (src && !src.startsWith('http') && !src.startsWith('data:')) {
            img.setAttribute('src', new URL(src, pageBase).href);
          }
        });
        const content = doc.getElementById('pageContent');
        return content ? content.innerHTML : '';
      } catch { return null; }
    }));

    const sections = results.filter(Boolean).map(html =>
      `<div class="print-section">${html}</div>`
    ).join('');

    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) { alert('팝업이 차단되어 있습니다. 팝업을 허용 후 다시 시도해 주세요.'); return; }

    win.document.write(`<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8">
<title>WithHear 온라인 매뉴얼 - 전체</title>
<link rel="stylesheet" href="${styleUrl}">
<style>
@page { size: A4; margin: 20mm; }
body { background: #fff !important; }
.print-section { page-break-after: always; break-after: page; }
.print-section:last-child { page-break-after: avoid; break-after: avoid; }
img { max-width: 100% !important; height: auto !important; }
a { color: inherit !important; text-decoration: none !important; }
.alert-box, .step-num { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
</style>
</head><body>${sections}</body></html>`);
    win.document.close();
    win.addEventListener('load', () => { win.focus(); win.print(); });
  });
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
  if (page === 'home') { breadcrumb.innerHTML = ''; breadcrumb.style.display = 'none'; return; }
  breadcrumb.style.display = '';
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
  const lq = q.toLowerCase().trim();
  if (!lq) return [];
  return SEARCH_INDEX.map(item => {
    const tl = item.title.toLowerCase();
    let score = 0;
    if (tl === lq) score = 100;
    else if (tl.startsWith(lq)) score = 80;
    else if (tl.includes(lq)) score = 60;
    const matchedKw = item.keywords.find(k => k.toLowerCase().includes(lq));
    if (matchedKw && score < 40) score = 40;
    if (item.section.toLowerCase().includes(lq) && score < 20) score = 20;
    return { ...item, score, matchedKw: score < 60 ? matchedKw : null };
  }).filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
function hl(text, q) {
  return text.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'), '<mark>$1</mark>');
}
function renderDropdown(results, q) {
  if (!results.length) {
    searchDrop.innerHTML = '<div class="search-result-item" style="color:var(--c-text-3)">검색 결과가 없습니다.</div>';
  } else {
    searchDrop.innerHTML = results.map(r => {
      const sub = r.matchedKw ? `<span class="sri-kw">${hl(r.matchedKw, q)}</span>` : '';
      return `<div class="search-result-item" data-page="${r.page}">${sub}<span class="sri-title">${hl(r.title, q)}</span><span class="sri-section">${r.section}</span></div>`;
    }).join('');
    searchDrop.querySelectorAll('[data-page]').forEach(el =>
      el.addEventListener('click', () => { navigateTo(el.dataset.page); closeSearch(); })
    );
  }
  searchDrop.classList.add('open');
}
function closeSearch() { searchDrop.classList.remove('open'); searchDrop.innerHTML = ''; searchInput.value = ''; }

let st;
searchInput.addEventListener('input', () => {
  clearTimeout(st);
  const q = searchInput.value;
  if (!q.trim()) { closeSearch(); return; }
  st = setTimeout(() => renderDropdown(doSearch(q), q), 120);
});
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeSearch(); searchInput.blur(); return; }
  const items = [...searchDrop.querySelectorAll('[data-page]')];
  if (!items.length) return;
  const cur = searchDrop.querySelector('.search-result-item.focused');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = cur ? (items[items.indexOf(cur) + 1] || items[0]) : items[0];
    cur?.classList.remove('focused'); next.classList.add('focused');
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = cur ? (items[items.indexOf(cur) - 1] || items[items.length - 1]) : items[items.length - 1];
    cur?.classList.remove('focused'); prev.classList.add('focused');
  } else if (e.key === 'Enter') {
    const target = cur || items[0];
    if (target) { navigateTo(target.dataset.page); closeSearch(); }
  }
});

// ===== INIT =====
updateBreadcrumb(CURRENT_PAGE);
updateLnbActive(CURRENT_PAGE);
