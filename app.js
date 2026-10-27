(() => {
  "use strict";

  const STORAGE_KEY = "dhikr-counter-state-v1";
  const THEME_KEY = "dhikr-counter-theme-v1";
  const MAX_TARGET = 99999;
  const dhikrData = {
    subhanallah: {
      name: "SubhanAllah",
      arabic: "سُبْحَانَ اللّٰهِ",
      meaning: "Glory be to Allah."
    },
    alhamdulillah: {
      name: "Alhamdulillah",
      arabic: "الْحَمْدُ لِلّٰهِ",
      meaning: "All praise is for Allah."
    },
    allahuakbar: {
      name: "Allahu Akbar",
      arabic: "اللّٰهُ أَكْبَرُ",
      meaning: "Allah is the Greatest."
    },
    astaghfirullah: {
      name: "Astaghfirullah",
      arabic: "أَسْتَغْفِرُ اللّٰهَ",
      meaning: "I seek forgiveness from Allah."
    }
  };

  const root = document.documentElement;
  const countValue = document.getElementById("count-value");
  const countButton = document.getElementById("count-button");
  const decreaseButton = document.getElementById("decrease-button");
  const resetButton = document.getElementById("reset-button");
  const targetSummary = document.getElementById("target-summary");
  const remainingCount = document.getElementById("remaining-count");
  const totalCount = document.getElementById("total-count");
  const progressLabel = document.getElementById("progress-label");
  const progressRing = document.getElementById("progress-ring");
  const counterStatus = document.getElementById("counter-status");
  const themeToggle = document.getElementById("theme-toggle");
  const activeName = document.getElementById("active-dhikr-name");
  const activeArabic = document.getElementById("active-dhikr-arabic");
  const activeMeaning = document.getElementById("active-dhikr-transliteration");
  const optionButtons = [...document.querySelectorAll("[data-dhikr]")];
  const targetButtons = [...document.querySelectorAll("[data-target]")];
  const circumference = 2 * Math.PI * 116;
  const numberFormat = new Intl.NumberFormat("en-US");

  function cleanCount(value) {
    const number = Number(value);
    return Number.isSafeInteger(number) && number >= 0 ? number : 0;
  }

  function makeDefaultState() {
    return {
      activeDhikr: "subhanallah",
      target: 33,
      counts: Object.fromEntries(Object.keys(dhikrData).map((id) => [id, 0]))
    };
  }

  function loadState() {
    const fallback = makeDefaultState();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      const counts = { ...fallback.counts };
      for (const id of Object.keys(dhikrData)) {
        counts[id] = cleanCount(parsed?.counts?.[id]);
      }
      const target = Number(parsed?.target);
      return {
        activeDhikr: Object.hasOwn(dhikrData, parsed?.activeDhikr) ? parsed.activeDhikr : fallback.activeDhikr,
        target: Number.isSafeInteger(target) && target >= 1 && target <= MAX_TARGET ? target : fallback.target,
        counts
      };
    } catch (_error) {
      return fallback;
    }
  }

  const state = loadState();

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_error) {
      counterStatus.textContent = "This browser could not save your count.";
    }
  }

  function formatNumber(value) {
    return numberFormat.format(value);
  }

  function applyTheme(theme, save = true) {
    const next = theme === "light" ? "light" : "dark";
    root.dataset.theme = next;
    themeToggle.setAttribute("aria-pressed", String(next === "light"));
    themeToggle.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (save) {
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch (_error) {
        // The theme still works for this visit if storage is unavailable.
      }
    }
  }

  function getSavedTheme() {
    try {
      return window.localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
    } catch (_error) {
      return "dark";
    }
  }

  function updateView() {
    const count = state.counts[state.activeDhikr];
    const remaining = Math.max(0, state.target - count);
    const percent = state.target > 0 ? Math.min(100, Math.round((count / state.target) * 100)) : 0;
    const phrase = dhikrData[state.activeDhikr];

    countValue.textContent = formatNumber(count);
    countButton.setAttribute("aria-label", `Count ${phrase.name}. Current count: ${formatNumber(count)}. Activate to count once more.`);
    activeName.textContent = phrase.name;
    activeArabic.textContent = phrase.arabic;
    activeMeaning.textContent = phrase.meaning;
    targetSummary.textContent = formatNumber(state.target);
    remainingCount.textContent = formatNumber(remaining);
    progressLabel.textContent = `${percent}% complete`;
    progressRing.style.strokeDasharray = String(circumference);
    progressRing.style.strokeDashoffset = String(circumference * (1 - percent / 100));
    decreaseButton.disabled = count === 0;
    resetButton.disabled = count === 0;
    totalCount.textContent = formatNumber(Object.values(state.counts).reduce((sum, value) => sum + value, 0));

    optionButtons.forEach((button) => {
      const selected = button.dataset.dhikr === state.activeDhikr;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
      const countNode = button.querySelector("[data-option-count]");
      if (countNode) countNode.textContent = formatNumber(state.counts[button.dataset.dhikr]);
    });

    targetButtons.forEach((button) => {
      const selected = Number(button.dataset.target) === state.target;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function setTarget(target) {
    if (!Number.isSafeInteger(target) || target < 1 || target > MAX_TARGET) {
      counterStatus.textContent = `Choose a goal between 1 and ${formatNumber(MAX_TARGET)}.`;
      return false;
    }
    state.target = target;
    saveState();
    updateView();
    counterStatus.textContent = `Goal set to ${formatNumber(target)}.`;
    return true;
  }

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!Object.hasOwn(dhikrData, button.dataset.dhikr)) return;
      state.activeDhikr = button.dataset.dhikr;
      saveState();
      updateView();
      counterStatus.textContent = `${dhikrData[state.activeDhikr].name} selected.`;
    });
  });

  countButton.addEventListener("click", () => {
    const previousCount = state.counts[state.activeDhikr];
    if (previousCount < Number.MAX_SAFE_INTEGER) state.counts[state.activeDhikr] = previousCount + 1;
    const currentCount = state.counts[state.activeDhikr];
    saveState();
    updateView();
    if (previousCount < state.target && currentCount >= state.target) {
      counterStatus.textContent = `Masha'Allah! You reached your goal of ${formatNumber(state.target)}.`;
    } else {
      counterStatus.textContent = `${dhikrData[state.activeDhikr].name}: ${formatNumber(currentCount)}.`;
    }
  });

  decreaseButton.addEventListener("click", () => {
    if (state.counts[state.activeDhikr] === 0) return;
    state.counts[state.activeDhikr] -= 1;
    saveState();
    updateView();
    counterStatus.textContent = "One count removed.";
  });

  resetButton.addEventListener("click", () => {
    const phrase = dhikrData[state.activeDhikr].name;
    const approved = window.confirm(`Reset the saved count for ${phrase}?`);
    if (!approved) return;
    state.counts[state.activeDhikr] = 0;
    saveState();
    updateView();
    counterStatus.textContent = `${phrase} count reset.`;
  });

  targetButtons.forEach((button) => {
    button.addEventListener("click", () => setTarget(Number(button.dataset.target)));
  });

  document.getElementById("target-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("custom-target");
    if (setTarget(Number(input.value))) input.value = "";
  });

  themeToggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  applyTheme(getSavedTheme(), false);
  updateView();
})();
