use [SchedulingProject] 
-- Get a sinlge patient record
--drop proc spGetPatient
Go
alter PROCEDURE spGetPatient
	@PatID int
AS
BEGIN
	 select distinct pat.PatientID,pat.FirstName,pat.LastName,co.CountryName,(select  STUFF((SELECT ',' + CAST(PhoneNumber AS varchar(max)) FROM Phone WHERE PatientID=pat.PatientID FOR XML PATH('')),1,1,'')) AS PhoneNumber from Patient pat
	 inner join Phone ph on ph.PatientID=pat.PatientID
	 inner join Country co on co.CountryID =pat.CountryID
	 where pat.PatientID=@PatID
	
END

spGetPatient 1

-- Get all patients record
--drop proc spGetPatients

Go
alter PROCEDURE spGetPatients
AS
BEGIN
	select distinct pat.PatientID,pat.FirstName,pat.LastName,co.CountryName,(select STUFF((SELECT ',' + CAST(PhoneNumber AS varchar(max)) FROM Phone WHERE PatientID=pat.PatientID FOR XML PATH('')),1,1,'')) AS PhoneNumber from Patient pat
	inner join Phone ph on ph.PatientID=pat.PatientID
	inner join Country co on co.CountryID =pat.CountryID
	
END
Go
spGetPatients 

go
-- create a new patient
--drop proc spCreatePatient
create proc spCreatePatient
	@FirstName varchar(50),
	@LastName varchar(50),
	@CountryName varchar(50),
	@PhoneNumber char(10)
as
begin
	declare @country varchar(50)
	declare @patID int
	select @country=CountryID from Country where CountryName=@CountryName
	if (@country is not null)
	begin 
	insert into Patient 
		(FirstName,LastName,CountryID)
	values
		(@FirstName,@LastName,@country)
		select @patID=SCOPE_IDENTITY()
	insert into Phone
		(PatientID,PhoneNumber)
	values
		(@patID,@PhoneNumber)
	end
end
go
spCreatePatient 'Fredrick','Kysov','Russia','0071234568'
select * from Patient
select * from Phone
select * from Country

go
--create a new phone number
--drop proc spAddPhone
create proc spAddPhone
	@PatID int,
	@PhoneNumber char(10)
as
begin
	if exists(SELECT TOP 1 1 FROM Phone WHERE PatientID = @PatID)
	begin
	insert into Phone
		(PatientID,PhoneNumber)
	values
		(@PatID,@PhoneNumber)
	end
end
go
spAddPhone 6,'0071234569'
select * from Patient
select * from Phone

--update a patient record
--drop proc spUpdatePatient
create proc spUpdatePatient
	@patID int,
	@FirstName varchar(50),
	@LastName varchar(50),
	@CountryName varchar(50)
as
begin
	declare @country varchar(50)
	select @country=CountryID from Country where CountryName=@CountryName
	if (@country is not null)
	begin 
	update Patient set
	FirstName=@FirstName,
	LastName =@LastName,
	CountryID=@country
	where Patient.PatientID=@patID
	end
end
go
spUpdatePatient 4,'Nichola','Kysov','China'
select * from Country
select * from Patient
select * from Phone
GO
--delete a patient record
--drop proc spDeletePatient
ALTER proc spDeletePatient
	@patID int
as
begin
	delete from Patient where Patient.PatientID=@patID
end
go
spDeletePatient 44
select * from Country
select * from Patient
select * from Phone
------------
select *, row_number() over (partition by Patient.PatientID, Patient.FirstName,Patient.LastName,Country.CountryName,Phone.PhoneNumber order by Patient.PatientID) as rn
from Patient inner join Country on Patient.CountryID =Patient.CountryID inner Join Phone on Patient.PatientID=Phone.PatientID