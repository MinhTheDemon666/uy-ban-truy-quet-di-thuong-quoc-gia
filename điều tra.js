const DB_URL = "https://dac-api.minhthedemon2009.workers.dev";
window.cancelTeamSelection = null;

const INV_I18N = {
  en: {
    teamHeading: "ASSIGNMENT UNIT IDENTIFICATION",
    teamDesc: "PERSONNEL ASSIGNMENT SYSTEM // INVESTIGATION BUREAU<br>Please identify the investigation team you belong to.",
    soloSub: "INDEPENDENT AGENT",
    soloDesc: "Personnel operating independently, outside the regular team structure.",
    currentUnit: "CURRENTLY SELECTED UNIT",
    confirmBtn: "CONFIRM →",
    backBtn: "← RETURN",
    topLabel: "INVESTIGATION BUREAU // CỤC ĐIỀU TRA",
    mainTitle: "NATIONAL ANOMALY SWEEP COMMISSION",
    sec1: "// 1. INVESTIGATION TEAMS STATUS (36 ACTIVE UNITS)",
    sec1Loading: "Establishing duty roster...",
    teamPrefix: "Unit",
    statusBusy: "[ON ACTIVE MISSION]",
    statusRest: "[STANDBY]",
    sec2: "// 2. ANOMALY DOSSIER ARCHIVE",
    sec2Loading: "Connecting to headquarters...",
    sec2Error: "⚠ HEADQUARTERS CONNECTION ERROR",
    sec2Empty: "No archived dossiers found. Click (+ ADD DOSSIER) below to file a new report.",
    addBtn: "＋ ADD DOSSIER",
    refreshBtn: "↻ REFRESH",
    resizerTitle: "Hold and drag up/down to expand or collapse",
    ctxEdit: "EDIT DOSSIER",
    ctxDelete: "DELETE DOSSIER",
    modalDefaultTitle: "ANOMALY DOSSIER",
    closeBtn: "CLOSE ×",
    openGroup: "--- UNRESOLVED DOSSIERS",
    doneGroup: "--- RESOLVED DOSSIERS",
    unknownLoc: "Unknown",
    untitled: "Untitled Dossier",
    agentLabel: "Agent:",
    soloAgent: "Independent Investigation Agent",
    unitAgentPrefix: "Investigation Unit #",
    statusLabel: "Status:",
    cardHint: "LEFT CLICK: VIEW // RIGHT CLICK: OPTIONS",
    noData: "No data",
    detailTitle: "ANOMALY DOSSIER DETAILS",
    fId: "DOSSIER ID",
    fTitle: "TITLE / INCIDENT",
    fLoc: "LOCATION",
    fAuthor: "FILED BY",
    fTime: "TIMESTAMP",
    fStatus: "STATUS",
stDone: "RESOLVED",
stOpen: "UNRESOLVED",
stProgress: "IN PROGRESS",
progressGroup: "--- DOSSIERS UNDER PROCESSING",
    fDesc: "INCIDENT REPORT DETAILS",
    noDesc: "No description provided.",
    addModalTitle: "FILE NEW ANOMALY REPORT",
    inTitle: "TITLE / INCIDENT (*)",
    phTitle: "Name of anomalous phenomenon...",
    inLoc: "COORDINATES / PROVINCE (*)",
    phLoc: "E.g., Hanoi, Lam Dong...",
    inDetail: "INCIDENT REPORT DETAILS",
    phDetail: "Detailed description of the anomaly...",
    inAuthor: "FILED BY (AGENT / STAFF)",
    optional: "(OPTIONAL)",
    phAuthor: "Agent name or ID code...",
    submitBtn: "TRANSMIT TO SYSTEM",
    cancelBtn: "CANCEL",
    errRequired: "PLEASE ENTER TITLE AND LOCATION.",
    errCreate: "Unable to create new dossier.",
    errConn: "Unable to connect to headquarters.",
    errPrefix: "ERROR: ",
    editModalTitle: "EDIT DOSSIER",
    saveBtn: "SAVE CHANGES",
    errUpdate: "Unable to update dossier.",
    errSave: "Unable to save changes.",
    confirmDel: "CONFIRM DOSSIER DELETION?\n\n[{loc}] {title}\n\nThis action cannot be undone.",
    errDelete: "Unable to delete dossier.",
    alertDelErr: "DELETION ERROR: "
  },
  vi: {
    teamHeading: "XÁC ĐỊNH ĐƠN VỊ CÔNG TÁC",
    teamDesc: "HỆ THỐNG PHÂN CÔNG NHÂN SỰ // INVESTIGATION BUREAU<br>Vui lòng xác định đội điều tra mà bạn trực thuộc.",
    soloSub: "ĐẶC VỤ ĐỘC LẬP",
    soloDesc: "Personnel operating independently, outside the regular team structure.<br>Nhân sự hoạt động độc lập, không trực thuộc các đội điều tra thông thường.",
    currentUnit: "ĐƠN VỊ ĐANG ĐƯỢC CHỌN",
    confirmBtn: "XÁC NHẬN →",
    backBtn: "← QUAY LẠI",
    topLabel: "CỤC ĐIỀU TRA // INVESTIGATION BUREAU",
    mainTitle: "ỦY BAN TRUY QUÉT DỊ THƯỜNG QUỐC GIA",
    sec1: "// 1. TRẠNG THÁI CÁC ĐỘI ĐIỀU TRA (36 ĐỘI TRỰC)",
    sec1Loading: "Đang thiết lập biên độ trực ban...",
    teamPrefix: "Đội",
    statusBusy: "[ĐANG THỰC THI NHIỆM VỤ]",
    statusRest: "[ĐANG NGHỈ]",
    sec2: "// 2. KHO HỒ SƠ DỊ THƯỜNG",
    sec2Loading: "Đang kết nối tổng bộ...",
    sec2Error: "⚠ LỖI KẾT NỐI TỔNG BỘ",
    sec2Empty: "Chưa có hồ sơ lưu trữ. Bấm nút (+ THÊM HỒ SƠ) phía dưới để lập hồ sơ mới.",
    addBtn: "＋ THÊM HỒ SƠ",
    refreshBtn: "↻ LÀM MỚI",
    resizerTitle: "Giữ chuột kéo lên/xuống để mở rộng hoặc thu gọn",
    ctxEdit: "CHỈNH SỬA",
    ctxDelete: "XÓA HỒ SƠ",
    modalDefaultTitle: "HỒ SƠ DỊ THƯỜNG",
    closeBtn: "ĐÓNG ×",
    openGroup: "--- HỒ SƠ CHƯA XỬ LÝ",
    doneGroup: "--- HỒ SƠ ĐÃ XỬ LÝ",
    unknownLoc: "Chưa rõ",
    untitled: "Hồ sơ không tên",
    agentLabel: "Đặc vụ:",
    soloAgent: "Đặc vụ Điều Tra Độc Lập",
    unitAgentPrefix: "Nhân viên Đội Điều Tra số ",
    statusLabel: "Trạng thái:",
    cardHint: "CHUỘT TRÁI: XEM // CHUỘT PHẢI: TÙY CHỌN",
    noData: "Không có dữ liệu",
    detailTitle: "CHI TIẾT HỒ SƠ DỊ THƯỜNG",
    fId: "MÃ HỒ SƠ",
    fTitle: "TIÊU ĐỀ / VỤ VIỆC",
    fLoc: "ĐỊA ĐIỂM",
    fAuthor: "NGƯỜI LẬP",
    fTime: "THỜI GIAN GHI NHẬN",
    fStatus: "TRẠNG THÁI",
stDone: "ĐÃ HOÀN TẤT",
stOpen: "CHƯA XỬ LÝ",
stProgress: "ĐANG XỬ LÝ",
progressGroup: "--- HỒ SƠ ĐANG XỬ LÝ",
    fDesc: "CHI TIẾT DIỄN BIẾN",
    noDesc: "Không có nội dung mô tả.",
    addModalTitle: "LẬP HỒ SƠ BÁO CÁO MỚI",
    inTitle: "TIÊU ĐỀ / VỤ VIỆC (*)",
    phTitle: "Tên hiện tượng dị thường...",
    inLoc: "TỌA ĐỘ / TỈNH THÀNH (*)",
    phLoc: "VD: Hà Nội, Lâm Đồng...",
    inDetail: "CHI TIẾT DIỄN BIẾN",
    phDetail: "Mô tả tường tận dị tượng...",
    inAuthor: "NGƯỜI LẬP (ĐẶC VỤ / NHÂN VIÊN)",
    optional: "(KHÔNG BẮT BUỘC)",
    phAuthor: "Tên hoặc mã số đặc vụ...",
    submitBtn: "GỬI LÊN HỆ THỐNG",
    cancelBtn: "HỦY",
    errRequired: "VUI LÒNG NHẬP TIÊU ĐỀ VÀ ĐỊA ĐIỂM.",
    errCreate: "Không thể tạo hồ sơ mới.",
    errConn: "Không thể kết nối tổng bộ.",
    errPrefix: "LỖI: ",
    editModalTitle: "CHỈNH SỬA HỒ SƠ",
    saveBtn: "LƯU THAY ĐỔI",
    errUpdate: "Không thể cập nhật hồ sơ.",
    errSave: "Không thể lưu thay đổi.",
    confirmDel: "XÁC NHẬN XÓA HỒ SƠ?\n\n[{loc}] {title}\n\nHành động này không thể hoàn tác.",
    errDelete: "Không thể xóa hồ sơ.",
    alertDelErr: "LỖI XÓA HỒ SƠ: "
  }
};

const minigameStyle = document.createElement("style");
minigameStyle.textContent = `
.mg-overlay { position: fixed; inset: 0; z-index: 1150; display: flex; align-items: center; justify-content: center; background: rgba(5,8,7,0.92); backdrop-filter: blur(4px); padding: 15px; animation: mgFadeIn 0.3s ease-out; }
@keyframes mgFadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
.mg-container { width: 100%; max-width: 850px; background: #0b120e; border: 1px solid var(--green); box-shadow: 0 0 50px rgba(140,255,155,0.15); padding: 22px; position: relative; font-family: 'IBM Plex Mono', monospace; color: #a8c5ae; }
.mg-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; padding-bottom: 15px; border-bottom: 1px solid #243d2b; }
.mg-header h2 { color: var(--green); font-size: 16px; font-weight: 600; letter-spacing: 1.5px; }
.mg-header p { color: var(--dim); font-size: 10px; margin-top: 5px; letter-spacing: 1.5px; }
.mg-warning { margin: 15px 0; padding: 10px 14px; border-left: 2px solid #d8bd73; background: #17170f; color: #d8bd73; font-size: 10px; line-height: 1.7; }
.mg-status-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 15px; }
.mg-status-box { background: #0e1912; border: 1px solid #243d2b; padding: 10px 14px; }
.mg-status-box span { display: block; color: var(--dim); font-size: 9px; letter-spacing: 1px; margin-bottom: 5px; }
.mg-status-box strong { color: var(--green); font-size: 20px; font-weight: 500; }
.mg-status-box strong.danger { color: var(--red); animation: mgPulse 0.7s infinite alternate; }
@keyframes mgPulse { from { opacity: 1; } to { opacity: 0.4; } }
.mg-progress-section { margin-bottom: 15px; }
.mg-progress-label { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 6px; color: var(--dim); }
.mg-progress-label strong { color: var(--green); }
.mg-progress-track { width: 100%; height: 8px; background: #17251b; border: 1px solid #243d2b; overflow: hidden; }
.mg-progress-fill { width: 0%; height: 100%; background: var(--green); box-shadow: 0 0 10px rgba(140,255,155,0.4); transition: width 0.2s ease, background 0.2s ease; }
.mg-progress-fill.damage { background: var(--red); box-shadow: 0 0 10px rgba(255,102,102,0.4); }
.mg-arena { position: relative; width: 100%; height: 320px; overflow: hidden; border: 1px solid #365640; background-color: #080e0a; background-image: linear-gradient(#15221955 1px, transparent 1px), linear-gradient(90deg, #15221955 1px, transparent 1px); background-size: 25px 25px; }
.mg-arena.damage-flash { animation: mgFlash 0.2s ease; }
@keyframes mgFlash { 0%, 100% { border-color: #365640; } 50% { border-color: var(--red); box-shadow: inset 0 0 20px rgba(255,102,102,0.3); } }
.mg-target { position: absolute; width: 78px; height: 42px; display: flex; justify-content: center; align-items: center; font-family: inherit; font-size: 11px; font-weight: 700; letter-spacing: 1px; cursor: crosshair; z-index: 4; color: var(--green); border: 1px solid var(--green); background: #102017; box-shadow: 0 0 10px rgba(140,255,155,0.2); animation: mgTargetIn 0.15s ease-out; }
.mg-target:hover { filter: brightness(1.4); transform: scale(1.05); }
@keyframes mgTargetIn { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
.mg-arena-overlay { position: absolute; inset: 0; z-index: 6; display: flex; align-items: center; justify-content: center; background: rgba(7,11,9,0.95); padding: 20px; text-align: center; }
.mg-overlay-content { max-width: 400px; }
.mg-overlay-title { color: var(--green); font-size: 16px; font-weight: 600; letter-spacing: 1px; margin-bottom: 10px; }
.mg-overlay-desc { color: var(--soft); font-size: 10px; line-height: 1.8; margin-bottom: 18px; text-align: left; }
.mg-btn-primary { background: #102719; color: var(--green); border: 1px solid #578c61; padding: 11px 18px; font-family: inherit; font-size: 10px; font-weight: 600; letter-spacing: 1px; cursor: pointer; transition: 0.2s; }
.mg-btn-primary:hover { background: #1b3824; box-shadow: 0 0 12px rgba(140,255,155,0.3); }
.mg-feedback { min-height: 30px; display: flex; align-items: center; justify-content: center; font-size: 10px; letter-spacing: 0.5px; color: var(--dim); margin-top: 8px; }
.mg-feedback.good { color: var(--green); }
.mg-feedback.bad { color: var(--red); }
.mg-footer { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding-top: 12px; margin-top: 10px; border-top: 1px solid #243d2b; }
.mg-footer p { color: var(--dim); font-size: 9px; line-height: 1.6; }
.mg-btn-skip { background: transparent; border: 1px solid #694444; color: #d98282; padding: 9px 14px; font-family: inherit; font-size: 9px; letter-spacing: 1px; cursor: pointer; }
.mg-btn-skip:hover { background: #2a1414; }
`;
document.head.appendChild(minigameStyle);

document.getElementById("dept-investigate").addEventListener("click", async () => {
  const curLang = (typeof LANG !== "undefined" && INV_I18N[LANG]) ? LANG : "en";
  const L = INV_I18N[curLang];

  // ===== MENU CHỌN ĐỘI ĐIỀU TRA =====
  let selectedInvestigationTeam = localStorage.getItem("nasc_investigation_team") || "01";

  const teamScreen = document.createElement("section");
  teamScreen.className = "screen hidden team-select-screen";

  teamScreen.innerHTML = `
    <div class="team-select-shell">
      <div class="team-select-top">
        <span>N.A.S.C // PERSONNEL ASSIGNMENT</span>
        <span class="team-system-status">● SYSTEM ONLINE</span>
      </div>
      <h1 class="team-select-heading">${L.teamHeading}</h1>
      <p class="team-select-desc">${L.teamDesc}</p>
      <div class="team-select-grid" id="team-select-grid">
        ${Array.from({length:36},(_,i)=>{
          const id=String(i+1).padStart(2,"0");
          return `<button type="button" class="team-select-btn" data-team="${id}"><span class="team-code">${id}</span><span class="team-label">TEAM UNIT</span></button>`;
        }).join("")}
      </div>
      <div class="team-solo-option">
        <button type="button" id="team-select-solo" class="team-solo-btn">
          <span class="team-solo-icon">◆</span>
          <span class="team-solo-text"><strong>INDEPENDENT AGENT</strong><small>${L.soloSub}</small></span>
          <span class="team-solo-check">✓</span>
        </button>
        <p class="team-solo-desc">${L.soloDesc}</p>
      </div>
      <div class="team-select-bottom">
        <div>
          <div class="team-current-label">${L.currentUnit}</div>
          <div class="team-current-value" id="team-select-info">TEAM-${selectedInvestigationTeam}</div>
        </div>
        <div class="team-select-actions">
          <button type="button" id="team-select-confirm">${L.confirmBtn}</button>
          <button type="button" id="team-select-back" class="back">${L.backBtn}</button>
        </div>
      </div>
    </div>
  `;

  stage.appendChild(teamScreen);

  await transition(() => {
    $("dept-screen").classList.add("hidden");
    teamScreen.classList.remove("hidden");
  });

  const teamGrid = teamScreen.querySelector("#team-select-grid");
  const teamInfo = teamScreen.querySelector("#team-select-info");

  function updateTeamSelection() {
    teamGrid.querySelectorAll("[data-team]").forEach(btn => {
      const active = btn.dataset.team === selectedInvestigationTeam;
      btn.classList.toggle("selected", active);
    });
    const soloBtn = teamScreen.querySelector("#team-select-solo");
    soloBtn.classList.toggle("selected", selectedInvestigationTeam === "SOLO");
    teamInfo.textContent = selectedInvestigationTeam === "SOLO" ? "INDEPENDENT AGENT" : "TEAM-" + selectedInvestigationTeam;
  }

  updateTeamSelection();

  teamGrid.addEventListener("click", event => {
    const btn = event.target.closest("[data-team]");
    if (!btn) return;
    selectedInvestigationTeam = btn.dataset.team;
    updateTeamSelection();
  });

  teamScreen.querySelector("#team-select-solo").addEventListener("click", () => {
    selectedInvestigationTeam = "SOLO";
    updateTeamSelection();
  });

  let resolveTeamSelection;
  let selectionFinished = false;
  const teamSelectionPromise = new Promise(resolve => { resolveTeamSelection = resolve; });

  function finishTeamSelection(value) {
    if (selectionFinished) return;
    selectionFinished = true;
    window.cancelTeamSelection = null;
    resolveTeamSelection(value);
  }

  window.cancelTeamSelection = () => {
    teamScreen.remove();
    finishTeamSelection("admin");
  };

  teamScreen.querySelector("#team-select-confirm").addEventListener("click", () => {
    localStorage.setItem("nasc_investigation_team", selectedInvestigationTeam);
    finishTeamSelection(true);
  });

  teamScreen.querySelector("#team-select-back").addEventListener("click", () => {
    finishTeamSelection(false);
  });

  const confirmed = await teamSelectionPromise;
  teamScreen.remove();

  if (confirmed !== true) {
    if (confirmed === false) {
      await transition(() => { $("dept-screen").classList.remove("hidden"); });
    }
    return;
  }
  // ===== KẾT THÚC MENU CHỌN ĐỘI =====

  const invHTML = `
    <section id="investigate-screen" class="screen hidden">
      <div class="top-label">${L.topLabel}</div>
      <h1 class="question" style="font-size:21px;margin-bottom:6px;">${L.mainTitle}</h1>
      <div class="inv-container">
        <div class="inv-top-bar">
          <div class="inv-team-section">
            <span class="inv-heading">${L.sec1}</span>
            <div id="box-teams" class="inv-scroll inv-teams">
              <div style="color:var(--dim);">${L.sec1Loading}</div>
            </div>
          </div>
        </div>
        <div id="inv-resizer" class="inv-resizer" title="${L.resizerTitle}"><span>═ ═ ═</span></div>
        <div class="inv-panel">
          <div class="inv-panel-head">
            <span class="inv-heading">${L.sec2}</span>
          </div>
          <div id="box-dossiers" class="inv-scroll inv-dossiers">
            <div style="color:var(--dim);">${L.sec2Loading}</div>
          </div>
          <div class="inv-bottom-actions">
            <button id="btn-open-add" class="inv-plus-btn">${L.addBtn}</button>
            <button id="btn-refresh" class="inv-refresh">${L.refreshBtn}</button>
          </div>
        </div>
      </div>
      <div class="button-group inv-back"><button class="back" data-back>${L.backBtn}</button></div>
      <div id="dossier-context-menu" class="dossier-context-menu hidden">
        <button type="button" data-action="edit">${L.ctxEdit}</button>
        <button type="button" data-action="delete" class="danger">${L.ctxDelete}</button>
      </div>
      <div id="dossier-modal" class="dossier-modal hidden">
        <div class="dossier-modal-box">
          <div class="dossier-modal-head">
            <span id="dossier-modal-title">${L.modalDefaultTitle}</span>
            <button type="button" id="dossier-modal-close" class="inv-modal-close">${L.closeBtn}</button>
          </div>
          <div id="dossier-modal-content" class="dossier-modal-content"></div>
          <div id="dossier-modal-actions" class="dossier-modal-actions"></div>
        </div>
      </div>
    </section>
  `;

  const temp = document.createElement("div");
  temp.innerHTML = invHTML;
  const screenEl = temp.querySelector("#investigate-screen");
  stage.appendChild(screenEl);
  await transition(() => goCustomScreen(screenEl));

  const topBar = screenEl.querySelector(".inv-top-bar");
  const resizer = screenEl.querySelector("#inv-resizer");
  let isResizing = false;

  const startResize = (e) => {
    isResizing = true;
    pauseGlitch = true;
    resizer.classList.add("dragging");
    document.body.style.cursor = "ns-resize";
    e.preventDefault();
  };

  const doResize = (e) => {
    if (!isResizing) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rect = topBar.getBoundingClientRect();
    topBar.style.height = (clientY - rect.top) + "px";
  };

  const stopResize = () => {
    if (!isResizing) return;
    isResizing = false;
    pauseGlitch = false;
    resizer.classList.remove("dragging");
    document.body.style.cursor = "";
  };

  resizer.addEventListener("mousedown", startResize);
  resizer.addEventListener("touchstart", startResize, { passive: false });
  window.addEventListener("mousemove", doResize);
  window.addEventListener("touchmove", doResize, { passive: false });
  window.addEventListener("mouseup", stopResize);
  window.addEventListener("touchend", stopResize);

  const boxTeams = screenEl.querySelector("#box-teams");
  const boxDossiers = screenEl.querySelector("#box-dossiers");
  const contextMenu = screenEl.querySelector("#dossier-context-menu");
  const modal = screenEl.querySelector("#dossier-modal");
  const modalTitle = screenEl.querySelector("#dossier-modal-title");
  const modalContent = screenEl.querySelector("#dossier-modal-content");
  const modalActions = screenEl.querySelector("#dossier-modal-actions");

  let pollInterval = null;
  let teamInterval = null;
  let currentDossier = null;
  let editingDossierId = null;
  let editingDossierTeam = null;
  let latestFiles = [];

  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));

  const teamsData = [];
  const now = Date.now();
  for (let i = 1; i <= 36; i++) {
    teamsData.push({
      id: String(i).padStart(2, "0"),
      busy: Math.random() < 0.5,
      nextToggle: now + (Math.random() * 40 + 15) * 60 * 1000
    });
  }

  function initTeamsDOM() {
    boxTeams.innerHTML = teamsData.map(t => {
      const statusText = t.busy ? L.statusBusy : L.statusRest;
      const statusColor = t.busy ? "var(--green)" : "var(--dim)";
      return `<div class="inv-team-row">• ${L.teamPrefix} ${t.id}: <span id="team-st-${t.id}" style="color:${statusColor};">${statusText}</span></div>`;
    }).join("");
  }

  function updateTeamsIndependent() {
    if (document.hidden) return;
    const currentTime = Date.now();
    teamsData.forEach(t => {
      if (currentTime >= t.nextToggle) {
        t.busy = !t.busy;
        t.nextToggle = currentTime + (Math.random() * 40 + 20) * 60 * 1000;
        const span = screenEl.querySelector(`#team-st-${t.id}`);
        if (span) {
          span.textContent = t.busy ? L.statusBusy : L.statusRest;
          span.style.color = t.busy ? "var(--green)" : "var(--dim)";
        }
      }
    });
  }

  let lastSig = "";
  async function loadFiles() {
    try {
      const r = await fetch(DB_URL);
      if (!r.ok) throw new Error("GET failed");
      const data = await r.json();
      if (!Array.isArray(data)) throw new Error("Invalid database response");
      latestFiles = data;
      const sig = JSON.stringify(data);
      if (sig !== lastSig) { lastSig = sig; renderData(data); }
    } catch (err) {
      lastSig = ""; boxDossiers.innerHTML = `<div class="inv-error">${L.sec2Error}</div>`;
    }
  }

  function renderData(list) {
    if (!list.length) {
      boxDossiers.innerHTML = `<div class="inv-empty">${L.sec2Empty}</div>`;
      return;
    }
const getStatus = item => {
  const status = String(item.status || "open")
    .toLowerCase()
    .replace(/[\s-]+/g, "_");

  if (status === "done") return "done";

  if (status === "in_progress" || status === "active") {
    return "in_progress";
  }

  return "open";
};

const doneList = list.filter(x => getStatus(x) === "done");
const progressList = list.filter(x => getStatus(x) === "in_progress");
const openList = list.filter(x => getStatus(x) === "open");
    
const makeCard = (item, status) => {
  const statusText =
    status === "done" ? L.stDone :
    status === "in_progress" ? L.stProgress :
    L.stOpen;

  const statusClass =
    status === "done" ? "status-done" :
    status === "in_progress" ? "status-progress" :
    "status-open";

  return `
    <button type="button" class="dossier-card ${status === "done" ? "is-done" : ""}" data-id="${escapeHTML(item.id)}">
      <span class="dossier-card-title">[${escapeHTML(item.loc || L.unknownLoc)}] ${escapeHTML(item.title || L.untitled)}</span>
      <span class="dossier-card-meta">
        ${L.agentLabel} ${escapeHTML(item.author || (item.team === "SOLO" ? L.soloAgent : `${L.unitAgentPrefix}${item.team || "01"}`))} |
        ${L.statusLabel} <span class="${statusClass}">${statusText}</span>
      </span>
      <span class="dossier-card-hint">${L.cardHint}</span>
    </button>
  `;
};

   let html = "";

if (openList.length) {
  html += `<div class="inv-list-label open-label">${L.openGroup} (${openList.length}) ---</div>`;
  html += `<div class="dossier-grid">${openList.map(item => makeCard(item, "open")).join("")}</div>`;
}

if (progressList.length) {
  html += `<div class="inv-list-label">${L.progressGroup} (${progressList.length}) ---</div>`;
  html += `<div class="dossier-grid">${progressList.map(item => makeCard(item, "in_progress")).join("")}</div>`;
}

if (doneList.length) {
  html += `<div class="inv-list-label done-label">${L.doneGroup} (${doneList.length}) ---</div>`;
  html += `<div class="dossier-grid">${doneList.map(item => makeCard(item, "done")).join("")}</div>`;
}

boxDossiers.innerHTML = html;
  }

  function closeContextMenu() {
    contextMenu.classList.add("hidden");
    currentDossier = null;
  }

  function showModal(title, content, actions = []) {
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modalActions.replaceChildren();
    actions.forEach(action => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = action.label;
      if (action.className) button.className = action.className;
      button.addEventListener("click", action.onClick);
      modalActions.appendChild(button);
    });
    modal.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
    modalContent.replaceChildren();
    modalActions.replaceChildren();
  }

  function findDossier(id) {
    return latestFiles.find(item => String(item.id) === String(id));
  }

  function showDetails(item) {
    if (!item) return;
    const dateText = item.time ? new Date(item.time).toLocaleString(curLang === "vi" ? "vi-VN" : "en-US") : L.noData;
    showModal(L.detailTitle, `
      <div class="detail-row"><span>${L.fId}</span><strong>${escapeHTML(item.id)}</strong></div>
      <div class="detail-row"><span>${L.fTitle}</span><strong>${escapeHTML(item.title)}</strong></div>
      <div class="detail-row"><span>${L.fLoc}</span><strong>${escapeHTML(item.loc)}</strong></div>
      <div class="detail-row"><span>${L.fAuthor}</span><strong>${escapeHTML(item.author)}</strong></div>
      <div class="detail-row"><span>${L.fTime}</span><strong>${escapeHTML(dateText)}</strong></div>
      <div class="detail-row"><span>${L.fStatus}</span><strong>${
  String(item.status || "open").toLowerCase().replace(/[\s-]+/g, "_") === "done"
    ? L.stDone
    : ["in_progress", "active"].includes(String(item.status || "").toLowerCase().replace(/[\s-]+/g, "_"))
      ? L.stProgress
      : L.stOpen
}</strong></div>
      <div class="detail-description"><span>${L.fDesc}</span><p>${escapeHTML(item.detail || L.noDesc)}</p></div>
    `, [{ label: L.cancelBtn === "CANCEL" ? "CLOSE" : "ĐÓNG", className: "back", onClick: closeModal }]);
  }

  // ===== TÍCH HỢP MINIGAME KHI ẤN THÊM HỒ SƠ =====
  function openAddModal() {
    runEvidenceMinigame(() => {
      showModal(L.addModalTitle, `
        <div class="inv-field"><label>${L.inTitle}</label><input id="modal-input-title" type="text" placeholder="${L.phTitle}"></div>
        <div class="inv-field"><label>${L.inLoc}</label><input id="modal-input-loc" type="text" placeholder="${L.phLoc}"></div>
        <div class="inv-field"><label>${L.inDetail}</label><textarea id="modal-input-detail" placeholder="${L.phDetail}"></textarea></div>
        <div class="inv-field"><label>${L.inAuthor} <span style="color:var(--dim);font-size:11px;">${L.optional}</span></label><input id="modal-input-author" type="text" placeholder="${L.phAuthor}"></div>
        <div id="modal-add-error" class="inv-error"></div>
      `, [
        { label: L.submitBtn, onClick: submitNewDossier },
        { label: L.cancelBtn, className: "back", onClick: closeModal }
      ]);
    });
  }

  function runEvidenceMinigame(onComplete) {
    const mgOverlay = document.createElement("div");
    mgOverlay.className = "mg-overlay";
    mgOverlay.innerHTML = `
      <div class="mg-container">
        <header class="mg-header">
          <div>
            <h2>NASC // EVIDENCE VERIFICATION</h2>
            <p>NATIONAL ANOMALY SWEEP COMMISSION</p>
          </div>
          <div style="border:1px solid #315c3b;color:var(--green);padding:5px 8px;font-size:9px;">SECURE PROTOCOL</div>
        </header>
        <div class="mg-warning">
          <strong>[ HỆ THỐNG KIỂM ĐỊNH ]</strong>
          YÊU CẦU XÁC MINH CHỨNG CỨ TRƯỚC KHI LẬP HỒ SƠ.<br>
          Bấm <strong>THẬT</strong> khi xuất hiện chứng cứ thật. Bỏ qua (không bấm) khi xuất hiện chứng cứ giả.
        </div>
        <div class="mg-status-grid">
          <div class="mg-status-box"><span>THỜI GIAN CÒN LẠI</span><strong id="mg-timer">20.0s</strong></div>
          <div class="mg-status-box"><span>TRẠNG THÁI</span><strong id="mg-status">CHỜ XỬ LÝ</strong></div>
        </div>
        <div class="mg-progress-section">
          <div class="mg-progress-label"><span>VERIFICATION PROGRESS</span><strong id="mg-prog-label">0 / 100</strong></div>
          <div class="mg-progress-track"><div class="mg-progress-fill" id="mg-prog-fill"></div></div>
        </div>
        <div class="mg-arena" id="mg-arena">
          <div style="position:absolute;top:10px;left:12px;color:#365640;font-size:9px;pointer-events:none;">NASC // SECURE ZONE</div>
          <div style="position:absolute;right:12px;bottom:10px;color:#365640;font-size:9px;pointer-events:none;">SIGNAL ACTIVE</div>
          <div class="mg-arena-overlay" id="mg-arena-overlay">
            <div class="mg-overlay-content">
              <div class="mg-overlay-title" id="mg-title">EVIDENCE VERIFICATION</div>
              <div class="mg-overlay-desc" id="mg-desc">
                HỆ THỐNG ĐANG CHỜ XÁC NHẬN.<br><br>
                <strong style="color:#8cff9b;">THẬT: PHẢI NHẤN</strong> (+10% tiến độ)<br>
                <strong style="color:#ff6666;">GIẢ: ĐỂ YÊN KHÔNG NHẤN</strong> (+10% tiến độ)<br><br>
                <strong style="color:#ff6666;">NHẤN GIẢ HOẶC BỎ SÓT THẬT: -10%</strong><br><br>
                Đạt 100% tiến độ hoặc bấm bỏ qua để vào biểu mẫu.
              </div>
              <button class="mg-btn-primary" id="mg-start-btn">BẮT ĐẦU KIỂM ĐỊNH</button>
            </div>
          </div>
        </div>
        <div class="mg-feedback" id="mg-feedback">HỆ THỐNG ĐANG CHỜ KHỞI TẠO...</div>
        <footer class="mg-footer">
          <p>AUTHORIZED PERSONNEL ONLY<br>NASC INTERNAL SYSTEM // EVIDENCE DIVISION</p>
          <button class="mg-btn-skip" id="mg-skip-btn">BỎ QUA KIỂM ĐỊNH →</button>
        </footer>
      </div>
    `;
    document.body.appendChild(mgOverlay);

    const arenaEl = mgOverlay.querySelector("#mg-arena");
    const overlayEl = mgOverlay.querySelector("#mg-arena-overlay");
    const titleEl = mgOverlay.querySelector("#mg-title");
    const descEl = mgOverlay.querySelector("#mg-desc");
    const startBtn = mgOverlay.querySelector("#mg-start-btn");
    const skipBtn = mgOverlay.querySelector("#mg-skip-btn");
    const timerEl = mgOverlay.querySelector("#mg-timer");
    const statusEl = mgOverlay.querySelector("#mg-status");
    const progLabel = mgOverlay.querySelector("#mg-prog-label");
    const progFill = mgOverlay.querySelector("#mg-prog-fill");
    const feedbackEl = mgOverlay.querySelector("#mg-feedback");

    const TARGET_DURATION = 950; //
    let duration = 20, timeLeft = duration, progress = 0;
    let running = false, finished = false, targetEl = null, currentRoundId = 0;
    let timerInterval = null, targetTimeout = null, nextTimeout = null;

    function updateUI() {
      timerEl.textContent = timeLeft.toFixed(1) + "s";
      progLabel.textContent = progress + " / 100";
      progFill.style.width = progress + "%";
      timerEl.classList.toggle("danger", timeLeft <= 5);
    }

    function setFeedback(msg, type = "") {
      feedbackEl.textContent = msg;
      feedbackEl.className = "mg-feedback " + type;
    }

    function addProgress(amt) {
      if (!running) return;
      progress = Math.max(0, Math.min(100, progress + amt));
      progFill.classList.toggle("damage", amt < 0);
      updateUI();
      if (amt < 0) {
        arenaEl.classList.remove("damage-flash");
        void arenaEl.offsetWidth;
        arenaEl.classList.add("damage-flash");
      }
      if (progress >= 100) finishMg("success");
    }

    function removeTarget() {
      clearTimeout(targetTimeout);
      targetTimeout = null;
      if (targetEl) { targetEl.remove(); targetEl = null; }
    }

    function stopAll() {
      clearInterval(timerInterval);
      clearTimeout(targetTimeout);
      clearTimeout(nextTimeout);
    }

    function finishMg(res) {
      if (finished) return;
      finished = true;
      running = false;
      currentRoundId++;
      stopAll();
      removeTarget();

      overlayEl.style.display = "flex";
      if (res === "success") {
        titleEl.textContent = "VERIFICATION SUCCESSFUL";
        titleEl.style.color = "#8cff9b";
        descEl.innerHTML = `QUY TRÌNH KIỂM ĐỊNH HOÀN TẤT.<br><br>TIẾN ĐỘ: ${progress}%<br>HỆ THỐNG ĐÃ XÁC THỰC QUYỀN LẬP HỒ SƠ.`;
        startBtn.textContent = "TIẾP TỤC VÀO BIỂU MẪU";
      } else if (res === "failed") {
        titleEl.textContent = "VERIFICATION FAILED";
        titleEl.style.color = "#ff6666";
        descEl.innerHTML = `QUY TRÌNH THẤT BẠI (HẾT GIỜ).<br><br>TIẾN ĐỘ: ${progress}%<br>Bạn vẫn có thể tiếp tục hoặc thử lại.`;
        startBtn.textContent = "THỬ LẠI";
      } else {
        titleEl.textContent = "VERIFICATION SKIPPED";
        titleEl.style.color = "#d8bd73";
        descEl.innerHTML = `QUY TRÌNH KIỂM ĐỊNH ĐÃ BỊ BỎ QUA.<br><br>Đang chuyển hướng đến biểu mẫu...`;
        startBtn.style.display = "none";
        setTimeout(() => { mgOverlay.remove(); onComplete(); }, 600);
        return;
      }
      startBtn.style.display = "inline-block";
      statusEl.textContent = res === "success" ? "HOÀN TẤT" : "THẤT BẠI";
    }

    function spawnTarget() {
      if (!running) return;
      removeTarget();
      const roundId = ++currentRoundId;
      const isReal = Math.random() < 0.5;
      let handled = false;

      const btn = document.createElement("button");
      btn.className = "mg-target";
      btn.textContent = isReal ? "THẬT" : "GIẢ";
      targetEl = btn;

      const w = arenaEl.clientWidth, h = arenaEl.clientHeight;
      const x = 12 + Math.random() * Math.max(10, w - 90 - 24);
      const y = 35 + Math.random() * Math.max(10, h - 50 - 35);
      btn.style.left = x + "px";
      btn.style.top = y + "px";

      arenaEl.appendChild(btn);
      setFeedback(isReal ? "PHÁT HIỆN CHỨNG CỨ THẬT // HÃY BẤM" : "PHÁT HIỆN TÍN HIỆU KHẢ NGHI // ĐỪNG BẤM");

      const processResult = (clicked) => {
        if (handled || !running || roundId !== currentRoundId) return;
        handled = true;
        clearTimeout(targetTimeout);
        targetTimeout = null;

        if (clicked) {
          if (isReal) {
            addProgress(10);
            if (running) setFeedback("ĐÃ XÁC NHẬN CHỨNG CỨ THẬT // +10%", "good");
          } else {
            addProgress(-10);
            if (running) setFeedback("CẢNH BÁO // BẤM NHẦM CHỨNG CỨ GIẢ // -10%", "bad");
          }
        } else {
          if (isReal) {
            addProgress(-10);
            if (running) setFeedback("BỎ SÓT CHỨNG CỨ THẬT // -10%", "bad");
          } else {
            addProgress(10);
            if (running) setFeedback("CHỨNG CỨ GIẢ ĐÃ BỊ LOẠI // +10%", "good");
          }
        }
        removeTarget();
        if (running) nextTimeout = setTimeout(spawnTarget, 250);
      };

      btn.addEventListener("click", () => processResult(true));
      targetTimeout = setTimeout(() => processResult(false), TARGET_DURATION);
    }

    function startMgGame() {
      stopAll();
      removeTarget();
      timeLeft = duration;
      progress = 0;
      running = true;
      finished = false;
      currentRoundId = 0;
      overlayEl.style.display = "none";
      progFill.classList.remove("damage");
      progFill.style.width = "0%";
      statusEl.textContent = "ĐANG KIỂM ĐỊNH";
      updateUI();
      setFeedback("ĐANG KHỞI TẠO HỆ THỐNG XÁC MINH...");

      const endAt = Date.now() + duration * 1000;
      timerInterval = setInterval(() => {
        if (!running) return;
        timeLeft = Math.max(0, endAt - Date.now()) / 1000;
        updateUI();
        if (timeLeft <= 0) { timeLeft = 0; updateUI(); finishMg("failed"); }
      }, 50);

      spawnTarget();
    }

    startBtn.addEventListener("click", () => {
      if (finished && progress >= 100) {
        mgOverlay.remove();
        onComplete();
        return;
      }
      startMgGame();
    });

    skipBtn.addEventListener("click", () => {
      finishMg("skipped");
    });
  }

  async function submitNewDossier() {
    const title = screenEl.querySelector("#modal-input-title").value.trim();
    const loc = screenEl.querySelector("#modal-input-loc").value.trim();
    const detail = screenEl.querySelector("#modal-input-detail").value.trim();
    const author = screenEl.querySelector("#modal-input-author").value.trim();
    const error = screenEl.querySelector("#modal-add-error");

    if (!title || !loc) {
      error.textContent = L.errRequired;
      return;
    }
    const buttons = [...modalActions.querySelectorAll("button")];
    buttons.forEach(button => button.disabled = true);

    try {
      const r = await fetch(DB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title, loc, detail,
          team: selectedInvestigationTeam,
          author: author || (selectedInvestigationTeam === "SOLO" ? L.soloAgent : `${L.unitAgentPrefix}${selectedInvestigationTeam}`)
        })
      });
      const result = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(result.error || L.errCreate);
      closeModal();
      await loadFiles();
    } catch (err) {
      error.textContent = L.errPrefix + (err.message || L.errConn);
      buttons.forEach(button => button.disabled = false);
    }
  }

  function editDossier(item) {
    if (!item) return;
    editingDossierId = item.id;
    editingDossierTeam = item.team || selectedInvestigationTeam || "01";
    showModal(L.editModalTitle, `
      <label class="inv-edit-label">${L.inTitle}</label><input id="edit-title" class="inv-edit-input">
      <label class="inv-edit-label">${L.fLoc} (*)</label><input id="edit-loc" class="inv-edit-input">
      <label class="inv-edit-label">${L.inDetail}</label><textarea id="edit-detail" class="inv-edit-textarea"></textarea>
      <label class="inv-edit-label">${L.fAuthor}</label><input id="edit-author" class="inv-edit-input">
      <div id="edit-error" class="inv-error"></div>
    `, [
      { label: L.saveBtn, onClick: saveEdit },
      { label: L.cancelBtn, className: "back", onClick: () => { editingDossierId = null; closeModal(); } }
    ]);

    screenEl.querySelector("#edit-title").value = item.title || "";
    screenEl.querySelector("#edit-loc").value = item.loc || "";
    screenEl.querySelector("#edit-detail").value = item.detail || "";
    screenEl.querySelector("#edit-author").value = item.author || (item.team === "SOLO" ? L.soloAgent : `${L.unitAgentPrefix}${item.team || "01"}`);
  }

  async function saveEdit() {
    const title = screenEl.querySelector("#edit-title").value.trim();
    const loc = screenEl.querySelector("#edit-loc").value.trim();
    const detail = screenEl.querySelector("#edit-detail").value.trim();
    const author = screenEl.querySelector("#edit-author").value.trim();
    const error = screenEl.querySelector("#edit-error");
    const team = editingDossierTeam || "01";
    const finalAuthor = author || (team === "SOLO" ? L.soloAgent : `${L.unitAgentPrefix}${team}`);

    if (!title || !loc) {
      error.textContent = L.errRequired;
      return;
    }
    const buttons = [...modalActions.querySelectorAll("button")];
    buttons.forEach(button => button.disabled = true);

    try {
      const r = await fetch(DB_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingDossierId, title, loc, detail, team, author: finalAuthor })
      });
      const result = await r.json();
      if (!r.ok || !result.success) throw new Error(result.error || L.errUpdate);
      closeModal();
      closeContextMenu();
      editingDossierId = null;
      editingDossierTeam = null;
      await loadFiles();
    } catch (err) {
      error.textContent = L.errPrefix + (err.message || L.errSave);
      buttons.forEach(button => button.disabled = false);
    }
  }

  async function deleteDossier(item) {
    if (!item) return;
    const msg = L.confirmDel.replace("{loc}", item.loc).replace("{title}", item.title);
    if (!confirm(msg)) return;

    try {
      const r = await fetch(DB_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id })
      });
      const result = await r.json();
      if (!r.ok || !result.success) throw new Error(result.error || L.errDelete);
      closeContextMenu();
      closeModal();
      await loadFiles();
    } catch (err) {
      alert(L.alertDelErr + (err.message || L.errConn));
    }
  }

  screenEl.querySelector("#btn-open-add").addEventListener("click", openAddModal);

  boxDossiers.addEventListener("click", event => {
    const card = event.target.closest(".dossier-card");
    if (!card) return;
    closeContextMenu();
    showDetails(findDossier(card.dataset.id));
  });

  boxDossiers.addEventListener("contextmenu", event => {
    const card = event.target.closest(".dossier-card");
    if (!card) return;
    event.preventDefault();
    const item = findDossier(card.dataset.id);
    if (!item) return;
    currentDossier = item;
    contextMenu.classList.remove("hidden");
    contextMenu.style.left = Math.max(8, Math.min(event.clientX, innerWidth - 188)) + "px";
    contextMenu.style.top = Math.max(8, Math.min(event.clientY, innerHeight - 102)) + "px";
  });

  contextMenu.addEventListener("click", event => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action || !currentDossier) return;
    const item = currentDossier;
    closeContextMenu();
    if (action === "edit") editDossier(item);
    if (action === "delete") deleteDossier(item);
  });

  screenEl.querySelector("#dossier-screen")?.addEventListener("click", event => {
    if (!event.target.closest("#dossier-context-menu")) closeContextMenu();
  });

  screenEl.querySelector("#dossier-modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  screenEl.querySelector("#btn-refresh").addEventListener("click", loadFiles);

  initTeamsDOM();
  await loadFiles();

  pollInterval = setInterval(() => { if (!document.hidden) loadFiles(); }, 5000);
  teamInterval = setInterval(updateTeamsIndependent, 5000);

  screenEl.querySelector(".back").addEventListener("click", () => {
    if (busy) return;
    transition(() => {
      clearInterval(pollInterval);
      clearInterval(teamInterval);
      window.removeEventListener("mousemove", doResize);
      window.removeEventListener("touchmove", doResize);
      window.removeEventListener("mouseup", stopResize);
      window.removeEventListener("touchend", stopResize);
      pauseGlitch = false;
      closeContextMenu();
      closeModal();
      screenEl.remove();
      render("dept");
    });
  });
});

function goCustomScreen(screenEl) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screenEl.classList.remove("hidden");
}