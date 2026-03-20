class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="contact" class="footer">
            <div class="footer-content animate-up">
                <div class="brand-footer">
                    <h3 class="brand">Artificialis</h3>
                    <p class="by-artificialis">Innovating Healthcare.</p>
                </div>
                <div class="contact-info">
                    <p data-i18n="navContact" class="contact-title">Contatti</p>
                    <a href="mailto:artificialis0@gmail.com" class="email-link">artificialis0@gmail.com</a>
                </div>
            </div>
            <div class="footer-bottom" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-align: center;">
                <p data-i18n="footerText">© 2026 Artificialis. Tutti i diritti riservati.</p>
                <div class="legal-info" style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
                    <p><strong>Ragione Sociale:</strong> Artificialis srl | <strong>Partita IVA:</strong> IT03476380732</p>
                    <p><strong>Sede Legale:</strong> VIA DEL TRATTURELLO TARANTINO</p>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('app-footer', AppFooter);
