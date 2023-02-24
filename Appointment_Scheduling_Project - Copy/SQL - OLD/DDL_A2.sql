create database SchedulingProject
use [SchedulingProject] 

--Country table
Create table Country(
ID int not null identity(1,1) primary key,
CountryName varchar(50) not null unique,
);

--Patient table
create table Patient(
ID int not null identity(1,1) primary key,
FirstName varchar(50) not null,
LastName varchar(50) not null,
CountryID int not null foreign key references Country(ID)
);

--Phone table
create table Phone(
ID int not null identity(1,1) primary key,
PatientID int not null foreign key references Patient(ID)
);
----
exec sp_rename 'Country.ID', 'CountryID','column'
exec sp_rename 'Patient.PatinetID', 'PatientID','column'
exec sp_rename 'Phone.ID', 'PhoneID','column'

alter table Phone add PhoneNumber char(10) not null;

ALTER TABLE Phone
drop CONSTRAINT FK__Phone__PatientID__3D5E1FD2;

ALTER TABLE Phone
ADD CONSTRAINT FK_Phone_PatientID
    FOREIGN KEY (PatientID)
    REFERENCES Patient
        (PatientID)
    ON DELETE CASCADE ON UPDATE NO ACTION;

select * from Country
select * from Patient

select * from Phone

select * from Country where CountryName='korea'
select * from Phone where PhoneNumber='1919191919'
create unique index ix_PhoneNumber on Phone(PhoneNumber)
drop index ix_PhoneNumber
on Phone;


alter table Country add IsActive bit default 1 not null;
alter table Country drop column IsActive;
alter table Country drop DF__Country__Inactiv__49C3F6B7;

exec sp_rename 'Country.Inactive', 'IsActive', 'Column'


create table PhoneTypes(
PhoneTypeID int not null primary key identity(1,1),
PhoneType varchar(10)
);
select * from PhoneTypes

alter table PhoneTypes add IsActive bit default 1 not null;

alter table Phone add PhoneTypeID int  foreign key references PhoneTypes(PhoneTypeID) ;

truncate table Phone
select * from Phone


update Patient set CountryID=null where 1=1
alter table Phone alter column PhoneTypeID int not null

truncate table Patient
select * from Patient
select * from Phone

alter table Patient alter CountryID int  foreign key references Country(CountryID) ;
ALTER TABLE Patient
ADD FOREIGN KEY (CountryID) REFERENCES Country(CountryID);


ALTER TABLE Phone
ADD FOREIGN KEY (PatientID) REFERENCES Patient(PatientID);

sp_help PhoneTypes

ALTER TABLE PhoneTypes
ADD UNIQUE (PhoneType);


ALTER TABLE Phone
ALTER COLUMN PhoneNumber varchar(20);

select * from Patient
select * from Phone
select * from Country
select * from PhoneTypes


