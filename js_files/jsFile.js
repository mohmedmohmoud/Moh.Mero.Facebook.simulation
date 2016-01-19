function addRow(){
      var tablebody = document.getElementById("table_body");
      var td1 = document.createElement("td");
      
      var rows = document.createElement("tr");
      td1.innerHTML = document.getElementById("text_area_content").value+"<hr>";
      rows.appendChild(td1);
      
      tablebody.appendChild(rows);
    }

    function like_or_dislike() {
    var image = document.getElementById('likes');
    if (image.src.match("unlike")) {
        image.src = "like.png";
    } else {
        image.src = "unlike.png";
    }
    }

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

    function keypreesed(e){
        if(e.keyCode === 13){
            var tablebody = document.getElementById("table_body");
            var td2 = document.createElement("td");
            
            var rows = document.createElement("tr");
            td2.innerHTML = document.getElementById("TA_comment").value+"<hr>";
            rows.appendChild(td2);
            
            tablebody.appendChild(rows);
           }
        return false;
    }