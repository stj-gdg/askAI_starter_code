const SEND_ICON_HTML = `
  <svg
    width="16" height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    style="position:relative;z-index:1"
  >
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
  <span style="position:relative;z-index:1">Ask Gemini</span>
`;

async function askGemini() {
  const btn = document.getElementById("ask-btn");

  btn.innerHTML = SEND_ICON_HTML;
  `<div class="spinner" style="position:relative;z-index:1"></div>
        <span style="position:relative;z-index:1">Thinking…</span>
    `;
}
