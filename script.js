var inputMetric = document.getElementById('metricSelector');
var selectMetricValue = document.getElementById('selectmetric');
var kgsValue = document.getElementById('kgsvalue');
var gramsValue = document.getElementById('gramsvalue');
var poundsValue = document.getElementById('poundsvalue');
var test =localStorage.getItem('test');

inputMetric.setAttribute('value', test);

inputMetric.addEventListener('keypress', preventthedefault);
inputMetric.addEventListener('input', valueEntered);
selectMetricValue.addEventListener('input', valueEntered);

localStorage.setItem('test', inputMetric.value)
var test = localStorage.getItem('test')
console.log('Local storage item is ' + test);

if (inputMetric != ''){
    valueEntered();
    console.log('Triggered IF')
}

function valueEntered(e){
    //console.log(e.target.value);
    var metricValue = selectMetricValue.value.toLowerCase();
    // console.log(metricVaue.toLowerCase());
    if(metricValue === 'kilogram'){
        console.log('Triggered Kilograms')
        // kgsValue.innerText = 'Triggered';
        kgsValue.innerText = inputMetric.value;
        gramsValue.innerText = inputMetric.value * 1000;
        poundsValue.innerText = inputMetric.value * 2.205.toFixed(2);
        localStorage.setItem('test', inputMetric.value);
        test = localStorage.getItem('test');
        console.log('Local storage item is ' + test);
    }else if(metricValue === 'grams'){
        console.log('Triggered Grams');
        kgsValue.innerText = (inputMetric.value/1000).toFixed(2);
        gramsValue.innerText = inputMetric.value;
        poundsValue.innerText = ((inputMetric.value/1000)*2.205).toFixed(2);
        localStorage.setItem('test', inputMetric.value);
        test = localStorage.getItem('test');
    }else if(metricValue === 'pounds'){
        console.log('Triggered Pounds');
        kgsValue.innerText = (inputMetric.value/2.205).toFixed(2);
        gramsValue.innerText = (inputMetric.value*453.592).toFixed(2);
        poundsValue.innerText = inputMetric.value;
        localStorage.setItem('test', inputMetric.value);
        test = localStorage.getItem('test');
    }
}

function preventthedefault(e){
    if(e.key === 'Enter'){
        // console.log('Enter Key');
        e.preventDefault();
    }
}
