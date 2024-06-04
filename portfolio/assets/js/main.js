const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  try {
    await navigator.share({ title: "portfolio", url: "" });
    console.log("Data was shared successfully");
  } catch (err) {
    console.error("Share failed:", err.message);
  }
});
