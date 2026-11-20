const PROCESSING_I18N = {
  en: {
    heading: "PROCESSING UNIT IDENTIFICATION",
    desc: "PERSONNEL ASSIGNMENT SYSTEM // PROCESSING BUREAU<br>Please identify the processing unit you belong to.",
    solo: "INDEPENDENT AGENT",
    soloDesc: "Personnel operating independently, outside the regular team structure.",
    current: "CURRENTLY SELECTED UNIT",
    confirm: "CONFIRM →",
    back: "← RETURN",
    team: "TEAM UNIT",
    title: "PROCESSING BUREAU",
    unit: "PROCESSING UNIT",
    topLabel: "PROCESSING BUREAU // CỤC XỬ LÝ",
    mainTitle: "NATIONAL ANOMALY SWEEP COMMISSION",
    sec1: "// 1. PROCESSING TEAMS STATUS (18 ACTIVE UNITS)",
    sec1Loading: "Establishing duty roster...",
    teamPrefix: "Unit",
    statusBusy: "[ON ACTIVE MISSION]",
    statusRest: "[STANDBY]",
    sec2: "// 2. ANOMALY DOSSIER ARCHIVE",
    sec2Loading: "Connecting to headquarters...",
    sec2Error: "⚠ HEADQUARTERS CONNECTION ERROR",
    sec2Empty: "No archived dossiers found.",
    refreshBtn: "↻ REFRESH",
    resizerTitle: "Hold and drag up/down to expand or collapse",
    openGroup: "--- WAITING FOR ACCEPTANCE",
    progressGroup: "--- CURRENTLY IN PROGRESS",
    doneGroup: "--- COMPLETED DOSSIERS",
    unknownLoc: "Unknown",
    untitled: "Untitled Dossier",
    agentLabel: "Filed by:",
    soloAgent: "Independent Investigation Agent",
    unitAgentPrefix: "Investigation Unit #",
    statusLabel: "Status:",
    cardHint: "LEFT CLICK: VIEW DETAILS",
    noData: "No data",
    detailTitle: "ANOMALY DOSSIER DETAILS",
    closeBtn: "CLOSE ×",
    fId: "DOSSIER ID",
    fTitle: "TITLE / INCIDENT",
    fLoc: "LOCATION",
    fAuthor: "FILED BY",
    fTime: "TIMESTAMP",
    fStatus: "STATUS",
    fDesc: "INCIDENT REPORT DETAILS",
    fAcceptedBy: "ACCEPTED BY",
    fAcceptedTeam: "PROCESSING UNIT",
    fAcceptedAt: "ACCEPTED AT",
    fCompletedBy: "COMPLETED BY",
    fCompletedAt: "COMPLETED AT",
    stOpen: "OPEN",
    stProgress: "IN PROGRESS",
    stDone: "DONE",
    noDesc: "No description provided.",
    backBtn: "← RETURN",
    claimBtn: "ACCEPT DOSSIER",
    completeBtn: "COMPLETE DOSSIER",
    enterName: "Enter your name (optional). Leave blank to use your unit designation:",
    claimConfirm: "Accept this dossier?",
    completeConfirm: "Mark this dossier as completed?",
    claimSuccess: "Dossier successfully accepted.",
    completeSuccess: "Dossier successfully completed.",
    actionError: "Unable to perform this action.",
    cancelled: "Action cancelled.",
    resetBtn: "RESET DOSSIER",
    resetConfirm: "Reset this dossier to OPEN? All processing records will be cleared.",
    resetSuccess: "Dossier successfully reset.",
    resetDenied: "Admin permission required.",
    agentNamePlaceholder: "Agent name...",
    claimTitle: "PERSONNEL IDENTIFICATION",
    claimNameLabel: "AGENT NAME",
    cancelBtn: "CANCEL MISSION",
    cancelConfirm: "Are you sure you want to abandon this mission?",
    cancelSuccess: "Mission cancelled. Dossier returned to OPEN.",
gameTitle: "ANOMALY ENGAGEMENT",
gameSubtitle: "NEUTRALIZATION PROTOCOL // ACTIVE",

gameBriefingTitle: "MISSION BRIEFING",
gameBriefingObjective: "MISSION OBJECTIVE",
gameBriefingObjectiveDesc: "Neutralize the designated anomaly to confirm dossier completion.",
gameBriefingRules: "ENGAGEMENT RULES",
gameBriefingRule1: "Target durability: 100 HP.",
gameBriefingRule2: "Agent durability: 3 lives.",
gameBriefingRule3: "Each successful hit deals 5 damage.",
gameBriefingRule4: "The anomaly fires a three-projectile spread approximately every second.",
gameBriefingRule5: "There is no time limit.",
gameBriefingControls: "OPERATIONAL CONTROLS",
gameBriefingWarning: "WARNING",
gameBriefingWarningDesc: "The dossier will only be marked as completed after the target is eliminated. Abandoning the mission will return the dossier to OPEN.",
gameStart: "INITIATE ENGAGEMENT",
    gameLives: "AGENT LIVES",
    gameHP: "ANOMALY HP",
    gameMove: "WASD / ARROWS: MOVE",
    gameShoot: "HOLD E / SPACE: FIRE",
    gamePause: "PAUSE",
    gameResume: "RESUME",
    gameRetry: "RETRY MISSION",
    gameVictory: "TARGET ELIMINATED",
    gameDefeat: "AGENT DOWN",
    gameVictoryDesc: "Anomaly successfully neutralized.",
    gameDefeatDesc: "All agent lives have been exhausted.",
    gameAbort: "ABORT MISSION",
    gameContinue: "CONTINUE",
    gameSaving: "UPDATING DOSSIER...",
    gameSaveError: "The anomaly was neutralized, but the dossier could not be updated.",
    gameClose: "RETURN TO DOSSIER",
  },

  vi: {
    heading: "XÁC ĐỊNH ĐƠN VỊ CÔNG TÁC",
    desc: "HỆ THỐNG PHÂN CÔNG NHÂN SỰ // PROCESSING BUREAU<br>Vui lòng xác định đội xử lý mà bạn trực thuộc.",
    solo: "ĐẶC VỤ ĐỘC LẬP",
    soloDesc: "Nhân sự hoạt động độc lập, không trực thuộc các đội xử lý thông thường.",
    current: "ĐƠN VỊ ĐANG ĐƯỢC CHỌN",
    confirm: "XÁC NHẬN →",
    back: "← QUAY LẠI",
    team: "PROCESSING UNIT",
    title: "CỤC XỬ LÝ",
    unit: "ĐỘI XỬ LÝ",
    topLabel: "CỤC XỬ LÝ // PROCESSING BUREAU",
    mainTitle: "ỦY BAN TRUY QUÉT DỊ THƯỜNG QUỐC GIA",
    sec1: "// 1. TRẠNG THÁI CÁC ĐỘI XỬ LÝ (18 ĐỘI TRỰC)",
    sec1Loading: "Đang thiết lập biên độ trực ban...",
    teamPrefix: "Đội",
    statusBusy: "[ĐANG THỰC THI NHIỆM VỤ]",
    statusRest: "[ĐANG NGHỈ]",
    sec2: "// 2. KHO HỒ SƠ DỊ THƯỜNG",
    sec2Loading: "Đang kết nối tổng bộ...",
    sec2Error: "⚠ LỖI KẾT NỐI TỔNG BỘ",
    sec2Empty: "Chưa có hồ sơ nào được lưu trữ.",
    refreshBtn: "↻ LÀM MỚI",
    resizerTitle: "Giữ chuột kéo lên/xuống để mở rộng hoặc thu gọn",
    openGroup: "--- HỒ SƠ CHỜ TIẾP NHẬN",
    progressGroup: "--- HỒ SƠ ĐANG XỬ LÝ",
    doneGroup: "--- HỒ SƠ ĐÃ HOÀN THÀNH",
    unknownLoc: "Chưa rõ",
    untitled: "Hồ sơ không tên",
    agentLabel: "Người lập:",
    soloAgent: "Đặc vụ Điều tra Độc lập",
    unitAgentPrefix: "Nhân viên Đội Điều tra số ",
    statusLabel: "Trạng thái:",
    cardHint: "CHUỘT TRÁI: XEM CHI TIẾT",
    noData: "Không có dữ liệu",
    detailTitle: "CHI TIẾT HỒ SƠ DỊ THƯỜNG",
    closeBtn: "ĐÓNG ×",
    fId: "MÃ HỒ SƠ",
    fTitle: "TIÊU ĐỀ / VỤ VIỆC",
    fLoc: "ĐỊA ĐIỂM",
    fAuthor: "NGƯỜI LẬP",
    fTime: "THỜI GIAN GHI NHẬN",
    fStatus: "TRẠNG THÁI",
    fDesc: "CHI TIẾT DIỄN BIẾN",
    fAcceptedBy: "NGƯỜI TIẾP NHẬN",
    fAcceptedTeam: "ĐƠN VỊ TIẾP NHẬN",
    fAcceptedAt: "THỜI GIAN TIẾP NHẬN",
    fCompletedBy: "NGƯỜI HOÀN THÀNH",
    fCompletedAt: "THỜI GIAN HOÀN THÀNH",
    stOpen: "CHỜ TIẾP NHẬN",
    stProgress: "ĐANG XỬ LÝ",
    stDone: "ĐÃ HOÀN THÀNH",
    noDesc: "Không có nội dung mô tả.",
    backBtn: "← QUAY LẠI PHÒNG BAN",
    claimBtn: "NHẬN HỒ SƠ",
    completeBtn: "HOÀN THÀNH HỒ SƠ",
    enterName: "Nhập tên đặc vụ (không bắt buộc). Để trống nếu muốn dùng tên đơn vị:",
    claimConfirm: "Xác nhận tiếp nhận hồ sơ này?",
    completeConfirm: "Xác nhận đánh dấu hồ sơ đã hoàn thành?",
    claimSuccess: "Đã tiếp nhận hồ sơ thành công.",
    completeSuccess: "Đã hoàn thành hồ sơ thành công.",
    actionError: "Không thể thực hiện thao tác.",
    cancelled: "Đã hủy thao tác.",
    resetBtn: "ĐẶT LẠI HỒ SƠ",
    resetConfirm: "Đặt hồ sơ này về trạng thái OPEN? Toàn bộ thông tin xử lý sẽ bị xóa.",
    resetSuccess: "Đã đặt lại hồ sơ thành công.",
    resetDenied: "Yêu cầu quyền Admin.",
    agentNamePlaceholder: "Tên đặc vụ...",
    claimTitle: "XÁC NHẬN NHÂN SỰ TIẾP NHẬN",
    claimNameLabel: "TÊN ĐẶC VỤ",
    cancelBtn: "HỦY NHIỆM VỤ",
    cancelConfirm: "Mày có chắc chắn muốn từ bỏ nhiệm vụ này không?",
    cancelSuccess: "Đã hủy nhiệm vụ. Hồ sơ được đưa về OPEN.",
gameTitle: "GIAO TRANH DỊ THƯỜNG",
gameSubtitle: "QUY TRÌNH VÔ HIỆU HÓA // ĐANG HOẠT ĐỘNG",

gameBriefingTitle: "PHỔ BIẾN NHIỆM VỤ",
gameBriefingObjective: "MỤC TIÊU NHIỆM VỤ",
gameBriefingObjectiveDesc: "Tiêu diệt thực thể dị thường được chỉ định để xác nhận hoàn tất hồ sơ.",
gameBriefingRules: "QUY TẮC GIAO TRANH",
gameBriefingRule1: "Độ bền mục tiêu: 100 HP.",
gameBriefingRule2: "Đặc vụ có 3 mạng.",
gameBriefingRule3: "Mỗi phát bắn trúng gây 5 sát thương.",
gameBriefingRule4: "Dị thường bắn ra một loạt 3 viên đạn theo hình quạt khoảng mỗi giây.",
gameBriefingRule5: "Không có giới hạn thời gian.",
gameBriefingControls: "ĐIỀU KHIỂN",
gameBriefingWarning: "CẢNH BÁO",
gameBriefingWarningDesc: "Hồ sơ chỉ được đánh dấu hoàn thành sau khi mục tiêu bị tiêu diệt. Nếu từ bỏ nhiệm vụ, hồ sơ sẽ được đưa trở lại trạng thái OPEN.",
gameStart: "BẮT ĐẦU GIAO TRANH",
    gameLives: "MẠNG ĐẶC VỤ",
    gameHP: "HP DỊ THƯỜNG",
    gameMove: "WASD / PHÍM MŨI TÊN: DI CHUYỂN",
    gameShoot: "GIỮ E / SPACE: BẮN",
    gamePause: "TẠM DỪNG",
    gameResume: "TIẾP TỤC",
    gameRetry: "THỬ LẠI",
    gameVictory: "MỤC TIÊU ĐÃ BỊ TIÊU DIỆT",
    gameDefeat: "ĐẶC VỤ ĐÃ GỤC NGÃ",
    gameVictoryDesc: "Dị thường đã được vô hiệu hóa thành công.",
    gameDefeatDesc: "Đặc vụ đã sử dụng hết số mạng.",
    gameAbort: "HỦY NHIỆM VỤ",
    gameContinue: "TIẾP TỤC",
    gameSaving: "ĐANG CẬP NHẬT HỒ SƠ...",
    gameSaveError: "Dị thường đã bị tiêu diệt, nhưng không thể cập nhật hồ sơ.",
    gameClose: "QUAY LẠI HỒ SƠ",
  }
};


// ======================================================
// PROCESSING BUREAU // MENU CHỌN ĐƠN VỊ
// ======================================================

$("dept-process").addEventListener("click", async () => {
  const curLang =
    typeof LANG !== "undefined" && PROCESSING_I18N[LANG]
      ? LANG
      : "en";

  const L = PROCESSING_I18N[curLang];

  let selectedTeam =
    localStorage.getItem("nasc_processing_team") || "01";

  const teamScreen = document.createElement("section");
  teamScreen.className = "screen hidden team-select-screen";

  teamScreen.innerHTML = `
    <div class="team-select-shell">
      <div class="team-select-top">
        <span>N.A.S.C // PERSONNEL ASSIGNMENT</span>
        <span class="team-system-status">● SYSTEM ONLINE</span>
      </div>

      <h1 class="team-select-heading">${L.heading}</h1>
      <p class="team-select-desc">${L.desc}</p>

      <div class="team-select-grid" id="processing-team-grid">
        ${Array.from({length:18},(_,i)=>{
          const id = String(i+1).padStart(2,"0");
          return `
            <button type="button" class="team-select-btn" data-team="${id}">
              <span class="team-code">${id}</span>
              <span class="team-label">${L.team}</span>
            </button>
          `;
        }).join("")}
      </div>

      <div class="team-solo-option">
        <button type="button" id="processing-solo" class="team-solo-btn">
          <span class="team-solo-icon">◆</span>
          <span class="team-solo-text">
            <strong>INDEPENDENT AGENT</strong>
            <small>${L.solo}</small>
          </span>
          <span class="team-solo-check">✓</span>
        </button>
        <p class="team-solo-desc">${L.soloDesc}</p>
      </div>

      <div class="team-select-bottom">
        <div>
          <div class="team-current-label">${L.current}</div>
          <div class="team-current-value" id="processing-team-info"></div>
        </div>
        <div class="team-select-actions">
          <button type="button" id="processing-confirm">${L.confirm}</button>
          <button type="button" id="processing-back" class="back">${L.back}</button>
        </div>
      </div>
    </div>
  `;

  stage.appendChild(teamScreen);

  await transition(() => {
    $("dept-screen").classList.add("hidden");
    teamScreen.classList.remove("hidden");
  });

  const teamGrid = teamScreen.querySelector("#processing-team-grid");
  const teamInfo = teamScreen.querySelector("#processing-team-info");
  const soloBtn = teamScreen.querySelector("#processing-solo");

  function updateSelection() {
    teamGrid.querySelectorAll("[data-team]").forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.team === selectedTeam);
    });

    soloBtn.classList.toggle("selected", selectedTeam === "SOLO");

    teamInfo.textContent = selectedTeam === "SOLO"
      ? "INDEPENDENT AGENT"
      : "TEAM-" + selectedTeam;
  }

  updateSelection();

  teamGrid.addEventListener("click", event => {
    const btn = event.target.closest("[data-team]");
    if (!btn) return;
    selectedTeam = btn.dataset.team;
    updateSelection();
  });

  soloBtn.addEventListener("click", () => {
    selectedTeam = "SOLO";
    updateSelection();
  });

  let resolveTeamSelection;
  let selectionFinished = false;

  const teamSelectionPromise = new Promise(resolve => {
    resolveTeamSelection = resolve;
  });

  function finishTeamSelection(value) {
    if (selectionFinished) return;
    selectionFinished = true;
    resolveTeamSelection(value);
  }

  teamScreen.querySelector("#processing-back").addEventListener("click", () => {
    finishTeamSelection(false);
  });

  teamScreen.querySelector("#processing-confirm").addEventListener("click", () => {
    localStorage.setItem("nasc_processing_team", selectedTeam);
    finishTeamSelection(true);
  });

  const confirmed = await teamSelectionPromise;
  teamScreen.remove();

  if (confirmed !== true) {
    await transition(() => {
      $("dept-screen").classList.remove("hidden");
    });
    return;
  }

  await openProcessingDashboard(L, curLang, selectedTeam);
});


// ======================================================
// PROCESSING BUREAU // DASHBOARD
// ======================================================

async function openProcessingDashboard(L, curLang, selectedTeam) {
  const processingHTML = `
    <section id="processing-screen" class="screen hidden processing-screen">
      <div class="top-label">${L.topLabel}</div>

      <h1 class="question" style="font-size:21px;margin-bottom:6px;">
        ${L.mainTitle}
      </h1>

      <div class="inv-container">
        <div class="inv-top-bar">
          <div class="inv-team-section">
            <span class="inv-heading">${L.sec1}</span>
            <div id="processing-box-teams" class="inv-scroll inv-teams">
              <div style="color:var(--dim);">${L.sec1Loading}</div>
            </div>
          </div>
        </div>

        <div id="processing-resizer" class="inv-resizer" title="${L.resizerTitle}">
          <span>═ ═ ═</span>
        </div>

        <div class="inv-panel">
          <div class="inv-panel-head">
            <span class="inv-heading">${L.sec2}</span>
          </div>

          <div id="processing-box-dossiers" class="inv-scroll inv-dossiers">
            <div style="color:var(--dim);">${L.sec2Loading}</div>
          </div>

          <div class="inv-bottom-actions">
            <div style="color:var(--dim);font-size:10px;letter-spacing:1px;padding:8px 4px;">
              N.A.S.C // PROCESSING DIVISION
            </div>
            <button id="processing-refresh" class="inv-refresh">${L.refreshBtn}</button>
          </div>
        </div>
      </div>

      <div class="button-group inv-back">
        <button class="back" data-processing-back>${L.backBtn}</button>
      </div>

      <div id="processing-modal" class="dossier-modal hidden">
        <div class="dossier-modal-box">
          <div class="dossier-modal-head">
            <span id="processing-modal-title">${L.detailTitle}</span>
            <button type="button" id="processing-modal-close" class="inv-modal-close">
              ${L.closeBtn}
            </button>
          </div>
          <div id="processing-modal-content" class="dossier-modal-content"></div>
          <div id="processing-modal-actions" class="dossier-modal-actions"></div>
        </div>
      </div>
    </section>
  `;

  const temp = document.createElement("div");
  temp.innerHTML = processingHTML;

  const screenEl = temp.querySelector("#processing-screen");
  stage.appendChild(screenEl);

  await transition(() => goCustomScreen(screenEl));

  // DOM REFERENCES
  const topBar = screenEl.querySelector(".inv-top-bar");
  const resizer = screenEl.querySelector("#processing-resizer");
  const boxTeams = screenEl.querySelector("#processing-box-teams");
  const boxDossiers = screenEl.querySelector("#processing-box-dossiers");
  const modal = screenEl.querySelector("#processing-modal");
  const modalTitle = screenEl.querySelector("#processing-modal-title");
  const modalContent = screenEl.querySelector("#processing-modal-content");
  const modalActions = screenEl.querySelector("#processing-modal-actions");

  // STATE
  let pollInterval = null;
  let teamInterval = null;
  let isResizing = false;
  let latestFiles = [];
  let lastSig = "";
  let activeGame = null;

  // HELPERS
  const escapeHTML = value =>
    String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));

  function formatDate(value) {
    if (!value) return L.noData;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return L.noData;
    return date.toLocaleString(curLang === "vi" ? "vi-VN" : "en-US");
  }

  function getTeamName(team) {
    if (!team) return L.noData;
    if (team === "independent") {
      return curLang === "vi" ? "Đặc vụ độc lập" : "Independent Agent";
    }
    return curLang === "vi" ? `Đội ${team}` : `Unit ${team}`;
  }

  function getAuthor(item) {
    if (item.author) return item.author;
    if (item.team === "SOLO") return L.soloAgent;
    return `${L.unitAgentPrefix}${item.team || "01"}`;
  }

  // TEAM STATUS SYSTEM
  const teamsData = [];
  const now = Date.now();

  for (let i = 1; i <= 18; i++) {
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

      return `
        <div class="inv-team-row">
          • ${L.teamPrefix} ${t.id}:
          <span id="processing-team-st-${t.id}" style="color:${statusColor};">
            ${statusText}
          </span>
        </div>
      `;
    }).join("");
  }

  function updateTeamsIndependent() {
    if (document.hidden) return;

    const currentTime = Date.now();

    teamsData.forEach(t => {
      if (currentTime >= t.nextToggle) {
        t.busy = !t.busy;
        t.nextToggle = currentTime + (Math.random() * 40 + 20) * 60 * 1000;

        const span = screenEl.querySelector(`#processing-team-st-${t.id}`);

        if (span) {
          span.textContent = t.busy ? L.statusBusy : L.statusRest;
          span.style.color = t.busy ? "var(--green)" : "var(--dim)";
        }
      }
    });
  }

  // DOSSIER DATABASE
  async function loadFiles() {
    try {
      const response = await fetch(DB_URL);
      if (!response.ok) throw new Error("GET failed");

      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Invalid database response");

      latestFiles = data;
      const signature = JSON.stringify(data);

      if (signature !== lastSig) {
        lastSig = signature;
        renderData(data);
      }
    } catch (error) {
      lastSig = "";
      boxDossiers.innerHTML = `<div class="inv-error">${L.sec2Error}</div>`;
    }
  }

  // API ACTIONS
  async function sendAction(endpoint, payload) {
    const response = await fetch(DB_URL + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    let result;

    try {
      result = await response.json();
    } catch {
      throw new Error(L.actionError);
    }

    if (!response.ok || !result.success) {
      throw new Error(result.error || L.actionError);
    }

    return result;
  }

  async function claimDossier(item) {
    if (!item || getStatus(item) !== "open") return;

    const team = selectedTeam === "SOLO" ? "independent" : selectedTeam;
    const teamName = getTeamName(team);

    showModal(
      L.claimTitle,
      `
        <div class="detail-description">
          <span>${L.fAcceptedTeam}</span>
          <p><strong>${escapeHTML(teamName)}</strong></p>
        </div>

        <div class="detail-description">
          <label for="processing-agent-name">${L.claimNameLabel}</label>
          <input
            type="text"
            id="processing-agent-name"
            class="processing-input"
            placeholder="${escapeHTML(L.agentNamePlaceholder)}"
            maxlength="60"
            autocomplete="off"
          >
          <p>${L.enterName}</p>
        </div>
      `,
      [
        {
          label: L.confirm,
          onClick: async () => {
            const input = screenEl.querySelector("#processing-agent-name");
            const enteredName = input ? input.value.trim() : "";

            try {
              await sendAction("/claim", {
                id: item.id,
                agentName: enteredName,
                team
              });

              closeModal();
              await loadFiles();

              const updated = findDossier(item.id);
              if (updated) showDetails(updated);
            } catch (error) {
              showModal(
                L.claimTitle,
                `<div class="inv-error">${escapeHTML(error.message || L.actionError)}</div>`,
                [{ label: L.closeBtn, onClick: closeModal }]
              );
              await loadFiles();
            }
          }
        },
        {
          label: L.closeBtn,
          className: "back",
          onClick: closeModal
        }
      ]
    );
  }
    // ANOMALY ENGAGEMENT MINIGAME

function completeDossier(item) {
  if (!item || getStatus(item) !== "in_progress") return;

  closeModal();
  showGameBriefing(item);
}


// ======================================================
// ANOMALY ENGAGEMENT // MISSION BRIEFING
// ======================================================

function showGameBriefing(item) {
  if (activeGame) return;

  const overlay = document.createElement("div");
  overlay.className = "processing-game-overlay";

  overlay.innerHTML = `
    <div class="processing-game-window processing-game-briefing">

      <header class="processing-game-header">
        <div>
          <div class="processing-game-title">
            ${L.gameBriefingTitle}
          </div>
          <div class="processing-game-subtitle">
            NASC // PROCESSING BUREAU // MISSION PREPARATION
          </div>
        </div>

        <span class="briefing-status">● STANDBY</span>
      </header>

      <div class="briefing-content">

        <section class="briefing-section">
          <div class="briefing-section-title">
            // ${L.gameBriefingObjective}
          </div>
          <p>${L.gameBriefingObjectiveDesc}</p>
        </section>

        <section class="briefing-section">
          <div class="briefing-section-title">
            // ${L.gameBriefingRules}
          </div>

          <ul>
            <li>${L.gameBriefingRule1}</li>
            <li>${L.gameBriefingRule2}</li>
            <li>${L.gameBriefingRule3}</li>
            <li>${L.gameBriefingRule4}</li>
            <li>${L.gameBriefingRule5}</li>
          </ul>
        </section>

        <section class="briefing-section">
          <div class="briefing-section-title">
            // ${L.gameBriefingControls}
          </div>

          <div class="briefing-controls">
            <div>
              <kbd>W</kbd>
              <kbd>A</kbd>
              <kbd>S</kbd>
              <kbd>D</kbd>
              <span>${L.gameMove}</span>
            </div>

            <div>
              <kbd>E</kbd>
              <span>/</span>
              <kbd>SPACE</kbd>
              <span>${L.gameShoot}</span>
            </div>

            <div>
              <kbd>ESC</kbd>
              <span>${L.gamePause}</span>
            </div>
          </div>
        </section>

        <section class="briefing-warning">
          <strong>⚠ ${L.gameBriefingWarning}</strong>
          <p>${L.gameBriefingWarningDesc}</p>
        </section>

      </div>

      <footer class="briefing-footer">
        <button type="button" class="briefing-back">
          ${L.gameClose}
        </button>

        <button type="button" class="briefing-start">
          ${L.gameStart} →
        </button>
      </footer>

    </div>
  `;

  document.body.appendChild(overlay);

  let closed = false;

  function closeBriefing() {
    if (closed) return;

    closed = true;
    overlay.remove();
    activeGame = null;

    showDetails(item);
  }

  function beginEngagement() {
    if (closed) return;

    closed = true;
    overlay.remove();
    activeGame = null;

    startMinigame(item);
  }

  overlay.querySelector(".briefing-back")
    .addEventListener("click", closeBriefing);

  overlay.querySelector(".briefing-start")
    .addEventListener("click", beginEngagement);

  activeGame = {
    destroy: () => {
      if (closed) return;
      closed = true;
      overlay.remove();
      activeGame = null;
    }
  };
}


// ======================================================
// ANOMALY ENGAGEMENT MINIGAME
// ======================================================

function startMinigame(item) {
    if (activeGame) return;

    const overlay = document.createElement("div");
    overlay.className = "processing-game-overlay";
    overlay.innerHTML = `
      <div class="processing-game-window">
        <header class="processing-game-header">
          <div>
            <div class="processing-game-title">${L.gameTitle}</div>
            <div class="processing-game-subtitle">${L.gameSubtitle}</div>
          </div>
          <button type="button" class="processing-game-pause">${L.gamePause}</button>
        </header>

        <div class="processing-game-hud">
          <div>
            <span>${L.gameLives}</span>
            <strong class="game-lives">● ● ●</strong>
          </div>
          <div class="game-hp-wrap">
            <span>${L.gameHP}</span>
            <strong class="game-hp-text">100 / 100</strong>
            <div class="game-hp-track"><i class="game-hp-fill"></i></div>
          </div>
        </div>

        <div class="processing-game-arena">
          <canvas class="processing-game-canvas" width="800" height="500"></canvas>
          <div class="processing-game-overlay-message hidden"></div>
        </div>

        <footer class="processing-game-footer">
          <span>${L.gameMove}</span>
          <span>${L.gameShoot}</span>
          <button type="button" class="processing-game-abort">${L.gameAbort}</button>
        </footer>
      </div>
    `;

    document.body.appendChild(overlay);

    const canvas = overlay.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const pauseBtn = overlay.querySelector(".processing-game-pause");
    const abortBtn = overlay.querySelector(".processing-game-abort");
    const message = overlay.querySelector(".processing-game-overlay-message");
    const livesEl = overlay.querySelector(".game-lives");
    const hpText = overlay.querySelector(".game-hp-text");
    const hpFill = overlay.querySelector(".game-hp-fill");

    const W = canvas.width;
    const H = canvas.height;
    const keys = new Set();

    let player = {
      x: W / 2, y: H - 65, r: 10,
      speed: 255, lives: 3, invuln: 0
    };

let enemy = {
  x: W / 2, y: 82, r: 25,
  hp: 100, maxHp: 100,
  vx: 130
};

    let playerShots = [];
    let enemyShots = [];
    let particles = [];
    let lastTime = 0;
    let enemyFireTimer = 0.7;
    let shotTimer = 0;
    let raf = 0;
    let running = true;
    let paused = false;
    let ended = false;
    let saving = false;
    let destroyed = false;

    function updateHud() {
      livesEl.textContent = "● ".repeat(player.lives).trim() || "0";
      hpText.textContent = `${Math.max(0, enemy.hp)} / ${enemy.maxHp}`;
      hpFill.style.width = `${Math.max(0, enemy.hp / enemy.maxHp * 100)}%`;
    }

    function addBurst(x, y, count, color) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 35 + Math.random() * 150;

        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0.25 + Math.random() * 0.55,
          maxLife: 0.8,
          color,
          size: 1 + Math.random() * 3
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#050b08";
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = "rgba(100,170,120,.12)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= W; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      for (let y = 0; y <= H; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(140,255,155,.22)";
      ctx.strokeRect(1, 1, W - 2, H - 2);

      // Enemy anomaly
      ctx.save();
      ctx.shadowBlur = 22;
      ctx.shadowColor = "#ff3b3b";
      ctx.fillStyle = "#a51f2a";
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, enemy.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ff7777";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#ffdada";
      ctx.font = "bold 11px monospace";
      ctx.textAlign = "center";
      ctx.fillText("ANOMALY", enemy.x, enemy.y + enemy.r + 19);
      ctx.restore();

      // Player
      if (player.invuln <= 0 || Math.floor(performance.now() / 90) % 2 === 0) {
        ctx.save();
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#8cff9b";
        ctx.fillStyle = "#8cff9b";
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Projectiles
      ctx.fillStyle = "#b8ffc0";
      playerShots.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = "#ff5656";
      enemyShots.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.forEach(p => {
        ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      ctx.globalAlpha = 1;

      if (paused && !ended) {
        ctx.fillStyle = "rgba(0,0,0,.58)";
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#d5ffdb";
        ctx.font = "bold 25px monospace";
        ctx.textAlign = "center";
        ctx.fillText(L.gamePause, W / 2, H / 2);
      }
    }

    function showMessage(title, description, buttons) {
      message.classList.remove("hidden");
      message.innerHTML = `
        <div class="processing-game-result">
          <strong>${escapeHTML(title)}</strong>
          <p>${escapeHTML(description)}</p>
          <div class="processing-game-result-actions"></div>
        </div>
      `;

      const actions = message.querySelector(".processing-game-result-actions");

      buttons.forEach(({ label, action, secondary }) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = label;

        if (secondary) button.className = "back";

        button.addEventListener("click", action);
        actions.appendChild(button);
      });
    }

    function destroyGame() {
      if (destroyed) return;

      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
      overlay.remove();
      activeGame = null;
    }

    function closeAfterResult() {
      destroyGame();

      loadFiles().then(() => {
        const updated = findDossier(item.id);
        if (updated) showDetails(updated);
      });
    }

    async function saveVictory() {
      if (saving) return;

      saving = true;
      running = false;
      paused = false;
      pauseBtn.disabled = true;
      abortBtn.disabled = true;

      showMessage(L.gameSaving, "", []);

      try {
        await sendAction("/complete", { id: item.id });

        showMessage(L.gameVictory, L.gameVictoryDesc, [
          { label: L.gameClose, action: closeAfterResult }
        ]);
      } catch (error) {
        saving = false;
        pauseBtn.disabled = false;
        abortBtn.disabled = false;

        showMessage(
          L.gameVictory,
          `${L.gameSaveError} ${error.message || ""}`,
          [
            { label: L.gameClose, action: closeAfterResult },
            {
              label: L.gameContinue,
              action: () => {
                message.classList.add("hidden");
                pauseBtn.disabled = false;
                abortBtn.disabled = false;
                saveVictory();
              },
              secondary: true
            }
          ]
        );
      }
    }

    function finishGame(victory) {
      if (ended) return;

      ended = true;
      running = false;

      addBurst(
        victory ? enemy.x : player.x,
        victory ? enemy.y : player.y,
        35,
        victory ? "#ff5555" : "#8cff9b"
      );

      draw();

      if (victory) {
        saveVictory();
      } else {
        showMessage(L.gameDefeat, L.gameDefeatDesc, [
          { label: L.gameRetry, action: resetGame },
          { label: L.gameAbort, action: askAbort, secondary: true }
        ]);
      }
    }

    function resetGame() {
      player = {
        x: W / 2, y: H - 65, r: 10,
        speed: 255, lives: 3, invuln: 0
      };

enemy = {
  x: W / 2, y: 82, r: 25,
  hp: 100, maxHp: 100,
  vx: 130
};

      playerShots = [];
      enemyShots = [];
      particles = [];
      enemyFireTimer = 0.7;
      shotTimer = 0;
      ended = false;
      paused = false;
      running = true;
      saving = false;

      message.classList.add("hidden");
      pauseBtn.disabled = false;
      abortBtn.disabled = false;
      pauseBtn.textContent = L.gamePause;

      updateHud();
      lastTime = performance.now();
      raf = requestAnimationFrame(loop);
    }

    function askAbort() {
      paused = true;
      running = false;

      showMessage(L.cancelConfirm, "", [
        { label: L.gameAbort, action: abortMission },
        {
          label: L.gameContinue,
          action: () => {
            message.classList.add("hidden");

            if (!ended) {
              paused = false;
              running = true;
              lastTime = performance.now();
              raf = requestAnimationFrame(loop);
            } else {
              showMessage(L.gameDefeat, L.gameDefeatDesc, [
                { label: L.gameRetry, action: resetGame },
                { label: L.gameAbort, action: askAbort, secondary: true }
              ]);
            }
          },
          secondary: true
        }
      ]);
    }

    async function abortMission() {
      if (saving) return;

      showMessage(L.gameSaving, "", []);

      try {
        await sendAction("/reset", { id: item.id });

        destroyGame();
        await loadFiles();

        const updated = findDossier(item.id);
        if (updated) showDetails(updated);
      } catch (error) {
        showMessage(L.actionError, error.message || L.actionError, [
          {
            label: L.gameContinue,
            action: () => {
              if (ended) {
                showMessage(L.gameDefeat, L.gameDefeatDesc, [
                  { label: L.gameRetry, action: resetGame },
                  { label: L.gameAbort, action: askAbort, secondary: true }
                ]);
              } else {
                message.classList.add("hidden");
                paused = false;
                running = true;
                lastTime = performance.now();
                raf = requestAnimationFrame(loop);
              }
            }
          }
        ]);
      }
    }

    function togglePause() {
      if (ended || saving) return;

      paused = !paused;
      running = !paused;
      pauseBtn.textContent = paused ? L.gameResume : L.gamePause;

      if (paused) {
        cancelAnimationFrame(raf);
        draw();
      } else {
        lastTime = performance.now();
        raf = requestAnimationFrame(loop);
      }
    }

    function onKeyDown(event) {
      const key = event.key.toLowerCase();

      if ([
        "w", "a", "s", "d", "e", " ",
        "arrowup", "arrowdown", "arrowleft", "arrowright"
      ].includes(key)) {
        event.preventDefault();
      }

      if (key === "escape") {
        togglePause();
        return;
      }

      keys.add(key);
    }

    function onKeyUp(event) {
      keys.delete(event.key.toLowerCase());
    }

    function onBlur() {
      if (!paused && !ended && !saving) togglePause();
    }

    function loop(timestamp) {
      if (!running || paused || ended || destroyed) return;

      const dt = Math.min(
        (timestamp - (lastTime || timestamp)) / 1000,
        0.035
      );

      lastTime = timestamp;
      update(dt);
      draw();

      if (running && !paused && !ended) {
        raf = requestAnimationFrame(loop);
      }
    }

    function update(dt) {
      let dx = 0;
      let dy = 0;

      if (keys.has("a") || keys.has("arrowleft")) dx--;
      if (keys.has("d") || keys.has("arrowright")) dx++;
      if (keys.has("w") || keys.has("arrowup")) dy--;
      if (keys.has("s") || keys.has("arrowdown")) dy++;

      if (dx && dy) {
        dx *= Math.SQRT1_2;
        dy *= Math.SQRT1_2;
      }

      player.x = Math.max(
        player.r + 8,
        Math.min(W - player.r - 8, player.x + dx * player.speed * dt)
      );

      player.y = Math.max(
        H * 0.38,
        Math.min(H - player.r - 12, player.y + dy * player.speed * dt)
      );

      player.invuln = Math.max(0, player.invuln - dt);

      enemy.x += enemy.vx * dt;
if (enemy.x <= enemy.r + 36) {
  enemy.x = enemy.r + 36;
  enemy.vx = Math.abs(enemy.vx);
} else if (enemy.x >= W - enemy.r - 36) {
  enemy.x = W - enemy.r - 36;
  enemy.vx = -Math.abs(enemy.vx);
}

      shotTimer -= dt;

      if ((keys.has("e") || keys.has(" ")) && shotTimer <= 0) {
        const angle = Math.atan2(
          enemy.y - player.y,
          enemy.x - player.x
        );

        playerShots.push({
          x: player.x,
          y: player.y - 8,
          vx: Math.cos(angle) * 1500,
          vy: Math.sin(angle) * 1500,
          r: 3
        });

        shotTimer = 0.15;
      }

      playerShots.forEach(b => {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      });

      playerShots = playerShots.filter(b =>
        b.x > -10 && b.x < W + 10 &&
        b.y > -10 && b.y < H + 10
      );

playerShots = playerShots.filter(b => {
  const blockedIdx = enemyShots.findIndex(eb =>
    Math.hypot(b.x - eb.x, b.y - eb.y) < eb.r + b.r + 2
  );

  if (blockedIdx !== -1) {
    const eb = enemyShots[blockedIdx];
    addBurst((b.x + eb.x) / 2, (b.y + eb.y) / 2, 4, "#ff9966");
    return false;
  }

  const hit =
    Math.hypot(b.x - enemy.x, b.y - enemy.y) <
    enemy.r + b.r;

  if (hit) {
    enemy.hp -= 5;
    addBurst(b.x, b.y, 3, "#ff7777");
    updateHud();

    if (enemy.hp <= 0) finishGame(true);
  }

  return !hit;
});

      enemyFireTimer -= dt;

if (enemyFireTimer <= 0 && enemy.hp > 0) {
  const base = Math.atan2(
    player.y - enemy.y,
    player.x - enemy.x
  );

  const spread = enemy.hp <= 40 ? [-0.36, -0.18, 0, 0.18, 0.36] : [-0.24, 0, 0.24];
  const speed = enemy.hp <= 40 ? 245 : 215;

  spread.forEach(offset => {
    const angle = base + offset;

    enemyShots.push({
      x: enemy.x,
      y: enemy.y + enemy.r,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: 5
    });
  });

  enemyFireTimer = enemy.hp <= 40 ? 0.72 : 0.9;
}

      enemyShots.forEach(b => {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      });

      enemyShots = enemyShots.filter(b => {
        if (
          b.x < -15 || b.x > W + 15 ||
          b.y < -15 || b.y > H + 15
        ) {
          return false;
        }

        if (
          player.invuln <= 0 &&
          Math.hypot(b.x - player.x, b.y - player.y) <
          player.r + b.r
        ) {
          player.lives--;
          player.invuln = 0.85;
          addBurst(player.x, player.y, 16, "#8cff9b");
          updateHud();

          if (player.lives <= 0) finishGame(false);
          return false;
        }

        return true;
      });

      particles.forEach(p => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt;
      });

      particles = particles.filter(p => p.life > 0);
    }

    pauseBtn.addEventListener("click", togglePause);
    abortBtn.addEventListener("click", askAbort);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);

    activeGame = { destroy: destroyGame };

    updateHud();
    draw();
    lastTime = performance.now();
    raf = requestAnimationFrame(loop);
  }
    async function cancelDossier(item) {
    if (!item || getStatus(item) !== "in_progress") return;

    showModal(
      L.cancelBtn,
      `<p>${escapeHTML(L.cancelConfirm)}</p>`,
      [
        {
          label: L.cancelBtn,
          onClick: async () => {
            try {
              await sendAction("/reset", { id: item.id });
              closeModal();
              await loadFiles();

              const updated = findDossier(item.id);
              if (updated) showDetails(updated);
            } catch (error) {
              showModal(
                L.cancelBtn,
                `<div class="inv-error">${escapeHTML(error.message || L.actionError)}</div>`,
                [{ label: L.closeBtn, onClick: closeModal }]
              );
            }
          }
        },
        {
          label: L.closeBtn,
          className: "back",
          onClick: closeModal
        }
      ]
    );
  }

  async function resetDossier(item) {
    if (!item || !window.adminUnlocked) return;

    const confirmed = await showConfirmModal(
      L.resetBtn,
      L.resetConfirm
    );

    if (!confirmed) return;

    try {
      await sendAction("/reset", { id: item.id });
      closeModal();
      await loadFiles();

      const updated = findDossier(item.id);
      if (updated) showDetails(updated);
    } catch (error) {
      showModal(
        L.resetBtn,
        `<div class="inv-error">${escapeHTML(error.message || L.actionError)}</div>`,
        [{ label: L.closeBtn, onClick: closeModal }]
      );
    }
  }

  // DOSSIER STATUS
  function getStatus(item) {
    const status = String(item.status || "open")
      .toLowerCase()
      .replace(/[\s-]+/g, "_");

    if (status === "done") return "done";

    if (status === "in_progress" || status === "active") {
      return "in_progress";
    }

    return "open";
  }

  function getStatusLabel(status) {
    if (status === "done") return L.stDone;
    if (status === "in_progress") return L.stProgress;
    return L.stOpen;
  }

  // DOSSIER RENDERING
  function renderData(list) {
    if (!list.length) {
      boxDossiers.innerHTML = `
        <div class="inv-empty">${L.sec2Empty}</div>
      `;
      return;
    }

    const openList = list.filter(item => getStatus(item) === "open");
    const progressList = list.filter(item => getStatus(item) === "in_progress");
    const doneList = list.filter(item => getStatus(item) === "done");

    function makeCard(item) {
      const status = getStatus(item);

      const statusClass = status === "done"
        ? "status-done"
        : status === "in_progress"
          ? "status-progress"
          : "status-open";

      const author = getAuthor(item);

      return `
        <button
          type="button"
          class="dossier-card ${status === "done" ? "is-done" : ""}"
          data-id="${escapeHTML(item.id)}">

          <span class="dossier-card-title">
            [${escapeHTML(item.loc || L.unknownLoc)}]
            ${escapeHTML(item.title || L.untitled)}
          </span>

          <span class="dossier-card-meta">
            ${L.agentLabel}
            ${escapeHTML(author)}
            |
            ${L.statusLabel}
            <span class="${statusClass}">
              ${getStatusLabel(status)}
            </span>
          </span>

          <span class="dossier-card-hint">${L.cardHint}</span>
        </button>
      `;
    }

    let html = "";

    if (openList.length) {
      html += `
        <div class="inv-list-label open-label">
          ${L.openGroup} (${openList.length}) ---
        </div>
        <div class="dossier-grid">
          ${openList.map(makeCard).join("")}
        </div>
      `;
    }

    if (progressList.length) {
      html += `
        <div class="inv-list-label progress-label">
          ${L.progressGroup} (${progressList.length}) ---
        </div>
        <div class="dossier-grid">
          ${progressList.map(makeCard).join("")}
        </div>
      `;
    }

    if (doneList.length) {
      html += `
        <div class="inv-list-label done-label">
          ${L.doneGroup} (${doneList.length}) ---
        </div>
        <div class="dossier-grid">
          ${doneList.map(makeCard).join("")}
        </div>
      `;
    }

    boxDossiers.innerHTML = html;
  }

  // DOSSIER DETAIL MODAL
  function showModal(title, content, actions = []) {
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modalActions.replaceChildren();

    actions.forEach(action => {
      const button = document.createElement("button");

      button.type = "button";
      button.textContent = action.label;

      if (action.className) {
        button.className = action.className;
      }

      button.addEventListener("click", action.onClick);
      modalActions.appendChild(button);
    });

    modal.classList.remove("hidden");
  }

  function showConfirmModal(title, message) {
    return new Promise(resolve => {
      let resolved = false;

      function finish(value) {
        if (resolved) return;

        resolved = true;
        closeModal();
        resolve(value);
      }

      showModal(
        title,
        `<p>${escapeHTML(message)}</p>`,
        [
          {
            label: L.resetBtn,
            onClick: () => finish(true)
          },
          {
            label: L.closeBtn,
            className: "back",
            onClick: () => finish(false)
          }
        ]
      );

      const closeButton = screenEl.querySelector(
        "#processing-modal-close"
      );

      closeButton.onclick = () => finish(false);

      modal.onclick = event => {
        if (event.target === modal) {
          finish(false);
        }
      };
    });
  }

  function closeModal() {
    modal.classList.add("hidden");
    modalContent.replaceChildren();
    modalActions.replaceChildren();
  }

  function findDossier(id) {
    return latestFiles.find(
      item => String(item.id) === String(id)
    );
  }

  function showDetails(item) {
    if (!item) return;

    const status = getStatus(item);
    const author = getAuthor(item);

    let content = `
      <div class="detail-row">
        <span>${L.fId}</span>
        <strong>${escapeHTML(item.id)}</strong>
      </div>

      <div class="detail-row">
        <span>${L.fTitle}</span>
        <strong>${escapeHTML(item.title || L.untitled)}</strong>
      </div>

      <div class="detail-row">
        <span>${L.fLoc}</span>
        <strong>${escapeHTML(item.loc || L.unknownLoc)}</strong>
      </div>

      <div class="detail-row">
        <span>${L.fAuthor}</span>
        <strong>${escapeHTML(author)}</strong>
      </div>

      <div class="detail-row">
        <span>${L.fTime}</span>
        <strong>${escapeHTML(formatDate(item.time))}</strong>
      </div>

      <div class="detail-row">
        <span>${L.fStatus}</span>
        <strong>${getStatusLabel(status)}</strong>
      </div>

      <div class="detail-description">
        <span>${L.fDesc}</span>
        <p>${escapeHTML(item.detail || L.noDesc)}</p>
      </div>
    `;

    // Thông tin tiếp nhận
    if (item.acceptedBy || item.acceptedTeam || item.acceptedAt) {
      content += `
        <div class="detail-row">
          <span>${L.fAcceptedBy}</span>
          <strong>${escapeHTML(item.acceptedBy || L.noData)}</strong>
        </div>

        <div class="detail-row">
          <span>${L.fAcceptedTeam}</span>
          <strong>${escapeHTML(getTeamName(item.acceptedTeam))}</strong>
        </div>

        <div class="detail-row">
          <span>${L.fAcceptedAt}</span>
          <strong>${escapeHTML(formatDate(item.acceptedAt))}</strong>
        </div>
      `;
    }

    // Thông tin hoàn thành
    if (item.completedBy || item.completedAt) {
      content += `
        <div class="detail-row">
          <span>${L.fCompletedBy}</span>
          <strong>${escapeHTML(item.completedBy || L.noData)}</strong>
        </div>

        <div class="detail-row">
          <span>${L.fCompletedAt}</span>
          <strong>${escapeHTML(formatDate(item.completedAt))}</strong>
        </div>
      `;
    }

    const actions = [];

    if (status === "open") {
      actions.push({
        label: L.claimBtn,
        onClick: () => claimDossier(item)
      });
    }

    if (status === "in_progress") {
      actions.push({
        label: L.completeBtn,
        onClick: () => completeDossier(item)
      });

      actions.push({
        label: L.cancelBtn,
        className: "back",
        onClick: () => cancelDossier(item)
      });
    }

    actions.push({
      label: L.closeBtn,
      className: "back",
      onClick: closeModal
    });

    showModal(L.detailTitle, content, actions);
  }

  // RESIZER
  const startResize = event => {
    isResizing = true;
    pauseGlitch = true;
    resizer.classList.add("dragging");
    document.body.style.cursor = "ns-resize";
    event.preventDefault();
  };

  const doResize = event => {
    if (!isResizing) return;

    const clientY = event.touches
      ? event.touches[0].clientY
      : event.clientY;

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

  resizer.addEventListener(
    "touchstart",
    startResize,
    { passive: false }
  );

  window.addEventListener("mousemove", doResize);
  window.addEventListener("touchmove", doResize, { passive: false });
  window.addEventListener("mouseup", stopResize);
  window.addEventListener("touchend", stopResize);

  // EVENT LISTENERS
  boxDossiers.addEventListener("contextmenu", event => {
    const card = event.target.closest(".dossier-card");

    if (!card || !window.adminUnlocked) return;

    const item = findDossier(card.dataset.id);
    if (!item) return;

    const status = getStatus(item);

    if (status !== "in_progress" && status !== "done") return;

    event.preventDefault();
    resetDossier(item);
  });

  boxDossiers.addEventListener("click", event => {
    const card = event.target.closest(".dossier-card");
    if (!card) return;

    showDetails(findDossier(card.dataset.id));
  });

  screenEl.querySelector("#processing-modal-close")
    .addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  screenEl.querySelector("#processing-refresh")
    .addEventListener("click", loadFiles);
  // INITIALIZATION
  initTeamsDOM();

  await loadFiles();

  pollInterval = setInterval(() => {
    if (!document.hidden) {
      loadFiles();
    }
  }, 5000);

  teamInterval = setInterval(
    updateTeamsIndependent,
    5000
  );

  // EXIT / CLEANUP
  screenEl.querySelector("[data-processing-back]")
    .addEventListener("click", () => {
      if (busy) return;

      transition(() => {
        clearInterval(pollInterval);
        clearInterval(teamInterval);

        window.removeEventListener("mousemove", doResize);
        window.removeEventListener("touchmove", doResize);
        window.removeEventListener("mouseup", stopResize);
        window.removeEventListener("touchend", stopResize);

        pauseGlitch = false;
        closeModal();
        screenEl.remove();

        render("dept");
      });
    });
}
