if (typeof window !== 'undefined' && typeof window.LightweightCharts === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/lightweight-charts@latest/dist/lightweight-charts.standalone.production.js';
    script.async = false;
    document.head.appendChild(script);
}
