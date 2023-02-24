using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Appointment_Scheduling_Project.BusinessLayer;
using Appointment_Scheduling_Project.Model;
using Microsoft.AspNetCore.Cors;

namespace Appointment_Scheduling_Project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("MyPolicy")]
    public class AppointmentController : Controller
    {
        //BAL to Controller Dependency Injection 
        IAppointmentBuisness _appointmentBuisness;

        public AppointmentController(IAppointmentBuisness appointmentBuisness)
        {
            _appointmentBuisness = appointmentBuisness;
        }
        //Get All Patients
        [HttpGet]
        [Route("Patients")]
        public ActionResult<List<UnitPatient>> GetPatients()
        {
            try
            {
                return _appointmentBuisness.GetPatientsData();

            }
            catch
            {

                return BadRequest("Data is Invalid");
            }
        }
        // Get a single patient
        [HttpPost]
        [Route("Patient")]
        public ActionResult<UnitPatient> GetPatient([FromBody] UnitPatient unitPatient)
        {
            try
            {
                return _appointmentBuisness.GetPatientData(unitPatient.PatientID);

            }
            catch
            {

                return BadRequest("Data is Invalid");
            }
        }
        //Add a new patient
        [HttpPost]
        [Route("AddPatient")]
        public ActionResult<string> AddPatient([FromBody] UnitPatient unitPatient)
        {
            try
            {
                return _appointmentBuisness.AddPatientData(unitPatient);

            }
            catch
            {

                return BadRequest("Data is Invalid");
            }
        }
        // Add a phone number
        [HttpPost]
        [Route("AddPhone")]
        public ActionResult<string> AddPhone(UnitPatient unitPatient)
        {
            try
            {
                return _appointmentBuisness.AddPhoneData(unitPatient);

            }
            catch
            {

                return BadRequest("Data is Invalid");
            }
        }
        // Update a patient record
        [HttpPut]
        [Route("UpdatePatient")]
        public ActionResult<string> UpdatePatient([FromBody] UnitPatient unitPatient)
        {
            try
            {
                return _appointmentBuisness.UpdatePatientData(unitPatient);

            }
            catch
            {

                return BadRequest("Data is Invalid");
            }
        }
        //Delete a patient Record
        [HttpDelete]
        [Route("DeletePatient")]
        public ActionResult<string> DeletePatient([FromBody] UnitPatient unitPatient)
        {
            try
            {
                return _appointmentBuisness.RemovePatientData(unitPatient);

            }
            catch
            {

                return BadRequest("Data is Invalid");
            }
        }
    }
}
