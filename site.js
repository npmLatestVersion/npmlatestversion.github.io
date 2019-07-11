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


router = new Navigo('http://0.0.0.0:8000/');

// getElementById wrapper
function $id(id) {
    return document.getElementById(id);
  }
  
  // asyncrhonously fetch the html template partial from the file directory,
  // then set its contents to the html of the parent element
  function loadHTML(url, id) {
    req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
      $id(id).innerHTML = req.responseText;
    };
  }
  
  router.on({
    // 'view' is the id of the div element inside which we render the HTML
    '/:packageName': (params) => { $id('view').innerHTML = '<h2>' + params.packageName + '</h2>';  },
  });
  
  // set the default route
  router.on(() => { });
  
  // set the 404 route
  router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });
  
  router.resolve();