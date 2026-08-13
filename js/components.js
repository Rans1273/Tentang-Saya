document.addEventListener("DOMContentLoaded", function() {
    // Cek apakah halaman berada di dalam folder 'pages/' atau direktori utama
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    const pathToRoot = isInPagesFolder ? "../" : "";

    // Template Navbar
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div class="container">
                <a class="navbar-brand fw-bold" href="${pathToRoot}index.html">
                    <span class="text-primary">Asran</span>Portofolio
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-2">
                        <li class="nav-item"><a class="nav-link" href="${pathToRoot}index.html">Beranda</a></li>
                        <li class="nav-item"><a class="nav-link" href="${pathToRoot}pages/about.html">Tentang</a></li>
                        <li class="nav-item"><a class="nav-link" href="${pathToRoot}pages/experience.html">Pengalaman</a></li>
                        <li class="nav-item"><a class="nav-link" href="${pathToRoot}pages/projects.html">Proyek</a></li>
                        <li class="nav-item"><a class="nav-link" href="${pathToRoot}pages/contact.html">Kontak</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Template Footer
    const footerHTML = `
        <footer class="bg-dark text-white text-center py-4 mt-5 border-top border-secondary">
            <div class="container">
                <p class="mb-1">&copy; 2026 Asran. Universitas Borneo Tarakan.</p>
                <small class="text-muted">Dibuat dengan HTML, CSS, Bootstrap, dan JavaScript.</small>
            </div>
        </footer>
    `;

    // Masukkan ke dalam DOM jika elemen tersedia
    const navContainer = document.getElementById("navbar-container");
    if (navContainer) navContainer.innerHTML = navbarHTML;

    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) footerContainer.innerHTML = footerHTML;
});