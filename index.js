const btn = document.getElementById('btn');
const light = document.getElementById('light');

btn.onclick = () => {
    btn.classList.toggle('active');
    light.classList.toggle('on');
}