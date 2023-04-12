const btn_search = document.getElementById('btn-search');
const div_alert = document.getElementById('alert');
const pesan = document.getElementById('pesan');
// Kotak Keterangan
const total_active = document.getElementById('total_active');
const total_new = document.getElementById('total_new');
const total_recovered = document.getElementById('total_recovered');
const total_cases = document.getElementById('total_cases');
const total_deaths = document.getElementById('total_deaths');
const total_tests = document.getElementById('total_tests');

btn_search.addEventListener('click', function () {
    let search = document.getElementById('search').value;
    
    let json_fetch = getData(search);


    json_fetch
        .then(data => data.json())
        .then(data => {
            // hasil.innerHTML = data.response[0].cases.active;
            total_active.innerHTML = data.response[0].cases.active ? data.response[0].cases.active : '0';
            total_new.innerHTML = data.response[0].cases.new ? data.response[0].cases.new : '0';
            total_recovered.innerHTML = data.response[0].cases.recovered ? data.response[0].cases.recovered : '0';
            total_cases.innerHTML = data.response[0].cases.total ? data.response[0].cases.total : '0';
            total_deaths.innerHTML = data.response[0].deaths.total ? data.response[0].deaths.total : '0';
            total_tests.innerHTML = data.response[0].tests.total ? data.response[0].tests.total : '0';

            console.log(data.response[0].cases ? 'Berhasil keambil' : 'Data kosong');
        })
        .catch(err => {
            div_alert.classList.remove('hidden');
            pesan.innerHTML = "Negara tidak diketahui";

            let countDown = 3;
            let x = setInterval(function() {
            if (countDown <= 0) {
                clearInterval(x);
                console.log("WAKTU TELAH BERAKHIR");
                div_alert.classList.add('hidden');
            } else {
                countDown--;
            }
            }, 1000);
        });
});

// FUngsi untuk mengambil data covid pada Rapid API
function getData(country) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    let hasil_fetch;

    return fetch('https://covid-193.p.rapidapi.com/statistics?country='+country, options)
}