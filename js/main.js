document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add card hover effects
    const cards = document.querySelectorAll('.schedule-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add back button to return to dashboard
    // const backButton = document.createElement('a');
    // backButton.href = '../../index.html';
    // backButton.className = 'back-button';
    // backButton.innerHTML = '← Kembali ke Dashboard';
    // document.body.appendChild(backButton);

    // Add animation for petugas items
    const petugasItems = document.querySelectorAll('.petugas-item');
    petugasItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(3px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Cari nama petugas...';
    searchInput.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        border-radius: 25px;
        border: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(searchInput);

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const petugasItems = document.querySelectorAll('.petugas-item');
        
        petugasItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});
