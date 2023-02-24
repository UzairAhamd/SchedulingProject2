using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Appointment_Scheduling_Project.Model;

namespace Appointment_Scheduling_Project.BusinessLayer
{
    public class AppointmentBuisness : IAppointmentBuisness
    {
        //DAL to BAL Dependency Injection 
        ISQLDataHelper _sqlDataHelper;
        public AppointmentBuisness(ISQLDataHelper sqlDataHelper)
        {
            this._sqlDataHelper = sqlDataHelper;
        }

        //Get a patient Record
        public UnitPatient GetPatientData(int PatientID)
        {
            return this._sqlDataHelper.GetPatientData(PatientID);
        }
        //Get all patient record
        public List<UnitPatient> GetPatientsData()
        {
            return this._sqlDataHelper.GetPatientsData();
        }
        // Add a patient record
        public string AddPatientData(UnitPatient unitPatient)
        {
            if(unitPatient.PhoneNumber.IsNumeric() && unitPatient.LastName!="" && unitPatient.FirstName!="")
            {
            return this._sqlDataHelper.AddPatientData(unitPatient);
            }
            return "invalid";
        }
        // Add phone number
        public string AddPhoneData(UnitPatient unitPatient)
        {
            if (unitPatient.PhoneNumber.IsNumeric())
            {
                return this._sqlDataHelper.AddPhoneData(unitPatient);
            }
            return "invalid";
        }
        // Update a patient record
        public string UpdatePatientData(UnitPatient unitPatient)
        {
            if (unitPatient.LastName != "" && unitPatient.FirstName != "")
            {
                return this._sqlDataHelper.UpdatePatientData(unitPatient);
            }
            return "invalid";
        }
        // Delete a patient Record
        public string RemovePatientData(UnitPatient unitPatient)
        {
            return this._sqlDataHelper.RemovePatientData(unitPatient);
        }
    }
    //check for numeric input validity
    public static class StringExtensions
    {
        public static bool IsNumeric(this string input)
        {
            return Regex.IsMatch(input, @"^\d+$");
        }
    }
}
