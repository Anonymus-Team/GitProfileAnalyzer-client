window.addEventListener('load', function(){
    let submit = document.getElementById('submit');
    submit.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementsByTagName('h2')[0].hidden = false;
        document.getElementsByTagName('iframe')[0].hidden = false;
        link = document.getElementById('link').value
        fetch(`http://localhost:3000/analyze?link=${link}`)
            .then((response) => {
                console.log(response.json())
            });
    });
});
