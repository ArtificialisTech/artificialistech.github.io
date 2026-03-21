class AppHeader extends HTMLElement {
    connectedCallback() {
        const isIndex = !window.location.pathname.includes('protego-care.html');
        const homeLink = isIndex ? '#home' : 'index.html#home';
        const productLink = isIndex ? '#product' : 'index.html#product';
        const teamLink = isIndex ? '#team' : 'index.html#team';
        const contactLink = isIndex ? '#contact' : 'index.html#contact';

        this.innerHTML = `
        <header class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="logo.png" alt="Artificialis Logo" class="brand-logo">
                    <span class="brand">Artificialis</span>
                </a>
                
                <div class="menu-toggle" id="menuToggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <nav class="nav-links" id="navLinks">
                    <a href="${homeLink}" data-i18n="navHome">Home</a>
                    <div class="dropdown">
                        <a href="${productLink}" class="dropbtn"><span data-i18n="navProduct">Prodotti</span> <span class="caret">▼</span></a>
                        <div class="dropdown-content">
                            <a href="protego-care.html" data-i18n="productProtegoCareName">Protego Care</a>
                        </div>
                    </div>
                    <a href="${teamLink}" data-i18n="navTeam">Chi Siamo</a>
                    <a href="${contactLink}" data-i18n="navContact">Contatti</a>
                    
                    <div class="lang-switcher">
                        <select id="langSelect" aria-label="Seleziona la lingua">
                            <option value="it">🇮🇹 ITA</option>
                            <option value="en">🇬🇧 ENG</option>
                            <option value="es">🇪🇸 SPA</option>
                            <option value="fr">🇫🇷 FRA</option>
                        </select>
                    </div>
                </nav>
            </div>
        </header>
        `;
    }
}
customElements.define('app-header', AppHeader);
