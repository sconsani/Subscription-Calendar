console.log("testing");

//the select box
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;


//event listener for when the subscription box choices have been changed. 
// it saves the target clicked on as the value of that target
subTypeElement.addEventListener("change", function (e){
	subType = e.target.value;
	updateSubscriptionDiv();
	// console.log(subType);
});

//event listener for when the duration box choices have been changed
//saves the target clicked on as the value of that target and makes sure it's a Number by using Number()
subDurationElement.addEventListener("change", function(e){
	subDuration = Number(e.target.value);
	updateSubscriptionDiv();
	// console.log(subDuration);
});

//set inner text to subscription and duration choices
//create a function that will set a cost for each subscription plan and multiply it by the number of months chosen for a total cost

var updateSubscriptionDiv = function(){
	//basic is starting at 5
	var monthlyCost = 5;
	if(subType == "standard") {
		monthlyCost = 7;
	} else if (subType == "premium"){
		monthlyCost = 10;
	}
	//formula to get total cost from chosen subscription and duration
	var total = subDuration * monthlyCost;
	result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};