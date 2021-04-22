
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

//Peparing the data for the charts 

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

// Bar Chart

var ctx = document.getElementById('traffic-chart');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: frameworks,
        datasets: [{
            label: 'Popular JavaScript Frameworks',
            data: stars
        }]
    }
    options: {} // this is optional
 }
)


