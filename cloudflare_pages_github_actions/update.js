function updateData() {
  fetch("https://api.github.com/repos/rogerting17/growth-data-app/dispatches", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_GITHUB_PAT",
      "Accept": "application/vnd.github.everest-preview+json"
    },
    body: JSON.stringify({
      event_type: "update_data"
    })
  })
  .then(res => {
    if (res.ok) {
      document.getElementById("status").innerText = "✅ 已送出更新指令！";
    } else {
      return res.text().then(text => { throw new Error(text); });
    }
  })
  .catch(err => {
    document.getElementById("status").innerText = "❌ 發送失敗：" + err.message;
  });
}
