const container = document.getElementById('container')
const file = document.getElementById('file');
const run = document.getElementById('run')
const clickCount = document.getElementById('click-count')

let count  = 0;

run.addEventListener('click', function() {
    count++
    console.log(count)

    clickCount.innerText = count
    setTimeout(() => {
        const interval = setInterval(() => {
            file.value+=2
            if(file.value === file.max) {
                file.value = 0
                clearInterval(interval);
                clickCount.innerText = (count-1)
                count--
            }
        }, 60);
    }, 2000);
})

