const faqJsonUrl = "data/faq.json";

fetch(faqJsonUrl)
   .then((response) => response.json())
   .then((data) => {
      const faqContainer = document.querySelector(".faq-container");
      faqContainer.innerHTML = "";

      data.forEach((item, index) => {
         const faqItem = document.createElement("div");
         faqItem.classList.add("faq-item");
         if (index === 0) faqItem.classList.add("faq-active"); // buka yang pertama

         faqItem.innerHTML = `
            <h3>${item.question}</h3>
            <div class="faq-content">
               <p>${item.answer}</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
         `;

         faqItem.addEventListener("click", () => {
            document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle").forEach((faqItem) => {
               faqItem.addEventListener("click", () => {
                  faqItem.parentNode.classList.toggle("faq-active");
               });
            });
         });

         faqContainer.appendChild(faqItem);
      });
   })
   .catch((error) => console.error("Gagal memuat FAQ:", error));
