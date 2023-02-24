use [SchedulingProject] 
insert into Country(CountryName)
values
('China'),
('Russia'),
('Japan'),
('Korea'),
('Taiwan');
select * from Country

insert into Patient(FirstName,LastName,CountryID)
values
('Ivan','Tsar',2),
('Shen','Xing',1),
('Ming','Tai',5);
select * from Patient

insert into Phone(PatientID,PhoneNumber)
values
(1,'007123456'),
(2,'86123456'),
(1,'007123457'),
(3,'88612345');
select * from Phone

(select CountryName from Country
for xml path(''),Type).value

insert into PhoneTypes(PhoneType)
values
('OFFICE'),
('MOBILE'),
('HOME')

update Patient set CountryID=null  where PatientID =12

select * from Patient
select * from Phone
select * from Country
select * from PhoneTypes


insert into Patient(FirstName,LastName,CountryID)
values
('Ivan','Tsar',2),
('Shen','Xing',1),
('Ming','Tai',5);


insert into Phone(PatientID,PhoneNumber,PhoneTypeID)
values
(1,'007123456',1),
(2,'86123456',1),
(1,'007123457',2),
(3,'88612345',3);



Declare @m nvarchar(100)='      '
select * from Patient where FirstName like ltrim(rtrim(@m))+'%'
