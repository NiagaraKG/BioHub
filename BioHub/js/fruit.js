if(window.XMLHttpRequest)
    {
      xmlhttp = new XMLHttpRequest();
    }
    else
    {
      xmlhttp = newActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "/xml/fruit.xml", false)
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;
    var producers = xmlDoc.getElementsByTagName("producer");
    var container = document.getElementById("container");
    var code;
    for (i=0;i<producers.length;i++)
    { 
      code += '<div class="card"><img src="'+
      producers[i].getElementsByTagName("image-src")[0].childNodes[0].nodeValue+'"><h4>'
      +producers[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+'</h4><div class="details"><p class="product">'
      +producers[i].getElementsByTagName("product")[0].childNodes[0].nodeValue
      +'</p><p class="location">'+producers[i].getElementsByTagName("location")[0].childNodes[0].nodeValue
      +'</p></div><a href="'+producers[i].getElementsByTagName("website")[0].childNodes[0].nodeValue+'" target="_blank">Към сайта</a></div>'
    }
    code = code.slice(9);
    container.innerHTML = code;
