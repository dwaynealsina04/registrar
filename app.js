 var db=firebase.firestore();
  var date;
        var room;
        var batch;
        var time;
var temp = temp;
var   shsindex;
var   appindex;
var tempappid;
var address,dist,email,name,gender,phone ,snumber,first,last,mi;
 const cafeList = document.querySelector('#cafe-list');
 const cafeList2 = document.querySelector('#cafe-list2');
 const cafeList3 = document.querySelector('#cafe-list3');
const cafeList4 = document.querySelector('#year1st');
const cafeList5 = document.querySelector('#shsyear');
const cafeList6 = document.querySelector('#clrshsyear');
const cafeList7 = document.querySelector('#clryear1st');
 const sectionsched = document.querySelector('#sectionsched');
const tablecol = document.querySelector('#tablecol');
const tableshsyear = document.querySelector('#tableshsyear');
const table1st = document.querySelector('#table1styear');
 const tableapp = document.querySelector('#tableapp');
 const tableshs = document.querySelector('#tableshs');
const tableclrapp = document.querySelector('#tableclr1styear');
 const tableclrshs = document.querySelector('#tableclrshsyear');
 const tablesec = document.querySelector('#tablesec');
// create element & render cafe
function renderCafe(doc){
    //for applicants
    let tr= document.createElement('tr');
    let appid = document.createElement('td');
    let name = document.createElement('td');
    let education = document.createElement('td');
    let address = document.createElement('td');
    let email = document.createElement('td');
    let phone = document.createElement('td');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('class' , "tr1");
    tr.setAttribute('data-toggle', "modal" );
    tr.setAttribute('data-target', "#myModal");
    appid.textContent = doc.data().StudentNumber;
    appid.setAttribute = ('id', doc.id + doc.data().StudentNumber);
    name.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+ doc.data().MiddleInitial;
    address.textContent =doc.data().Address;
    email.textContent =doc.data().Email;
    phone.textContent =doc.data().Phone;
    education.textContent =doc.data().Education;
    tr.appendChild(appid);
    tr.appendChild(education);
    tr.appendChild(name);
    tr.appendChild(address);
    tr.appendChild(email);
    tr.appendChild(phone);
    tableapp.appendChild(tr);
    cafeList.appendChild(tableapp);
        tr.addEventListener('click', (e) => {
             let x1 =   document.getElementById('btnmodal1');
             let x2 =   document.getElementById('btnmodal2');
             x1.setAttribute('onclick', "appyes()");
             x2.setAttribute('onclick', "appno()");
             tempappid = doc.id;
             appindex = tr.rowIndex;
             document.getElementById('btnmodal1').textContent ="YES";
             document.getElementById('btnmodal2').textContent = "NO";     
             document.getElementById('mbody').textContent =  "Is this applicant qualified?";
             last = doc.data().LastName;
             first = doc.data().FirstName;
             mi = doc.data().MiddleInitial;
             document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
    });
}
db.collection('studentForms').orderBy('Qualified').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        
        if(change.type == 'added'){
             if(change.doc.data().Qualified === "PENDING")   
            {
            renderCafe(change.doc);
            }
        }  
    });
});
     //for enrollees SHS
function renderCafe2(doc)
{
        let tr= document.createElement('tr');
        let appid1 = document.createElement('td');
        let batch = document.createElement('td');
        let name1 = document.createElement('td');
        let education1 = document.createElement('td');
        tr.setAttribute('data-id', doc.id);
        tr.setAttribute('class' , "tr1");
        tr.setAttribute('data-toggle', "modal" );
        tr.setAttribute('data-target', "#myModal");
        education1.textContent =doc.data().Education;
        var i = doc.data().Batch;
        var j = i % 10,
        k = i % 100;
        if (j == 1 && k != 11) {
                i =  i + "st";
            }
  else  if (j == 2 && k != 12) {
          i =  i + "nd";
    }
    else if (j == 3 && k != 13) {
          i =  i + "rd";
    }
    else
     {
         i =  i + "th";
     }
        batch.textContent =i;
        appid1.textContent = doc.data().StudentNumber;
        name1.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+ doc.data().MiddleInitial;
        tr.appendChild(appid1);
        tr.appendChild(batch);
        tr.appendChild(education1);
        tr.appendChild(name1);
        tableshs.appendChild(tr);
        cafeList2.appendChild(tableshs);
      tr.addEventListener('click', (e) => {
          let x =   document.getElementById('btnmodal1');
          x.setAttribute('onclick', "shsyes()");
          let x2 =   document.getElementById('btnmodal2');
          x2.setAttribute('onclick', "shsno()");
          tempappid = doc.id;
          appindex = tr.rowIndex;
          document.getElementById('btnmodal1').textContent ="Passed";
          document.getElementById('btnmodal2').textContent = "Failed";     
          document.getElementById('mbody').textContent =  "Result of the admission test";
          last = doc.data().LastName;
          first = doc.data().FirstName;
          mi = doc.data().MiddleInitial;
          document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
        });
    
 
}


db.collection('studentForms').orderBy('Qualified').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
     
         if(change.doc.data().Qualified === "YES" && change.doc.data().Education === "SHS" && change.doc.data().Status === "Applicant")   
            {
            renderCafe2(change.doc);
            }
        
           else if( change.type == 'modified' && change.doc.data().Qualified === "YES" && change.doc.data().Education === "SHS" && change.doc.data().Status === "Applicant")   
            {
            renderCafe2(change.doc);
            }
         
    });
});
     //for enrollees COLLEGE
function renderCafe3(doc)
{ 
        let tr= document.createElement('tr');
        let appid1 = document.createElement('td');
        let batch = document.createElement('td');
        let name1 = document.createElement('td');
        let education1 = document.createElement('td');
        tr.setAttribute('data-id', doc.id);
        tr.setAttribute('class' , "tr1");
        tr.setAttribute('data-toggle', "modal" );
        tr.setAttribute('data-target', "#myModal");
        education1.textContent =doc.data().Education;
    var i = doc.data().Batch;
 var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
       i =  i + "st";
    }
  else  if (j == 2 && k != 12) {
          i =  i + "nd";
    }
    else if (j == 3 && k != 13) {
          i =  i + "rd";
    }
    else
     {
         i =  i + "th";
     }
        batch.textContent =i;
        appid1.textContent = doc.data().StudentNumber;
        name1.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+                     doc.data().MiddleInitial;
        tr.appendChild(appid1);
        tr.appendChild(batch);
        tr.appendChild(education1);
        tr.appendChild(name1); 
        tablecol.appendChild(tr);
        cafeList3.appendChild(tablecol);
      tr.addEventListener('click', (e) => {
            let x =   document.getElementById('btnmodal1');
            x.setAttribute('onclick', "colyes()");
            let x2 =   document.getElementById('btnmodal2');
            x2.setAttribute('onclick', "colno()");
            tempappid = doc.id;
            appindex = tr.rowIndex;
            document.getElementById('btnmodal1').textContent ="Passed";
            document.getElementById('btnmodal2').textContent = "Failed";     
            document.getElementById('mbody').textContent =  "Result of the admission test";
            last = doc.data().LastName;
            first = doc.data().FirstName;
            mi = doc.data().MiddleInitial;
            document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
    });
    
}

db.collection('studentForms').orderBy('Qualified').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        
         if(change.doc.data().Qualified === "YES" && change.doc.data().Education === "COLLEGE" && change.doc.data().Status === "Applicant")   
            {
            renderCafe3(change.doc);
            }
     
            else if(change.type == 'modified' && change.doc.data().Qualified === "YES" && change.doc.data().Education === "COLLEGE" && change.doc.data().Status === "Applicant")   
            {
            renderCafe3(change.doc);
            }
         
    });
});




function render1st(doc)
{

     
    let tr= document.createElement('tr');
    let appid1 = document.createElement('td');
    let  section= document.createElement('td');
    let name1 = document.createElement('td');
    let program = document.createElement('td');
    let year = document.createElement('td');
    let phone = document.createElement('td');
    let college = document.createElement('td');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('class' , "tr1");
    tr.setAttribute('data-toggle', "modal" );
    tr.setAttribute('data-target', "#myModal");
    program.textContent = doc.data().Program;
    college.textContent = doc.data().College;
    section.textContent =  doc.data().Section;
    phone.textContent = doc.data().Phone;
    year.textContent = doc.data().Year;
    appid1.textContent = doc.data().StudentNumber;
    name1.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+  doc.data().MiddleInitial;     
    tr.appendChild(appid1);
    tr.appendChild(name1);
    tr.appendChild(section);
    tr.appendChild(college);
    tr.appendChild(program);
    tr.appendChild(year);
    tr.appendChild(phone);
    table1st.appendChild(tr);
    cafeList4.appendChild(table1st);
    tr.addEventListener('click', (e) => {
          let x =   document.getElementById('btnmodal1');
          x.setAttribute('onclick', "done()");
          let x2 =   document.getElementById('btnmodal2');
          x2.setAttribute('onclick', "print()")
            tempappid = doc.id;
            appindex = tr.rowIndex;
            snumber = appid1.textContent;
            address = doc.data().Address;
            college = doc.data().College;
            dist = doc.data().DistrictNo;
            email = doc.data().Email;
            gender = doc.data().Gender;
            document.getElementById('btnmodal1').textContent ="Back";  
            document.getElementById('btnmodal2').textContent ="Print"; 
            document.getElementById('mbody').textContent =  
              "Student# :" + snumber + "\n" +
              "Address: " + address + "\n"+ 
               "College: " + college + "\n"+ 
                "District# :" +dist + "\n" +
                "Email: " + email  + "\n" + 
                "Gender: " + gender + "\n";
            last = doc.data().LastName;
            first = doc.data().FirstName;
            mi = doc.data().MiddleInitial;
            document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
    });
    
}


 db.collection('studentForms').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        
         if(change.doc.data().Education === "COLLEGE" && change.doc.data().Year.substr(4,7) ==="Year" && change.doc.data().Status === "Enrolled" && change.doc.data().Print !== "YES")    
            {
            render1st(change.doc);
            }
     
              else if(change.type == 'modified' && change.doc.data().Education === "COLLEGE" && change.doc.data().Year.substr(4,7) ==="Year" &&
               change.doc.data().Status==="Enrolled")   
            {
            render1st(change.doc);
            }
         
    });
});



function rendershsyear(doc)
{
 
    let tr= document.createElement('tr');
    let appid1 = document.createElement('td');
    let  section= document.createElement('td');
    let name1 = document.createElement('td');
    let program = document.createElement('td');
    let year = document.createElement('td');
    let phone = document.createElement('td');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('class' , "tr1");
    tr.setAttribute('data-toggle', "modal" );
    tr.setAttribute('data-target', "#myModal");
    program.textContent = doc.data().Program;
    section.textContent = doc.data().Section;
    phone.textContent = doc.data().Phone;
    year.textContent = doc.data().Year;
    appid1.textContent = doc.data().StudentNumber;
    name1.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+      doc.data().MiddleInitial;
    tr.appendChild(appid1);
    tr.appendChild(name1);
    tr.appendChild(section);
    tr.appendChild(program);
    tr.appendChild(year);
    tr.appendChild(phone);
    tableshsyear.appendChild(tr);
    cafeList5.appendChild(tableshsyear);
  tr.addEventListener('click', (e) => {
          let x =   document.getElementById('btnmodal1');
          x.setAttribute('onclick', "done()");
          let x2 =   document.getElementById('btnmodal2');
          x2.setAttribute('onclick', "print()")
            tempappid = doc.id;
            appindex = tr.rowIndex;
            snumber = appid1.textContent;
            address = doc.data().Address;
            college = doc.data().College;
            dist = doc.data().DistrictNo;
            email = doc.data().Email;
            gender = doc.data().Gender;
            document.getElementById('btnmodal1').textContent ="Back";  
            document.getElementById('btnmodal2').textContent ="Print"; 
            document.getElementById('mbody').textContent =  
              "Student# :" + snumber + "\n" +
              "Address: " + address + "\n"+ 
               "College: " + college + "\n"+ 
                "District# :" +dist + "\n" +
                "Email: " + email  + "\n" + 
                "Gender: " + gender + "\n";
            last = doc.data().LastName;
            first = doc.data().FirstName;
            mi = doc.data().MiddleInitial;
            document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
    });
    
}


 db.collection('studentForms').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        
         if(change.type == 'added' && change.doc.data().Education === "SHS" && change.doc.data().Year.substr(0,5) === "Grade"  && change.doc.data().Status === "Enrolled" && change.doc.data().Print !== "YES")   
            {
            rendershsyear(change.doc);
            }
       
             else if(change.type == 'modified' && change.doc.data().Education === "SHS" && change.doc.data().Year.substr(0,5) === "Grade"  && change.doc.data().Status ==="Enrolled" )   
            {
            rendershsyear(change.doc);
            }
        
    });
});



function renderclr1st(doc)
{

    let tr= document.createElement('tr');
    let appid1 = document.createElement('td');
    let  section= document.createElement('td');
    let name1 = document.createElement('td');
    let program = document.createElement('td');
    let year = document.createElement('td');
    let phone = document.createElement('td');
    let college = document.createElement('td');
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('class' , "tr1");
    tr.setAttribute('data-toggle', "modal" );
    tr.setAttribute('data-target', "#myModal");
      program.textContent = doc.data().Program;
      college.textContent = doc.data().College;
      section.textContent =  doc.data().Section;
      phone.textContent = doc.data().Phone;
      year.textContent = doc.data().Year;
      appid1.textContent = doc.data().StudentNumber;
      name1.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+ doc.data().MiddleInitial;
        
    tr.appendChild(appid1);
    tr.appendChild(name1);
    tr.appendChild(section);
    tr.appendChild(college);
    tr.appendChild(program);
    tr.appendChild(year);
    tr.appendChild(phone);

    tableclrapp.appendChild(tr);
    cafeList7.appendChild(tableclrapp);
 tr.addEventListener('click', (e) => {
            
              
             let x =   document.getElementById('btnmodal1');
             x.setAttribute('onclick', "clr1styes()");
           let x2 =   document.getElementById('btnmodal2');
             x2.setAttribute('onclick', "clr1stno()");
            tempappid = doc.id;
             appindex = tr.rowIndex;
         document.getElementById('btnmodal1').textContent ="Yes";
          document.getElementById('btnmodal2').textContent = "No";     
    document.getElementById('mbody').textContent =  "Does this student complete his/her Clearance?";
      last = doc.data().LastName;
            first = doc.data().FirstName;
            mi = doc.data().MiddleInitial;
            document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
    });
    
}


 db.collection('studentForms').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        
         if(change.type == 'added' && change.doc.data().Education === "COLLEGE" && change.doc.data().Year.substr(4,7) === "Year" && change.doc.data().Status === "For Clearance")   
            {
            renderclr1st(change.doc);
            }
         
            else if(change.type == 'modified' && change.doc.data().Education === "COLLEGE" && change.doc.data().Year.substr(4,7) ==="Year" &&
               change.doc.data().Status === "For Clearance")   
            {
            renderclr1st(change.doc);
            }
        
    });
});

function renderclrshs(doc)
{

     
    let tr= document.createElement('tr');
    let appid1 = document.createElement('td');
    let  section= document.createElement('td');
    let name1 = document.createElement('td');
    let program = document.createElement('td');
    let year = document.createElement('td');
    let phone = document.createElement('td');
  
    tr.setAttribute('data-id', doc.id);
    tr.setAttribute('class' , "tr1");
    
    tr.setAttribute('data-toggle', "modal" );
    tr.setAttribute('data-target', "#myModal");
   
    program.textContent = doc.data().Program;
 
    section.textContent =  doc.data().Section;
    phone.textContent = doc.data().Phone;
    year.textContent = doc.data().Year;
    appid1.textContent = doc.data().StudentNumber;
    name1.textContent =doc.data().LastName + ","+ doc.data().FirstName +" "+ doc.data().MiddleInitial;
        
    tr.appendChild(appid1);
    tr.appendChild(name1);
    tr.appendChild(section);
    tr.appendChild(program);
    tr.appendChild(year);
    tr.appendChild(phone);

    tableclrshs.appendChild(tr);
    cafeList6.appendChild(tableclrshs);
 tr.addEventListener('click', (e) => {
            
              
             let x =   document.getElementById('btnmodal1');
            x.setAttribute('onclick', "clrshsyes()");
           let x2 =   document.getElementById('btnmodal2');
        x2.setAttribute('onclick', "clrshsno()");
        tempappid = doc.id;
        appindex = tr.rowIndex;
        document.getElementById('btnmodal1').textContent ="Yes";
        document.getElementById('btnmodal2').textContent = "No";     
        document.getElementById('mbody').textContent =  "Does this student complete his/her Clearance?";
      last = doc.data().LastName;
            first = doc.data().FirstName;
            mi = doc.data().MiddleInitial;
            document.getElementById('mtitle').textContent = last + " " + first+ " "+mi;
    });
    
}

function sectionRender(doc)
{
    let tr= document.createElement('tr');
 
    let subjsection = document.createElement('td');
    let  subjcode= document.createElement('td');
    let subjname = document.createElement('td');
    let subjunit = document.createElement('td');    
    let subjtime = document.createElement('td');
    let subjroom = document.createElement('td');
    let subjday = document.createElement('td');
     let subjsem = document.createElement('td');
    let subjyear = document.createElement('td');
    tr.setAttribute('id', doc.id);
    tr.setAttribute('class' , "tr1");   
    tr.setAttribute('data-toggle', "modal" );
    tr.setAttribute('data-target', "#myModal"); 
    subjsection.textContent = doc.data().section;
    subjname.textContent = doc.data().name;
    subjunit.textContent = doc.data().unit;
    subjtime.textContent = doc.data().time;
    subjroom.textContent = doc.data().room;
    subjday.textContent = doc.data().day;
    subjcode.textContent = doc.data().code;  
    subjsem.textContent = doc.data().sem;
    subjyear.textContent = doc.data().year; 
     tr.appendChild(subjcode);
     tr.appendChild(subjname);
     tr.appendChild(subjday);
     tr.appendChild(subjunit);
     tr.appendChild(subjtime);
     tr.appendChild(subjroom);
     tr.appendChild(subjsection);
     tr.appendChild(subjsem);
     tr.appendChild(subjyear);
     tablesec.appendChild(tr); 
     sectionsched.appendChild(tablesec); 
 
}

 db.collection('subjects').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if(change.type =='added')
          {
              sectionRender(change.doc);
          }

    });
});


 db.collection('studentForms').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        
         if(change.type == 'added' && change.doc.data().Education === "SHS" && change.doc.data().Year.substr(0,5) === "Grade" && change.doc.data().Status === "For Clearance")   
            {
            renderclrshs(change.doc);
            }
        
             if(change.type == 'modified' && change.doc.data().Education === "SHS" && change.doc.data().Year.substr(0,5) === "Grade" && change.doc.data().Status === "For Clearance")   
            {
            renderclrshs(change.doc);
            }
        
    });
});

function appyes()
{
    var condtemp = 0;
    var tr = document.getElementById(tempappid);
    db.collection('batchANDroom').get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(parseInt(doc.data().quantity) == 0 || temp ==="done")
                {
                    
                }
            else
                {
            var num = parseInt(doc.data().quantity);
            date = doc.data().date;
            room = doc.data().room;
            batch = doc.data().batch;
            time = doc.data().timestart + "-" + doc.data().timeend;
            num = num - 1;
                    temp = "done";
              db.collection('batchANDroom').doc(doc.id).update({
            quantity:num,
            
        });
                
        
        db.collection('studentForms').doc(tempappid).update({
            Qualified:"YES",
            Batch: batch,
             Time: time,
             Room: room,
          
             Date: date,
        });
                 
         condtemp = 1;
                    
                    
             }
        });
          if(condtemp == 0)
        {
                alert("No batch open for now");
        }
    else
        {
        temp = "temp";
      alert("Updated Successfully");
    tableapp.deleteRow(appindex);
        }
    });
  
 
   
    
    $('#myModal').modal('hide');
}

function appno()
{
      var tr = document.getElementById(tempappid);
    db.collection('studentForms').doc(tempappid).update({
           Qualified:"NO",
            Batch: "",
             Time: "",
             Room: "",
             Date: "",
        });
        tableapp.deleteRow(appindex);
        alert("Updated Successfully");
    $('#myModal').modal('hide');
}
 

function shsyes()
{
       db.collection('studentForms').doc(tempappid).update({
            Status:"Enrollee",
           
        });
        alert("Updated Successfully");
           tableshs.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function shsno()
{
       db.collection('studentForms').doc(tempappid).update({
            Qualified:"No",
           
        });
        alert("Updated Successfully");
           tableshs.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function clr1styes()
{
       db.collection('studentForms').doc(tempappid).update({
            Status:"Enrollee",
           
        });
        alert("Updated Successfully");
           tableclrapp.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function clr1stno()
{
       db.collection('studentForms').doc(tempappid).update({
            Qualified:"No",
           
        });
        alert("Updated Successfully");
           tableclrapp.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function clrshsyes()
{
       db.collection('studentForms').doc(tempappid).update({
            Status:"Enrollee",
           
        });
        alert("Updated Successfully");
           tableclrshs.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function clrshsno()
{
       db.collection('studentForms').doc(tempappid).update({
            Qualified:"No",
           
        });
        alert("Updated Successfully");
           tableclrshs.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function colyes()
{
       db.collection('studentForms').doc(tempappid).update({
            Status:"Enrollee",
           
        });
        alert("Updated Successfully");
           tablecol.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function colno()
{
       db.collection('studentForms').doc(tempappid).update({
            Qualified:"No",
        });
    
        alert("Updated Successfully");
           tablecol.deleteRow(appindex);
    $('#myModal').modal('hide');
}

function done()
{
   
    $('#myModal').modal('hide');
}
function print()
{
 
       db.collection('studentForms').doc(tempappid).update({
            Print:"YES",
        });
    
    top.location = "https://dwaynealsina04.github.io/123/";
 
    $('#myModal').modal('hide');
    
}
      