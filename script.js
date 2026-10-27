const PHONE_NUMBER = "6123456789";

document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const modeLabel = document.querySelector('#mode-label');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            if (modeLabel) modeLabel.textContent = "Mode Gelap";
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (modeLabel) modeLabel.textContent = "Mode Gelap";
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (modeLabel) modeLabel.textContent = "Mode Terang";
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme);
    }
    const profileForm = document.getElementById('profileForm');
    const resultCard = document.getElementById('resultCard');
    const displayName = document.getElementById('displayName');
    const displayProdi = document.getElementById('displayProdi');
    const waButton = document.getElementById('waButton');

    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nama = document.getElementById('namaInput').value;
            const prodi = document.getElementById('prodiInput').value;

            displayName.textContent = nama;
            displayProdi.textContent = prodi;
            resultCard.classList.remove('hidden');

            const message = `Halo, saya ${nama} dari prodi ${prodi}. Saya ingin menghubungi Anda!`;
            const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
            
            waButton.setAttribute('href', waUrl);
        });
    }
});