
const alertBanner =  document.getElementById('alert');


// create the html for the banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener ('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});


// Traffic Chart
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        backgroundColor: "rgba(116, 119, 191,.3)",
        borderColor: '#7477BF',
        fill: true,
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

//Creating the actual chart{
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });


    // Bar Graph

    const dailyCanvas = document.getElementById('daily-chart');

    let dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            Label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1,
        }]
    };

    const dailyOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
            display: false
            }
        }
    };

// Creating the actual chart

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions

});


// Mobile Chart
const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
        label: '# of Users',
        data: [500, 550, 2000],
        borderWidth: 0,
        backgroundColor: [
            '#78CF82', // green
            '#51B6C8', // bLue
            '#7477BF' // purple
        ]
    }]
};

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold',
            }
        }
    }
};

// Creating the actual chart

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
}); 


// Variables for the Message Section
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// Event Listener on send

send.addEventListener ('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});