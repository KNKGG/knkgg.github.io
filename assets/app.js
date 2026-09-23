(function () {
  const listEl = document.getElementById("note-list");
  const navEl = document.getElementById("cat-nav");
  const searchEl = document.getElementById("search");
  const titleEl = document.getElementById("content-title");

  const notes = NOTES.slice().sort(function (a, b) {
    return a.date < b.date ? 1 : -1;
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function getCategories() {
    const map = new Map();
    NOTES.forEach(function (n) {
      const key = n.category || "其他";
      map.set(key, (map.get(key) || 0) + 1);
    });
    return Array.from(map.entries());
  }

  let state = { category: "总览" };

  function renderNav() {
    const kw = searchEl && searchEl.value.trim();
    const active = kw ? "总览" : state.category;
    let html =
      '<button class="cat-item' + (active === "总览" ? " active" : "") +
      '" data-cat="总览"><span>总览</span><span class="count">' + NOTES.length + "</span></button>";
    getCategories().forEach(function (c) {
      html +=
        '<button class="cat-item' + (active === c[0] ? " active" : "") +
        '" data-cat="' + escapeHtml(c[0]) + '"><span>' + escapeHtml(c[0]) +
        '</span><span class="count">' + c[1] + "</span></button>";
    });
    navEl.innerHTML = html;
  }

  function noteItemHtml(n) {
    return (
      '<div class="note-item">' +
      '<div class="note-main"><a class="note-title" href="' + escapeHtml(n.url) + '">' + escapeHtml(n.title) + "</a>" +
      (n.desc ? '<p class="note-desc">' + escapeHtml(n.desc) + "</p>" : "") +
      "</div>" +
      '<span class="date">' + escapeHtml(n.date) + "</span></div>"
    );
  }

  function render() {
    const kw = searchEl ? searchEl.value.trim().toLowerCase() : "";

    let filtered = notes.filter(function (n) {
      if (!kw) return true;
      const hay = (n.title + " " + (n.desc || "") + " " + (n.category || "") + " " + n.date).toLowerCase();
      return hay.indexOf(kw) !== -1;
    });

    if (state.category !== "总览" && !kw) {
      filtered = filtered.filter(function (n) {
        return (n.category || "其他") === state.category;
      });
    }

    if (kw) {
      titleEl.textContent = "搜索：" + searchEl.value.trim();
    } else {
      titleEl.textContent = state.category === "总览" ? "总览" : state.category;
    }

    if (filtered.length === 0) {
      listEl.innerHTML = '<p class="empty-hint">没有匹配的笔记</p>';
      return;
    }

    const groups = new Map();
    filtered.forEach(function (n) {
      const key = n.category || "其他";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(n);
    });

    const collapsible = state.category === "总览";
    const forceOpen = !!kw;
    let html = "";
    groups.forEach(function (items, category) {
      if (collapsible) {
        html += '<details class="cat-group"' + (forceOpen ? " open" : "") + ">";
        html +=
          '<summary><span class="cat-name">' + escapeHtml(category) +
          '</span><span class="cat-count">' + items.length + "</span></summary>";
        items.forEach(function (n) { html += noteItemHtml(n); });
        html += "</details>";
      } else {
        items.forEach(function (n) { html += noteItemHtml(n); });
      }
    });
    listEl.innerHTML = html;
  }

  if (navEl) {
    navEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".cat-item");
      if (!btn) return;
      state.category = btn.getAttribute("data-cat");
      if (searchEl) searchEl.value = "";
      renderNav();
      render();
    });
  }

  if (searchEl) {
    searchEl.addEventListener("input", function () {
      state.category = "总览";
      renderNav();
      render();
    });
  }

  renderNav();
  render();
})();
