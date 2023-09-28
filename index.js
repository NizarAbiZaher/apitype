const baseUrl = 'http://localhost:2000'

const button = document.getElementById('button');

button.addEventListener('click', response)

const response = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api`, {
        method: 'GET'
    })
    console.log(res)

    const data = await res.json();

    input.value = data.message;
}



