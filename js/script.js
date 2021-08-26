var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//event listener for when the pull down is clicked to identify what is being chosen
subTypeElement.addEventListener("change", function(e){
	subType = e.target.value;
	updateSubscriptionDiv();
	// console.log(subType);
});

//event listener for when the pull down is clicked to identify what is being chosen
subDurationElement.addEventListener("change", function(e){
	subDuration = Number(e.target.value);
	updateSubscriptionDiv();
	// console.log(subDuration);
});

// create a function to set the costs of each chosen subscription and set the innertext to create the total
var updateSubscriptionDiv = function(){
	var monthlyCost = 5;
	if (subType == "standard"){
		monthlyCost = 7;
	} else if (subType == "premium"){
		monthlyCost = 10;
	}
	var total = subDuration * monthlyCost;
	result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};

