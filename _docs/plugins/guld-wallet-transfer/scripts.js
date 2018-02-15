(function () {
    function generateDoc() {
        var date = new Date(Date.now());
        var sender = document.getElementById('guld_transfer_sender').value;
        var receiver = document.getElementById('guld_transfer_receiver').value;
        var amount = document.getElementById('guld_transfer_amount').value;

        var doc = "; requires signature of the debtor\n"
        doc += date.getFullYear() + "/" + date.getDate() + "/" + date.getDay() + " * transfer\n"
        doc += "    ; timestamp: " + parseInt(Date.now()/1000) + "\n"
        doc += "    " + sender + ":Assets    -" + amount + " guld\n"
        doc += "    " + sender + ":Expenses    " + amount + " guld\n"
        doc += "    " + receiver + ":Assets    " + amount + " guld\n"
        doc += "    " + receiver + ":Income    -" + amount + " guld\n"
        console.log(doc);
        return doc;
    }

    function copyHtml() {
        var html =
            "<div id='guld_transfer_modal' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='transfer_label' style='display: none;'" +
            "aria-hidden='true'>" +
            "  <div class='modal-dialog modal-md' role='document'>" +
            "    <div class='modal-content'>" +
            "      <div class='modal-header'>" +
            "        <h5 class='modal-title' id='transfer_label'>Send guld</h5>" +
            "          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
            "            <span aria-hidden='true'>×</span>" +
            "          </button>" +
            "      </div>" +
            "      <div class='modal-body'>" +
            "        <section id='guld-transfer-section-form'>" +
            "          <div class='container'> " +
            "            <div class='row'> " +
            "              <div class='col-md-12'> " +
            "                <form id='guld_transfer_form' class='needs-validation' novalidate> " +
            "                <div class='form-group row'> " +
            "                  <label for='sender' class='col-sm-5 col-form-label'>Sender Guld Username</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='text' class='form-control' id='guld_transfer_sender' placeholder='Sender' required> " +
            "                  </div> " +
            "                </div> " +
            "                <div class='form-group row'> " +
            "                  <label for='receiver' class='col-sm-5 col-form-label'>Receiver Guld Username</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='text' class='form-control' id='guld_transfer_receiver' placeholder='Receiver' required> " +
            "                  </div> " +
            "                </div> " +
            "                <div class='form-group row'> " +
            "                  <label for='amount' class='col-sm-5 col-form-label'>Amount</label> " +
            "                  <div class='col-sm-7'> " +
            "                    <input type='number' step='.00000001' class='form-control' id='guld_transfer_amount' placeholder='3.5' required> " +
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
            "        <section id='guld-transfer-section-done'>" +
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
    var guld_transfer = document.createElement("div");
    guld_transfer.id = "guld_transfer";
    guld_transfer.innerHTML = copyHtml();
    document.body.appendChild(guld_transfer);

    var form = document.getElementById('guld_transfer_form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            var email = 'public@gmail.email';
            var subject = "guld transfer";
            var emailBody = generateDoc();
            $("#section-form").hide();
            $("#section-done").show();
            var body = encodeURIComponent(emailBody);
            document.location = "mailto:" + email + "?subject=" + subject + "&body=" + body;
        }
        form.classList.add('was-validated');
    }, false);

    var another = document.getElementById('guld_transaction_another');
    another.addEventListener('click', function (event) {
        $("#guld-transfer-section-form").show();
        $("#guld-transfer-section-done").hide();
    }, false);
    $("#guld-transfer-section-form").show();
    $("#guld-transfer-section-done").hide();

})();
