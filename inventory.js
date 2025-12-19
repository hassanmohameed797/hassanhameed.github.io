(function () {
            const modal = document.getElementById('reviewModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalModel = document.getElementById('modalModel');
            const modalPrice = document.getElementById('modalPrice');
            const modalReview = document.getElementById('modalReview');

            document.querySelectorAll('.review-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const card = btn.parentElement;
                    const title = card.querySelector('h3')?.textContent || '';
                    const ps = card.querySelectorAll('p');
                    const model = ps[0]?.textContent || '';
                    const price = ps[1]?.textContent || '';
                    const review = card.getAttribute('data-review') || 'No review available.';
                    modalTitle.textContent = title;
                    modalModel.textContent = model;
                    modalPrice.textContent = price;
                    modalReview.textContent = review;
                    modal.classList.add('open');
                    modal.setAttribute('aria-hidden', 'false');
                });
            });

            modal.querySelector('.modal-close').addEventListener('click', function () {
                modal.classList.remove('open');
                modal.setAttribute('aria-hidden', 'true');
            });
            modal.addEventListener('click', function (e) { if (e.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); } });
        })();