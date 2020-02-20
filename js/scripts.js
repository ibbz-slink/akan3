function getAkanName(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var gender = document.getElementById("gender").checked;
    var day = new Date(date).getDay();
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];

    //testing if all the fields have been filled before execution
    //!== means not equal to
    //== means equal to
    // && means "and"
    if(name && date && gender !== null){
        if(gender == true){
           // alert("female");
           var akanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
           //var aName = akanNames[day];
        }else{
            // alert("male");
           var akanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
//           var aName = akanNames[day];
        }
        var aName = akanNames[day];
        alert("Hello " + name + ", Your Akan Name Is " + aName + ". You Were Born On a " + weekDay);
    }else{
        alert("Hello, You Must Fill All The Required Fields!");
    }
}