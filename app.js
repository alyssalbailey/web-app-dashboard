
const alert =  document.getElementById('alert');

// create the html for the banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> over tasks to complete</p>
    <p class="alert-banenr-close">x</p>
</div>
`

alertBanner.addEventListener ('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
});
