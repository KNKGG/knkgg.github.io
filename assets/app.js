(function () {
  const listEl = document.getElementById("note-list");
  const searchEl = document.getElementById("search");

  const notes = NOTES.slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  function groupByCategory(arr) {
    const map = new Map();
    for (const n of arr) {
      const key = n.category || "其他";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(n);
    }
    return map;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render(filter) {
    const kw = (filter || "").trim().toLowerCase();
    const filtered = notes.filter(function (n) {
      if (!kw) return true;
      const hay = (n.title + " " + (n.desc || "") + " " + (n.category || "") + " " + n.date).toLowerCase();
      return hay.indexOf(kw) !== -1;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = '<p class="empty-hint">没有匹配的笔记</p>';
      return;
    }

    const groups = groupByCategory(filtered);
    let html = "";
    groups.forEach(function (items, category) {
      html += '<section class="category"><h2>' + escapeHtml(category) + "</h2>";
      items.forEach(function (n) {
        html +=
          '<div class="note-item"><a href="' + escapeHtml(n.url) + '">' + escapeHtml(n.title) + "</a>" +
          '<span class="date">' + escapeHtml(n.date) + "</span></div>";
      });
      html += "</section>";
    });
    listEl.innerHTML = html;
  }

  if (searchEl) {
    searchEl.addEventListener("input", function () {
      render(searchEl.value);
    });
  }

  render("");
})();
