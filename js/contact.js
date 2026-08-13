// Logika untuk mengirim pesan langsung lewat email (membuka klien email / mailto atau simulasi sukses)
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Simulasi pengiriman atau membuka mail client secara otomatis
            const subject = encodeURIComponent(`Pesan dari ${name} via Portofolio`);
            const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
            
            window.location.href = `mailto:asran0193@gmail.com?subject=${subject}&body=${body}`;
            
            alert("Terima kasih! Pesan Anda sedang diproses melalui aplikasi email.");
            contactForm.reset();
        });
    }
});