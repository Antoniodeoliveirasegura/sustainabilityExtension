const API_BASE = "https://sustainability-api.onrender.com";
const API_KEY = "sikeee";

window.onload = () => {
  chrome.storage.local.get("detectedBrand", ({ detectedBrand }) => {
    const result = document.getElementById("brandResult");

    if (!detectedBrand) {
      result.innerText = "No brand detected.";
      return;
    }

    result.innerText = `Checking sustainability for "${detectedBrand}"...`;

    fetch(`${API_BASE}/brand?name=${encodeURIComponent(detectedBrand)}`, {
      headers: {
        "X-API-Key": API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        result.innerText = `No info found for "${detectedBrand}".`;
      } else {
        // Inject basic structure
        result.innerHTML = `
          <strong>${data.brand}</strong>
          <div id="ratingContainer"></div>
          <div class="info-line"><b>💲 Price:</b> ${data.price}</div>
          <div class="info-line"><b>📍 Location:</b> ${data.location}</div><br>
          <a href="${data.source}" target="_blank">View Full Profile</a>
        `;

        // Safely add animated badge after DOM insertion
        const badge = document.createElement("div");
        badge.className = `rating-badge ${getRatingClass(data.rating)}`;
        badge.title = "Rating from Good On You";
        badge.textContent = data.rating;

        document.getElementById("ratingContainer").appendChild(badge);
      }
    })
    .catch(err => {
      result.innerText = "Failed to contact the API.";
      console.error(err);
    });
  });
};

function getRatingClass(rating) {
  const r = rating.toLowerCase();
  if (r.includes("great") || r.includes("excellent")) return "rating-high";
  if (r.includes("it's a start") || r.includes("medium")) return "rating-medium";
  return "rating-low";
}
