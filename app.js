// Add Address Modal - used some of the details from w3schools

let modal = document.getElementById("addAddressModal");

let btn = document.getElementById("addAddressBtn")

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add Contact Function
function addContact() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const street = document.getElementById("street").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const phone = document.getElementById("phone").value;

// Checks if the first & last name fields are filled out  
  if (firstName == "" || lastName == "") {
    alert("The first and last name fields must be filled out");
  }

  // Gets the correct letter table based on the first letter of the last name
  const tableId = document.getElementById(`${lastName[0].toLowerCase()}`)

  // Appends the new contact to the table
  $(tableId).append(
    `<tr class="contact-row">
      <td>
        <p>
          <span class="contactFirstName">${firstName}</span>
          <span class="contactLastName">${lastName}</span>
          <br>
          <span class="contactStreet">${street}</span>
          <br>
          <span class="contactCity">${city}</span>
          <span class="contactState">${state}</span>
          <span class="contactZip">${zip}</span>
          <br>
          <span class="phone">${phone}</span>
        </p>
      </td>    
      <td>
        <button onclick="$(this).closest('tr').remove();">
          <strong>x</strong>
        </button>
      </td>
    </tr>`);   

    modal.style.display = "none";
}


// Edit Contact Function


// Delete Contact Function
$(".deleteBtn").click(function() {
  $(this).closest('tr').remove();
}); 

// jQuery Search Function (used most of a function from stack overflow. See README.md)
$("#search-field").each(function() {

  $(this).bind("propertychange keyup input cut paste", function() {
    let txtVal = $(this).val();
    $(".message").remove();
    if (txtVal != "") {
        $(".contact-table").show();
        $.each($('.contact-table'), function (i, o) {
            var match = $("td:contains-ci('" + txtVal + "')", this);
            match.parent().siblings().hide();                 
            if (match.length > 0) $(match).parent("tr").show();
            else $(this).hide();
        });
    } else {
        // When there is no input show everything
        $("tbody > tr", this).show();
    }
    if($('.contact-table:visible').length == 0)
    {
        $('#search-field').after('<p class="message">Sorry No results found!!!</p>');
    }
    })

})



// jQuery expression for case-insensitive filter
$.extend($.expr[":"], {
  "contains-ci": function (elem, i, match, array) {
      return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
