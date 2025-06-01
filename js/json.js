const lombaJsonUrl = "data/lomba.json";
const faqJsonUrl = "data/faq.json";
const partnerJsonUrl = "data/partner.json";

// Bidang Perlombaan
fetch(lombaJsonUrl)
   .then((res) => res.json())
   .then((data) => {
      const tabContent = document.querySelector(".tab-content");
      tabContent.innerHTML = "";

      data.forEach((item, index) => {
         const isActive = index === 0 ? "active show" : "";
         const listItems = item.list.map((text) => `<li><i class="bi bi-check2-all"></i> <span>${text}</span></li>`).join("");

         const html = `
            <div class="tab-pane fade ${isActive}" id="${item.id}">
               <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>${item.title}</h3>
                  <p class="fst-italic">${item.description}</p>
                  <ul>${listItems}</ul>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="${item.image}" alt="${item.title}" class="img-fluid rounded">
                  </div>
               </div>
            </div>
         `;

         tabContent.innerHTML += html;
      });
   })
   .catch((err) => console.error("Gagal load data lomba:", err));

// FAQ
fetch(faqJsonUrl)
   .then((response) => response.json())
   .then((data) => {
      const faqContainer = document.querySelector(".faq-container");
      faqContainer.innerHTML = "";

      data.forEach((item, index) => {
         const faqItem = document.createElement("div");
         faqItem.classList.add("faq-item");
         if (index === 0) faqItem.classList.add("faq-active");

         faqItem.innerHTML = `
            <h3>${item.question}</h3>
            <div class="faq-content">
               <p>${item.answer}</p>
            </div>
            <i class="faq-toggle bi bi-chevron-right"></i>
         `;

         faqItem.querySelector(".faq-item h3, .faq-item .faq-toggle").addEventListener("click", () => {
            faqItem.classList.toggle("faq-active");
         });

         faqContainer.appendChild(faqItem);
      });
   })
   .catch((error) => console.error("Gagal memuat FAQ:", error));

// Partner
fetch(partnerJsonUrl)
   .then((response) => response.json())
   .then((data) => {
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      swiperWrapper.innerHTML = "";

      data.forEach((partner) => {
         const slide = document.createElement("div");
         slide.className = "swiper-slide";

         const img = document.createElement("img");
         img.src = partner.image;
         img.alt = "Partner";
         img.className = "img-fluid";

         slide.appendChild(img);
         swiperWrapper.appendChild(slide);
      });
   })
   .catch((error) => console.error("Gagal memuat partner.json:", error));
