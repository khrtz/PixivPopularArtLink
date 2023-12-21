const observerCallback = (mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            setTimeout(() => {
                document.querySelectorAll('span[to^="/artworks/"]').forEach(span => {
                    let targetElement = span.closest('.gtm-search-box-popular-artwork');
                    if (targetElement && !targetElement.parentNode.previousElementSibling?.classList.contains('custom-view-link')) {
                        const link = document.createElement('a');
                        link.href = `https://www.pixiv.net${span.getAttribute('to')}`;
                        link.textContent = '作品を見る';
                        link.className = 'custom-view-link';
                        link.style.display = 'block';
                        link.style.padding = '10px 5px';
                        link.style.backgroundColor = '#0096fa';
                        link.style.color = 'white';
                        link.style.fontSize = '14px';
                        link.style.writingMode = 'vertical-rl';
                        link.target = '_blank';
                        link.style.borderRadius = '3px';
                        targetElement.parentNode.parentNode.insertBefore(link, targetElement.parentNode);
                    }
                });
            }, 1500);
        }
    }
};

const observer = new MutationObserver(observerCallback);
observer.observe(document.body, { childList: true, subtree: true });
