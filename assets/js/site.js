(() => {
  const nav = document.querySelector('[data-site-nav]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const videos = Array.from(document.querySelectorAll('video'));

  const updateNav = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  videos.forEach((video) => {
    video.addEventListener('play', () => {
      videos.forEach((other) => {
        if (other !== video) other.pause();
      });
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) entry.target.pause();
      });
    }, { threshold: 0.05 });
    videos.forEach((video) => observer.observe(video));
  }

  const tabs = Array.from(document.querySelectorAll('[role="tab"][data-scene]'));
  const panels = Array.from(document.querySelectorAll('[data-panel]'));
  const tabList = document.querySelector('.scenario-tabs');

  const centerSelectedTab = (tab) => {
    if (!tabList || tabList.scrollWidth <= tabList.clientWidth) return;
    const left = tab.offsetLeft - (tabList.clientWidth - tab.offsetWidth) / 2;
    tabList.scrollTo({ left, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  };

  const selectScene = (index, moveFocus = false) => {
    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) tab.focus();
    });

    panels.forEach((panel) => {
      const selected = panel.dataset.panel === tabs[index].dataset.scene;
      const video = panel.querySelector('video');
      panel.hidden = !selected;

      if (selected) {
        if (video.dataset.src && video.getAttribute('src') !== video.dataset.src) {
          video.src = video.dataset.src;
        }
        video.load();
      } else {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    });

    centerSelectedTab(tabs[index]);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectScene(index));
    tab.addEventListener('keydown', (event) => {
      let nextIndex;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;
      event.preventDefault();
      selectScene(nextIndex, true);
    });
  });

  const selectedIndex = Math.max(0, tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));
  if (tabs.length) selectScene(selectedIndex);

  const mobileView = window.matchMedia('(max-width: 700px)');
  mobileView.addEventListener('change', () => {
    document.querySelectorAll('.core-video').forEach((video) => {
      if (video.getClientRects().length === 0) video.pause();
    });
  });
})();
