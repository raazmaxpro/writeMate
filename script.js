/* ================================
   🔁 STEP 1: Handle "Generate" Click
================================== */
function setupGenerateButton() {
  const generateBtn = document.getElementById("generate-btn");

  if (!generateBtn) {
    console.error("❌ Generate button not found!");
    return;
  }

  generateBtn.addEventListener("click", handleGenerateClick);
  console.log("✅ Generate button event listener attached");
}

/* ================================
   🎯 STEP 2: Handle Generate Logic
================================== */
function handleGenerateClick() {
  console.log("👉 Generate button clicked");

  const contentType = document.getElementById("content-type").value;
  const tone = document.getElementById("tone").value;
  const topicInput = document.getElementById("topic");
  const topic = topicInput.value.trim();
  const wordCount = document.getElementById("word-count").value;

  console.log("📥 Inputs received:");
  console.log("➡️ Content Type:", contentType);
  console.log("➡️ Tone:", tone);
  console.log("➡️ Topic:", topic);
  console.log("➡️ Word Count:", wordCount);

  // Reset topic border every time
  topicInput.style.border = "1px solid #ccc";

  // 🚫 Validate topic
  if (!topic) {
    displayOutput("⚠️ Please enter a topic before generating!");
    topicInput.style.border = "2px solid red";
    topicInput.focus();
    console.warn("❌ Topic field is empty — generation stopped.");
    return;
  }

  // ✅ Proceed
  displayOutput("⏳ Generating content...");

  generateFakeContent(contentType, tone, wordCount, topic).then((generatedText) => {
    displayOutput(generatedText);
  });
}


/* ================================
   🤖 Demo AI Content Generator
================================== */
async function generateFakeContent(type, tone, wordCount, topic) {
  // This is just a fake response for demo purposes
  const result = `📝 Here's a ${tone} ${type} about "${topic}" in approximately ${wordCount} words.`;

  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 1200);
  });
}


/* ================================
   📤 STEP 3: Show Output on Page
================================== */
function displayOutput(text) {
  const outputBox = document.getElementById("output-text");

  if (!outputBox) {
    console.error("❌ Output element not found!");
    return;
  }

  outputBox.innerText = "";

  outputBox.innerText = text;
  outputBox.style.opacity = 0;

  setTimeout(() => {
    outputBox.style.opacity = 1;
    outputBox.style.transition = "opacity 0.5s ease";
  }, 100);

  console.log("✅ Output displayed");
}

/* ================================
   📋 STEP 4: Copy to Clipboard
================================== */
function setupCopyButton() {
  const copyBtn = document.getElementById("copy-btn");
  const outputBox = document.getElementById("output-text");

  if (!copyBtn || !outputBox) {
    console.warn("⚠️ Copy button or output box not found");
    return;
  }

  copyBtn.addEventListener("click", () => {
    const text = outputBox.innerText.trim();
    if (!text) {
      alert("⚠️ Nothing to copy!");
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      console.log("📋 Copied to clipboard");
      copyBtn.innerText = "✅ Copied!";
      setTimeout(() => {
        copyBtn.innerText = "📋 Copy";
      }, 1500);
    }).catch(err => {
      console.error("❌ Failed to copy:", err);
      alert("❌ Copy failed");
    });
  });

  console.log("📋 Copy button initialized");
}


/* ================================
   🚀 Initialize Everything
================================== */
window.addEventListener("DOMContentLoaded", () => {
  setupGenerateButton();
  setupCopyButton(); 
  console.log("📦 JS Loaded and Ready");
});
