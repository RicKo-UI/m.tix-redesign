const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

document.addEventListener('DOMContentLoaded', (event) => {
    const otpInputs = document.querySelectorAll('.otp-input');
    const submitBtn = document.getElementById('submitBtn');

    otpInputs.forEach(input => {
        input.addEventListener('input', () => {
            let filled = true;
            otpInputs.forEach(i => {
                if (i.value === '') {
                    filled = false;
                }
            });
            submitBtn.disabled = !filled;
        });
    });

    document.getElementById('otpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const otp = Array.from(otpInputs).map(input => input.value).join('');
        if (otp.length === 4) {
            // Simulasi pengecekan OTP dan pengalihan halaman
            alert('Kode OTP benar! Mengalihkan ke halaman berikutnya...');
            window.location.href = 'index.html';
        } else {
            alert('Kode OTP salah, silakan coba lagi.');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".otp-input");
    const submitBtn = document.getElementById("submitBtn");
    const countdownElement = document.getElementById("countdown");
    const resendLink = document.getElementById("resendLink");
    let countdown = 60;

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            let allFilled = true;
            inputs.forEach(i => {
                if (i.value === "") {
                    allFilled = false;
                }
            });
            submitBtn.disabled = !allFilled;
        });

        input.addEventListener("keyup", (e) => {
            if (e.key === "Backspace" && input.previousElementSibling) {
                input.previousElementSibling.focus();
            } else if (input.nextElementSibling) {
                input.nextElementSibling.focus();
            }
        });
    });

    function startCountdown() {
        const interval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(interval);
                resendLink.classList.remove("disabled");
                resendLink.style.pointerEvents = "auto";
                countdownElement.textContent = "";
            }
        }, 1000);
    }

    startCountdown();

    resendLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (!resendLink.classList.contains("disabled")) {
            countdown = 60;
            resendLink.classList.add("disabled");
            countdownElement.textContent = countdown;
            resendLink.style.pointerEvents = "none";
            startCountdown();
        }
    });
});

function filterGenre(genre) {
    let allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.style.display = 'none');
    
    if (genre === 'all') {
        allCards.forEach(card => card.style.display = 'block');
    } else {
        let genreCards = document.querySelectorAll(`.genre-${genre}`);
        genreCards.forEach(card => card.style.display = 'block');
    }

    // Update active button style
    let genreButtons = document.querySelectorAll('.btn-outline-primary, .btn-outline-secondary');
    genreButtons.forEach(button => {
        button.classList.remove('btn-outline-primary');
        button.classList.add('btn-outline-secondary');
    });

    // Set the clicked button to primary
    if (genre === 'all') {
        document.getElementById('all-genre-btn').classList.remove('btn-outline-secondary');
        document.getElementById('all-genre-btn').classList.add('btn-outline-primary');
    } else {
        let activeButton = document.querySelector(`.btn-outline-secondary[onclick="filterGenre('${genre}')"]`);
        if (activeButton) {
        activeButton.classList.remove('btn-outline-secondary');
        activeButton.classList.add('btn-outline-primary');
        }
    }
}





const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}