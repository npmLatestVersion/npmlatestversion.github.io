let el = document.getElementById("packageName");
el.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        var packageName = el.value
        fetch(`https://y8bpiklk4e.execute-api.us-east-1.amazonaws.com/dev/packages/${packageName}`)
            .then(function (res) {
                return res.json()
            })    
            .then(function(res) {
                let latest = document.getElementById("latest");
                latest.innerHTML = JSON.stringify(res)
            })
    }
});
