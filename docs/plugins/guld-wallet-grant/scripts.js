(function () {
    function generateDoc() {
        var date = new Date(Date.now());
        var receiver = document.getElementById('guld_grant_receiver').value;
        var amount = document.getElementById('guld_grant_amount').value;

        var doc = "; requires majority of guld equity to approve\n"
        doc += date.getFullYear() + "/" + date.getDate() + "/" + date.getDay() + " * Grant for work done\n"
        doc += "    ; timestamp: " + parseInt(Date.now()/1000) + "\n"
        doc += "    guld:Liabilities   -" + amount + " guld\n"
        doc += "    guld:Equity:" + receiver + "   " + amount + " guld\n"
        doc += "    " + receiver + ":Assets   " + amount + " guld\n"
        doc += "    " + receiver + ":Income   -" + amount + " guld\n"

        return doc;
    }

    function copyHtml() {
        var html =
            "<div id='guld_grant_modal' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='grant_label' style='display: none;'" +
            "aria-hidden='true'>" +
            "  <div class='modal-dialog modal-md' role='document'>" +
            "    <div class='modal-content'>" +
            "      <div class='modal-header'>" +
            "        <h5 class='modal-title' id='grant_label'>Grant guld</h5>" +
            "          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
            "            <span aria-hidden='true'>×</span>" +
            "          </button>" +
            "      </div>" +
            "      <div class='modal-body'>" +
            "        <section id='guld-grant-section-form'>" +
            "          <div class='container'> " +
            "            <div class='row'> " +
            "              <div class='col-md-12'> " +
            "                <form id='guld_grant_form' class='needs-validation' novalidate> " +
            "                <div class='form-group row'> " +
            "                  <label for='receiver' class='col-sm-5 col-form-label'>Receiver Guld Username</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='text' class='form-control' id='guld_grant_receiver' placeholder='Receiver' required> " +
            "                  </div> " +
            "                </div> " +
            "                <div class='form-group row'> " +
            "                  <label for='amount' class='col-sm-5 col-form-label'>Amount</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='number' step='.00000001' class='form-control' id='guld_grant_amount' placeholder='3.5' required> " +
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
            "        <section id='guld-grant-section-done'>" +
            "          <div class='container'> " +
            "            <div class='row'> " +
            "              <div class='col-md-12 text-center'> " +
            "                Please check your email client, sign and send your grant" +
            "              </div> " +
            "            </div> " +
            "            <div class='row'> " +
            "              <div class='col-md-12 text-center mt-3 mb-1'> " +
            "                <a class='btn btn-primary' id='guld_grant_another'>Generate another</a>" +
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
    var guld_grant = document.createElement("div");
    guld_grant.id = "guld_grant";
    guld_grant.innerHTML = copyHtml();
    document.body.appendChild(guld_grant);

    var form = document.getElementById('guld_grant_form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            var email = 'public@email.guld';
            var subject = "guld grant";
            var emailBody = generateDoc();
            $("#guld-grant-section-form").hide();
            $("#guld-grant-section-done").show();
            var body = encodeURIComponent(emailBody);
            document.location = "mailto:" + email + "?subject=" + subject + "&body=" + body;
        }
        form.classList.add('was-validated');
    }, false);

    var another = document.getElementById('guld_grant_another');
    another.addEventListener('click', function (event) {
        $("#guld-grant-section-form").show();
        $("#guld-grant-section-done").hide();
    }, false);
    $("#guld-grant-section-form").show();
    $("#guld-grant-section-done").hide();

})();