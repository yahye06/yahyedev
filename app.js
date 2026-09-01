function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupInterestForm() {
  const form = document.getElementById("interestForm");
  const status = document.getElementById("interestStatus");
  const submit = document.getElementById("interestSubmit");
  if (!form || !status || !submit) return;

  form.addEventListener("submit", async (event) => {
    const defaultSubmitText = submit.textContent;
    event.preventDefault();
    status.textContent = "";
    submit.setAttribute("disabled", "disabled");
    submit.textContent = "Sending...";

    const formData = new FormData(form);
    const payload = {
      full_name: String(formData.get("full_name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim() || null,
      business_name: String(formData.get("business_name") || "").trim() || null,
      business_type: String(formData.get("business_type") || "").trim() || null,
      biggest_pain: String(formData.get("biggest_pain") || "").trim() || null,
      message: String(formData.get("message") || "").trim() || null,
      website: String(formData.get("website") || "").trim() || null,
    };

    try {
      const response = await fetch("/site/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        status.textContent = "Could not send this right now. Please email abduk010@umn.edu directly.";
        return;
      }

      status.textContent = data.delivered_to_inbox
        ? "Thanks. Your request was received and we will follow up shortly."
        : "Thanks. We got your request and will follow up soon.";
      form.reset();
    } catch (error) {
      status.textContent = "Connection issue. Please email abduk010@umn.edu directly.";
    } finally {
      submit.removeAttribute("disabled");
      submit.textContent = defaultSubmitText;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupRevealAnimations();
  setupInterestForm();
});
