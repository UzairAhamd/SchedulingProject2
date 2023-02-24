using System;
using System.Collections.Generic;
using Appointment_Scheduling_Project.Model;
namespace Appointment_Scheduling_Project.BusinessLayer
{
    public interface ISQLDataHelper
    {
        public UnitPatient GetPatientData(int PatientID);
        public List<UnitPatient> GetPatientsData();
        public string AddPatientData(UnitPatient unitPatient);
        public string AddPhoneData(UnitPatient unitPatient);
        public string UpdatePatientData(UnitPatient unitPatient);
        public string RemovePatientData(UnitPatient unitPatient);


    }
}
