function toggleTheme() {
      document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    }

    function showModal() {
      document.getElementById('feedbackModal').style.display = 'block';
    }

    function hideModal() {
      document.getElementById('feedbackModal').style.display = 'none';
    }

    const targetDate = new Date('2025-07-03T19:00:00');
    const timerEl = document.getElementById('timer');
    function updateTimer() {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        timerEl.innerText = 'Бургер уже готов!';
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      timerEl.innerText = `До запуска: ${d}д ${h}ч ${m}м ${s}с`;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));