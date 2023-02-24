$(document).ready(function () {
    // Get a Patient Record
    $("#PatientSubmit1").click(function (e) {
        $("#PatientSubmit1").hide();
        $("#getPatient").show();
        $("#PatientSubmit2").show();
        $("#patientDetailsID").hide();

        $("#PatientSubmit4").hide();

        $("#newPhoneNumber1").hide();
        
        $("#updatePatient1").hide();
        $("#updatePatient").hide();
        $("#fetchPatient").hide();
        $("#updatePatienta1A").hide();
        $("#updatePatient2").hide();

        $("#deletePatient1").hide();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").hide();
        $("#newPatient1").hide();
        });
// Get a Patient Record
    $("#PatientSubmit2").click(function (e) {
      $("#PatientSubmit1").show();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();
        $("#PatientSubmit4").show();
        $("#newPatient1").show();
        $("#newPhoneNumber1").show();

        $("#updatePatient1").show();
        $("#updatePatient").hide();
        $("#updatePatient2").hide();

        $("#deletePatient1").show();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").show();
        var patient = new Object();
        var PatientID = $('#PatientID').val();
        console.log(PatientID);
        if (isNaN(PatientID) || PatientID=="")
        {
          $("#patientDetailsID").hide();
          alert("Invalid input");
          return false;
        }
        else
        patient.patientID = parseInt(PatientID);
        console.log(patient);
        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/Patient',
          type: 'post', 
          contentType: 'application/json',
          data: JSON.stringify(patient),
          async: true,
          success: function (response) {
            console.log(response);
            a = [];
            a.push(response);
                populatePatientTable(a);
            console.log(a);
          },
          error: function (response) {
            $("#patientDetailsID").hide();
            console.log(response.responseText),
            alert(response.responseText);
          }
        });
      });
      // Get All Patients Record
      $("#PatientSubmit4").click(function (e) {
        $("#PatientSubmit1").show();
        $("#newPatient1").show();
        $("#newPhoneNumber1").show();


        $("#patientDetailsID").show();

        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/Patients',
          type: 'get', 
          contentType: 'application/json',
          // data: JSON.stringify(allPatients),
          async: true,
          success: function (response) {
            console.log(response);
                populatePatientTable(response);
          },
          error: function (response) {
            console.log(response.responseText),
              alert(response.responseText);
          }
        });
      });
      // Add a Patient Record
      $("#newPatient1").click(function (e) {
        $("#PatientSubmit1").hide();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#addPatient").show();
        $("#PatientSubmit4").hide();

        $("#newPatient1").hide();
        $("#newPatient2").show();

        $("#newPhoneNumber1").hide();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();
        
        $("#updatePatient1").hide();

        $("#deletePatient1").hide();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").hide();

    });
    // Add a Patient Record
      $("#newPatient2").click(function (e) {
        $("#PatientSubmit1").show();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#addPatient").hide();
        $("#PatientSubmit4").show();

        $("#newPatient1").show();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").show();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();

        $("#updatePatient1").show();
        $("#deletePatient1").show();

        $("#patientDetailsID").hide();
        var patient = new Object();
        patient.firstName = $('#addPatientFirstName').val();
        patient.lastName = $('#addPatientLastName').val();
        patient.country = $('#addPatientCountryName').val();
        patient.phoneNumber = $('#addPatientPhoneNumber').val();
        if (isNaN(patient.phoneNumber) || patient.firstName=="" || patient.lastName=="" || patient.country=="" || patient.phoneNumber=="")
        {
          alert("Invalid input");
          return false;
        }
        else
        console.log(patient);
        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/AddPatient',
          type: 'post', 
          contentType: 'application/json',
          data: JSON.stringify(patient),
          async: true,
          success: function (response) {
            console.log(response);
            alert(response);
          },
          error: function (response) {
            console.log(response.responseText),
              alert(response.responseText);
          }
        });
      });
      // Add a Phone Number Record
      $("#newPhoneNumber1").click(function (e) {
        $("#PatientSubmit1").hide();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#PatientSubmit4").hide();

        $("#newPatient1").hide();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").hide();
        $("#addPhone").show();
        $("#newPhoneNumber2").show();

        $("#updatePatient1").hide();
        $("#deletePatient1").hide();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").hide();

    });
    // Add a Phone Number Record
      $("#newPhoneNumber2").click(function (e) {
        $("#PatientSubmit1").show();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#PatientSubmit4").show();

        $("#newPatient1").show();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").show();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();

        $("#updatePatient1").show();
        $("#deletePatient1").show();
        
        $("#patientDetailsID").hide();

        var PatientID = $('#addPhonePatientID').val();
        var PhoneNumber = $('#addPhonePhoneNumber').val();
        console.log(PatientID);
        if (isNaN(PatientID) || PatientID=="" ||  isNaN(PhoneNumber) || PhoneNumber=="" )
        {
          $("#addPatient").hide();
          alert("Invalid input");
          return false;
        }
        else
        var phone = new Object();
        phone.patientID = parseInt($('#addPhonePatientID').val());
        phone.phoneNumber = $('#addPhonePhoneNumber').val();
        console.log(phone);
        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/AddPhone',
          type: 'post', 
          contentType: 'application/json',
          data: JSON.stringify(phone),
          async: true,
          success: function (response) {
            console.log(response);
            alert(response)
          },
          error: function (response) {
            console.log(response.responseText),
              alert(response.responseText);
          }
        });
      });
      // Update a Patient's Record
      $("#updatePatient1").click(function (e) {
        $("#PatientSubmit1").hide();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#PatientSubmit4").hide();

        $("#newPatient1").hide();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").hide();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();

        $("#updatePatient1").hide();
        $("#fetchPatient").show();
        $("#fetchPatientInput").show();
        $("#updatePatient1A").show();

        $("#deletePatient1").hide();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").hide();
    });
    //fetch patient to update
    $("#updatePatient1A").click(function (e) {
      $("#PatientSubmit1").show();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();
        $("#PatientSubmit4").show();
        $("#newPatient1").show();
        $("#newPhoneNumber1").show();

        $("#fetchPatient").hide();
        $("#fetchPatientInput").hide();
        $("#updatePatient1A").hide();
        $("#updatePatient").show();
        $("#updatePatient2").show();

        $("#deletePatient1").show();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").show();
        var patient = new Object();
        var PatientID = $('#fetchPatientID').val();
        console.log(PatientID);
        if (isNaN(PatientID) || PatientID=="")
        {
          $("#PatientSubmit1").show();
          $("#PatientSubmit4").show();
          $("#newPatient1").show();
          $("#newPhoneNumber1").show();
          $("#updatePatient1").show();
          $("#updatePatient2").hide();
          $("#deletePatient1").show();

          $("#patientDetailsID").hide();
          $("#getPatient").hide();
          $("#PatientSubmit2").hide();
  
          $("#fetchPatient").hide();
          $("#fetchPatientInput").hide();
          $("#updatePatient").hide();
          $("#updatePatient1A").hide();
  
          $("#deletePatient").hide();
          $("#deletePatient2").hide();
        $("#patientDetailsID").hide();

          alert("Invalid input");
          return false;
        }
        else
        patient.patientID = parseInt(PatientID);
        console.log(patient);
        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/Patient',
          type: 'post', 
          contentType: 'application/json',
          data: JSON.stringify(patient),
          async: true,
          success: function (response) {
            console.log(response);
            $("#updatePatientID").val(response.patientID)
            $("#updatePatientFirstName").val(response.firstName)
            $("#updatePatientLastName").val(response.lastName)
            $("#updatePatientCountryName").val(response.country)

            $("#PatientSubmit1").hide();
            $("#PatientSubmit4").hide();
            $("#newPatient1").hide();
            $("#newPhoneNumber1").hide();
            $("#updatePatient1").hide();
            $("#updatePatient2").show();
            $("#deletePatient1").hide();
        $("#patientDetailsID").hide();

          },
          error: function (response) {
            console.log(response.responseText),
            alert(response.responseText);
          }
        });
      });
    // Update a Patient's Record
      $("#updatePatient2").click(function (e) {
        $("#PatientSubmit1").show();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#PatientSubmit4").show();

        $("#newPatient1").show();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").show();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();

        $("#updatePatient1").show();
        $("#updatePatient").hide();
        $("#updatePatient2").hide();
        $("#deletePatient1").show();

        $("#patientDetailsID").hide();

        var updatePatient = new Object();
        var PatientID = $('#updatePatientID').val();
        updatePatient.FirstName = $('#updatePatientFirstName').val();
        updatePatient.LastName = $('#updatePatientLastName').val();
        updatePatient.Country = $('#updatePatientCountryName').val();
        if (isNaN(PatientID)|| updatePatient.FirstName=="" || updatePatient.LastName=="" || updatePatient.Country=="")
        {
          alert("Invalid input");
          return false;
        }
        else
        updatePatient.PatientID = parseInt($('#updatePatientID').val());
        console.log(updatePatient);
        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/UpdatePatient',
          type: 'put', 
          contentType: 'application/json',
          data: JSON.stringify(updatePatient),
          async: true,
          success: function (response) {
            console.log(response);
            alert(response);
          },
          error: function (response) {
            console.log(response.responseText),
              alert(response.responseText);
          }
        });
      });
      // Delete a Patient's Record
      $("#deletePatient1").click(function (e) {
        $("#PatientSubmit1").hide();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#PatientSubmit4").hide();

        $("#newPatient1").hide();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").hide();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();

        $("#updatePatient1").hide();
        $("#updatePatient").hide();
        $("#updatePatient2").hide();

        $("#deletePatient1").hide();
        $("#deletePatient").show();
        $("#deletePatient2").show();

        $("#patientDetailsID").hide();


    });
      // Delete a Patient's Record
      $("#deletePatient2").click(function (e) {
        $("#PatientSubmit1").show();
        $("#getPatient").hide();
        $("#PatientSubmit2").hide();

        $("#PatientSubmit4").show();

        $("#newPatient1").show();
        $("#newPatient2").hide();

        $("#newPhoneNumber1").show();
        $("#addPhone").hide();
        $("#newPhoneNumber2").hide();

        $("#updatePatient1").show();
        $("#updatePatient").hide();
        $("#updatePatient2").hide();
        
        $("#deletePatient1").show();
        $("#deletePatient").hide();
        $("#deletePatient2").hide();

        $("#patientDetailsID").hide();

        PatientID = $('#deletePatientID').val();
        if (isNaN(PatientID) || PatientID=="")
        {
          alert("Invalid input");
          return false;
        }
        else
        var deletePatient = new Object();
        deletePatient.PatientID = parseInt($('#deletePatientID').val());
        console.log(deletePatient);
        e.preventDefault();
        $.ajax({
          url: 'https://localhost:5001/Appointment/DeletePatient',
          type: 'delete', 
          contentType: 'application/json',
          data: JSON.stringify(deletePatient),
          async: true,
          success: function (response) {
            console.log(response);
            alert(response);
          },
          error: function (response) {
            console.log(response.responseText),
              alert(response.responseText);
          }
        });
      });
});
      // Populate a Patient's Record in datatable 
function populatePatientTable(data) {
    $("#patientDetailTable").dataTable({
      data: data,
      "paging": true,
      "lengthChange": false,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "bDestroy": true,
      columns: [
        { "data": "patientID" },
        { "data": "firstName" },
        { "data": "lastName" },
        { "data": "phoneNumber" },
        { "data": "country" },
      ]
    })
  }
