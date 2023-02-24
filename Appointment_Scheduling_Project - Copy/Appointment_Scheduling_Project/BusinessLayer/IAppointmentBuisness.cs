using System;
using Appointment_Scheduling_Project.Model;
using System.Collections.Generic;

namespace Appointment_Scheduling_Project.BusinessLayer
{
    public interface IAppointmentBuisness
    {
        public UnitPatient GetPatientData(int PatientID);
        public List<UnitPatient> GetPatientsData();
        public string AddPatientData(UnitPatient unitPatient);
        public string AddPhoneData(UnitPatient unitPatient);
        public string UpdatePatientData(UnitPatient unitPatient);
        public string RemovePatientData(UnitPatient unitPatient);

    }
}
