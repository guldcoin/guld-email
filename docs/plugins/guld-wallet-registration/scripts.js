(function () {
    function generateDoc() {
        var date = new Date(Date.now());
        var registrator = document.getElementById('guld_registration_registrator').value;
        var type = document.getElementById('guld_registration_type').value;
        var name = document.getElementById('guld_registration_name').value;
        var number = document.getElementById('guld_registration_number').value;

        if (type.value == 1) {
            var doc = "; requires only sufficient guld and an open name\n"
            doc += date.getFullYear() + "/" + date.getDate() + "/" + date.getDay() + " * individual registration\n"
            doc += "    ; timestamp: " + parseInt(Date.now()/1000) + "\n"
            doc += "    " + registrator + ":Assets   -1 guld\n"
            doc += "    " + registrator + ":Expenses:guld:register   1 guld\n"
            doc += "    guld:Liabilities   1 guld\n"
            doc += "    guld:Income:register:individual:" + registrator + "   -1 guld\n"
        } else if (type.value == 2) {
            var doc = "; m = number of members\n"
            doc += date.getFullYear() + "/" + date.getDate() + "/" + date.getDay() + " * group registration\n"
            doc += "    ; timestamp: " + parseInt(Date.now()/1000) + "\n"
            doc += "    " + registrator + ":Assets   -" + number + " guld\n"
            doc += "    " + registrator + ":Expenses:guld:register   " + number + " guld\n"
            doc += "    guld:Liabilities   " + number + " guld\n"
            doc += "    guld:Income:register:group:groupname   -" + number + " guld\n"
        } else {
            var doc = ""
            doc += date.getFullYear() + "/" + date.getDate() + "/" + date.getDay() + " * device registration\n"
            doc += "    ; timestamp: " + parseInt(Date.now()/1000) + "\n"
            doc += "    " + registrator + ":Assets   -0.1 guld\n"
            doc += "    " + registrator + ":Expenses:guld:register   0.1 guld\n"
            doc += "    guld:Liabilities   0.1 guld\n"
            doc += "    guld:Income:register:device:" + registrator + ":devicename   -0.1 guld\n"
        }


        return doc;
    }

    function copyHtml() {
        var html =
            "<div id='guld_registration_modal' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='registration_label' style='display: none;'" +
            "aria-hidden='true'>" +
            "  <div class='modal-dialog modal-md' role='document'>" +
            "    <div class='modal-content'>" +
            "      <div class='modal-header'>" +
            "        <h5 class='modal-title' id='registration_label'>Send guld</h5>" +
            "          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
            "            <span aria-hidden='true'>×</span>" +
            "          </button>" +
            "      </div>" +
            "      <div class='modal-body'>" +
            "        <section id='guld-registration-section-form'>" +
            "          <div class='container'> " +
            "            <div class='row'> " +
            "              <div class='col-md-12'> " +
            "                <form id='guld_registration_form' class='needs-validation' novalidate> " +
            "                <div class='form-group row'> " +
            "                  <label for='receiver' class='col-sm-5 col-form-label'>Registration Type</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <select id='guld_registration_type' class='form-control'> " +
            "                      <option value='1' selected>User</option> " +
            "                      <option value='2'>Group</option> " +
            "                      <option value='3'>Device</option> " +
            "                    </select> " +
            "                  </div> " +
            "                </div> " +
            "                <div class='form-group row'> " +
            "                  <label for='sender' class='col-sm-5 col-form-label'>Guld Username</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='text' class='form-control' id='guld_registration_registrator' placeholder='Guld Username' required> " +
            "                  </div> " +
            "                </div> " +
            "                <div id='guld_registration_name_group' class='form-group row' style='display:none'> " +
            "                  <label for='sender' class='col-sm-5 col-form-label'>Name</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='text' class='form-control' id='guld_registration_name' placeholder='Name'> " +
            "                  </div> " +
            "                </div> " +
            "                <div id='guld_registration_number_group' class='form-group row' style='display:none'> " +
            "                  <label for='amount' class='col-sm-5 col-form-label'>Amount</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='number' step='1' class='form-control' id='guld_registration_number' placeholder='1'> " +
            "                  </div> " +
            "                </div> " +
            "                <div class='modal-footer row text-right mb-0 pb-0 pr-0'> " +
            "                  <div class='col-sm-12'> " +
            "                    <button class='btn btn-primary' type='submit'>generate</button> " +
            "                  </div> " +
            "                </div> " +
            "                </form> " +
            "              </div> " +
            "            </div> " +
            "          </div> " +
            "        </section>" +
            "        <section id='guld-registration-section-done'>" +
            "          <div class='container'> " +
            "            <div class='row'> " +
            "              <div class='col-md-12 text-center'> " +
            "                Please check your email client, sign and send your transaction" +
            "              </div> " +
            "            </div> " +
            "            <div class='row'> " +
            "              <div class='col-md-12 text-center mt-3 mb-1'> " +
            "                <a class='btn btn-primary' id='guld_transaction_another'>Generate another</a>" +
            "              </div> " +
            "            </div> " +
            "          </div> " +
            "        </section>" +
            "      </div> " +
            "    </div> " +
            "  </div> " +
            "</div>";
        return html;
    }

    // Start
    var guld_registration = document.createElement("div");
    guld_registration.id = "guld_registration";
    guld_registration.innerHTML = copyHtml();
    document.body.appendChild(guld_registration);

    var form = document.getElementById('guld_registration_form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            var email = 'public@email.guld';
            var subject = "Autogenerated transaction";
            var emailBody = generateDoc();
            $("#guld-registration-section-form").hide();
            $("#guld-registration-section-done").show();
            var body = encodeURIComponent(emailBody);
            document.location = "mailto:" + email + "?subject=" + subject + "&body=" + body;
        }
        form.classList.add('was-validated');
    }, false);

    var another = document.getElementById('guld_transaction_another');
    another.addEventListener('click', function (event) {
        $("#guld-registration-section-form").show();
        $("#guld-registration-section-done").hide();
    }, false);

    var type = document.getElementById('guld_registration_type');
    type.addEventListener('change', function (event) {
        $("#guld_registration_name_group").hide();
        $("#guld_registration_name").prop("required", false);
        $("#guld_registration_number_group").hide();
        $("#guld_registration_number").prop("required", false);
        if (type.value > 1) {
            $("#guld_registration_name_group").show();
            $("#guld_registration_name").prop("required", true);
        }
        if (type.value == 2) {
            $("#guld_registration_number_group").show();
            $("#guld_registration_number").prop("required", true);
        }
    }, false);

    $("#guld-registration-section-form").show();
    $("#guld-registration-section-done").hide();

})();