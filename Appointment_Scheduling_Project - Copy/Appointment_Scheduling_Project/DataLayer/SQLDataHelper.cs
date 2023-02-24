using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Appointment_Scheduling_Project.BusinessLayer;
using Microsoft.Extensions.Configuration;
using Appointment_Scheduling_Project.Model;

namespace Appointment_Scheduling_Project.DataLayer
{
    public class SQLDataHelper : ISQLDataHelper
    {
        //connection string for sql connection;
        string connectionString = "Data Source = cmdlhrltx318; Initial Catalog = SchedulingProject; Integrated Security = True";
        // Get a single patient record
        public UnitPatient GetPatientData(int PatientID)
        {
            UnitPatient Patient_Obj = new UnitPatient();
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("spGetPatient", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                cmd.Parameters.AddWithValue("@PatID", PatientID);
                cmd.ExecuteNonQuery();
                SqlDataReader sdr = cmd.ExecuteReader();
                while (sdr.Read())
                {
                    Patient_Obj.PatientID = Convert.ToInt32(sdr["PatientID"]);
                    Patient_Obj.FirstName = sdr["FirstName"].ToString();
                    Patient_Obj.LastName = sdr["LastName"].ToString();
                    Patient_Obj.Country = sdr["CountryName"].ToString();
                    Patient_Obj.PhoneNumber = sdr["PhoneNumber"].ToString();
                }
                con.Close();
            }
            return Patient_Obj;
        }
        //get all patients record
        public List<UnitPatient> GetPatientsData()
        {
            List<UnitPatient> lstPatients = new List<UnitPatient>();
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("spGetPatients", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                cmd.ExecuteNonQuery(); SqlDataReader sdr = cmd.ExecuteReader();
                while (sdr.Read())
                {
                    UnitPatient Patient_Obj = new UnitPatient();

                    Patient_Obj.PatientID = Convert.ToInt32(sdr["PatientID"]);
                    Patient_Obj.FirstName = sdr["FirstName"].ToString();
                    Patient_Obj.LastName = sdr["LastName"].ToString();
                    Patient_Obj.Country = sdr["CountryName"].ToString();
                    Patient_Obj.PhoneNumber = sdr["PhoneNumber"].ToString();
                    lstPatients.Add(Patient_Obj);
                }
                con.Close();
            }
            return lstPatients;
        }
        // add a patient record
        public string AddPatientData(UnitPatient unitPatient )
        {
            int check;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("spCreatePatient", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                cmd.Parameters.AddWithValue("@FirstName", unitPatient.FirstName);
                cmd.Parameters.AddWithValue("@LastName", unitPatient.LastName);
                cmd.Parameters.AddWithValue("@CountryName", unitPatient.Country);
                cmd.Parameters.AddWithValue("@PhoneNumber", unitPatient.PhoneNumber);
                check = cmd.ExecuteNonQuery(); con.Close();
            }
            if (check == -1)
                return "Invalid";
            return "Patient Added";
        }
        //add phone number record
        public string AddPhoneData(UnitPatient unitPatient)
        {
            int check;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("spAddPhone", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                cmd.Parameters.AddWithValue("@PatID", unitPatient.PatientID);
                cmd.Parameters.AddWithValue("@PhoneNumber", unitPatient.PhoneNumber);
                check = cmd.ExecuteNonQuery(); 
                con.Close();
            }
            if (check == -1)
                return "Invalid";
            return "Phone Number Added";
        }
        //update a patient record
        public string UpdatePatientData(UnitPatient unitPatient)
        {
            int check;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("spUpdatePatient", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                cmd.Parameters.AddWithValue("@patID", unitPatient.PatientID);
                cmd.Parameters.AddWithValue("@FirstName", unitPatient.FirstName);
                cmd.Parameters.AddWithValue("@LastName", unitPatient.LastName);
                cmd.Parameters.AddWithValue("@CountryName", unitPatient.Country);
                check = cmd.ExecuteNonQuery(); con.Close();
            }
            if (check == -1)
                return "Invalid";
            return "Patient Updated";
        }
        //remove a patient record
        public string RemovePatientData(UnitPatient unitPatient)
        {
            int check;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("spDeletePatient", con);
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                cmd.Parameters.AddWithValue("@patID", unitPatient.PatientID);
                check = cmd.ExecuteNonQuery(); con.Close();
            }
            if (check == -1 || check==0)
                return "Invalid";
            return "Patient Removed";
        }
    }
}
