(function() {
  String.prototype.turkishtoEnglish = function () {
    return this.replace('Ğ','g')
      .replace('Ü','u')
      .replace('Ş','s')
      .replace('I','i')
      .replace('İ','i')
      .replace('Ö','o')
      .replace('Ç','c')
      .replace('ğ','g')
      .replace('ü','u')
      .replace('ş','s')
      .replace('ı','i')
      .replace('ö','o')
      .replace('ç','c');
  };


  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    template = function (question, answer) {
      return `
        <div class="box">
          <article class="media">
            <div class="media-content">
              <h5 class="title is-5 has-text-info">${question}</h5>
              <hr>
                <div class="content">
                  <p>${answer}</p>
                </div>
            </div>
          </article>
        </div>
      `
    }

    if (results.length) {
      var elements = [];

      for (var i = 0; i < results.length; i++) {
        var item = store[results[i].ref];
        elements.push(template(item.question, item.answer))
      }

      searchResults.innerHTML = elements.join('');
    }
    else {
      searchResults.innerHTML = `
        <div class="notification is-danger is-light">
          Herhangi bir cevap bulunamadı!
        </div>
      `
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

      if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    window.idx = lunr(function () {
      this.field('id');
      this.field('question');
      this.field('answer');

      for (var key in window.store) {
        this.add(
          {
            'id': key,
            'question': window.store[key].question.turkishtoEnglish().toLowerCase(),
            'answer': window.store[key].answer.turkishtoEnglish().toLowerCase()
          }
        )
      }
    });

    var results = idx.search(searchTerm.turkishtoEnglish().toLowerCase()); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
  else {
    var results = []
    for (var key in window.store) {
      results.push({
        ref: key
      })
    }
    displaySearchResults(results, window.store)
  }
})();
