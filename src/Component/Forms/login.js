import React from "react";
function submitform(event){
  event.preventDefault();
  var uname = document.getElementById("age").value;

if(uname===""){
     alert("Enter age");
  }
  else {
    alert("Registered Successfully");
    
  }
}
export function Login(){
    return(
      <>
      <div class="hdpaform">
        <h1>HDPA</h1>
        <form onSubmit="submitform(event)">
            <div class="input">
                <label  class="textlabel" for="age">AGE</label>
                <input type="number" id="age" name="age"/>
            </div>
	    <div class="radio">
                <input type="radio" name="gender" id="male" value="male"/>
                <label for="male">Male</label> 
                <input type="radio" name="gender" id="female" value="female"/>
                <label for="female">Female</label>
		            <input type="radio" name="gender" id="female" value="female"/>
                <label for="other">Other</label>
            </div>
	    <div class="input">
                 <lable class="textlabel" for="pain">Select Chest Pain Type</lable>
                 <select>
                        <option>aortic dissection</option>
                        <option>pericarditis with tamponade</option>
                        <option>esophageal perforation</option>
                        <option>pulmonary embolus</option>
                        <option>tension pneumothorax</option>
                 </select>
            </div>
            <div class="input">
                <label class="textlabel" for="blood pressure">Resting Blood Pressure</label>
                <input type="number" id="blood pressure" name="blood pressure"/>
            </div>
            <div class="input">
                <label  class="textlabel" for="cholestrol">Serum Cholestoral</label>
                <input type="text" id="cholestrol" name="cholestrol"/>
            </div>
	    <div class="input">
                <label  class="textlabel" for="blood sugar">Fasting Blood Sugar</label>
                <input type="text" id="blood sugar" name="blood sugar"/>
            </div>
            
            
            
            <div class="btn">
                <button type="submit">Cheack Heart Disease</button>
            </div>
        </form>
    </div>
      
      </>
    );
}