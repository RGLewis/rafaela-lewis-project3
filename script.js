// EXCUSES OBJECT
const excuses = {
    sick: [
        {
            heading: "You're sick",
            sayThis: "I'm sick.",
            frequency: "This is an elegant excuse — simple and to the point. You're sick. No questions asked. You can pull this excuse out every 1.5 - 2 months.",
            hotTip: "Don't Instagram your hooky shenanigans."
        },
        {
            heading: "You've caught a cold",
            sayThis: "Yesterday, a toddler coughed on me. I definitely feel a fever coming on.",
            frequency: "Every 3 months. Pretty soon, you'll begin to build an effective reputation for being susceptible to strangers' germs.",
            hotTip: "Shiver the entire time you're in your boss's office. If you're calling in sick, make sure your teeth chatter."
        },
        {
            heading: "You have food poisoning",
            sayThis: "Last night, I went out for sushi and I've been throwing up non-stop.",
            frequency: "Every 3 - 4 months, but make sure you switch up the type of food.",
            hotTip: "There's no such thing as over-selling when it comes to food poisoning."
        },
        {
            heading: "You have a migraine",
            sayThis: "I have a migraine.",
            frequency: "Every month. Pretty soon, you'll build up a really helpful reputation for getting migraines!",
            hotTip: "When you're telling your boss, make sure you rub your temples and groan at least three times."
        }
    ],
    emergency: [
        {
            heading: "Your dog ran away",
            sayThis: "I just got a call from my dog walker and Bob's run away!",
            frequency: "Twice a year.",
            hotTip: "Remember you've told your boss you have a dog named Bob. If you already have a dog, use its real name."
        },
        {
            heading: "You've burned yourself",
            sayThis: "I burned myself cooking breakfast. At the hospital now. Will keep you updated, but I'll likely be here all day.",
            frequency: "Once every three years.",
            hotTip: "Wear bandages around your wound area for at least a week."
        },
        {
            heading: "You got hit by a ball",
            sayThis: "I went to the game last night and a ball hit me in the face!",
            frequency: "Never again.",
            hotTip: "Youtube how to make fake bruises with makeup and apply one every day for a week, decreasing the severity of the bruise each day."
        },
        {
            heading: "Your Aunt's apartment flooded",
            sayThis: "I'm house sitting for my aunt and a pipe burst! I'm up to my knees in water!",
            frequency: "Every two years. If a pipe bursts once, it's likely to burst again.",
            hotTip: "Wear a slightly damp shirt into work tomorrow."
        }
    ]
};

$(function () {
    // STEP 1: Show and Hide elements when they're not active

    // Hide everything, except for Header and footer (load screen)
    $(".pre-planning").hide();
    $(".number-of-days").hide();
    $(".boss").hide();
    $(".good-liar").hide();
    $(".question-five-container").hide();
    $(".submit").hide();
    $(".results").hide();
    $(".restart").hide();
    

    // HIDE HEADER AND FOOTER/SHOW QUESTION 1
    $(".get-started").click(function () {
        $(".home-header").hide();
        $(".footer").hide();
        $(".pre-planning").show();
    });

    // HIDE QUESTION 1/SHOW QUESTION 2
    $(".next1").click(function (e) {
        
        // Make sure an input has been checked
        let checked1 = $("input[name=pre-planning-answer]").is(":checked");
        // If it is checked, hide everything, except for Question 2
        if (checked1 === true) {
            $(".pre-planning").hide();
            $(".number-of-days").show();
        
        // If no input has been checked, run an alert asking the user to select an input and select the "next" button
        } else {
            swal("Please pick one of two options and make sure you've selected the NEXT button.");
        }
    });
    
    // HIDE QUESTION 2/SHOW QUESTION 3
    $(".next2").click(function () {
        // Make sure an input has been checked
        const checked2 = $("input[name=number-of-days-answer]").is(":checked");
        
        // If it is checked, hide everything, except for Question 3
        if (checked2 === true) {
            $(".number-of-days").hide();
            $(".boss").show();
        
        // If no input has been checked, run an alert asking the user to select an input and select the "next" button
        } else {
            swal("Please pick one of two options and make sure you've selected the NEXT button.");
        }
    });

    // HIDE QUESTION 3/SHOW QUESTION 4
    $(".next3").click(function () {
        // Make sure an input has been checked
        const checked3 = $("input[name=boss-answer]").is(":checked");
        
        // If it is checked, hide everything, except for Question 4
        if (checked3 === true) {
            $(".boss").hide();
            $(".good-liar").show();

        // If no input has been checked, run an alert asking the user to select an input and select the "next" button
        } else {
            swal("Please pick one of two options and make sure you've selected the NEXT button.");
        }
    });

    // HIDE QUESTION 4/SHOW QUESTION 5
    $(".next4").click(function () {
        
        // Make sure an input has been checked
        const checked4 = $("input[name=good-liar-answer]").is(":checked");

        // If it is checked, hide everything, except for Question 5
        if (checked4 === true) {
            $(".good-liar").hide();
            $(".question-five-container").show();
            $(".submit").show();

        // If no input has been checked, run an alert asking the user to select an input and select the "next" button
        } else {
            swal("Please pick one of two options and make sure you've selected the NEXT button.");
        }
    });
    
    // HIDE QUESTION 5/SHOW RESULTS
    $(".submit").click(function () {

        // Make sure an input has been checked
        const checked5 = $("input[name=last-lie-answer]").is(":checked");

        // If it is checked, hide everything, except for Results
        if (checked5 === true) {
            $(".question-five-container").hide();
            $(".submit").hide();
            $(".results").show();
            $(".restart").show();

        // If no input has been checked, run an alert asking the user to select an input and select the "next" button
        } else {
            swal("Please pick one of two options and make sure you've selected the NEXT button.");
        }
    });

    // STEP 2: Submit the form and prevent the form from refreshing on default
    $("form").on("submit", function (event) {
        event.preventDefault();

        // STEP 3: Get User's answers 
        let userAnswer1 = $("input[name=pre-planning-answer]:checked").val();

        let userAnswer2 = $("input[name=number-of-days-answer]:checked").val();

        let userAnswer3 = $("input[name=boss-answer]:checked").val();

        let userAnswer4 = $("input[name=good-liar-answer]:checked").val();

        let userAnswer5 = $("input[name=last-lie-answer]:checked").val();

        // STEP 4: Create an empty array, to hold the user's answers.
        let fullUserAnswers = [];

        // STEP 5: Push all User Answers to the empty array (Full User Answers)
        fullUserAnswers.push(userAnswer1);
        fullUserAnswers.push(userAnswer2);
        fullUserAnswers.push(userAnswer3);
        fullUserAnswers.push(userAnswer4);
        fullUserAnswers.push(userAnswer5);

        // STEP 6: Create two separate arrays -- one for the user's "sick" choices and one for the user's "emergency" choices, by filtering through the fullUserAnswers array

        // Filtered array for "sick"
        const userSickAnswers = fullUserAnswers.filter(fullUserAnswers => {
            return fullUserAnswers === "sick"
        })

        // Filtered array for "emergency"
        const userEmergencyAnswers = fullUserAnswers.filter(fullUserAnswers => {
            return fullUserAnswers === "emerg"
        })

        //STEP 7: Generate a random index number that will determine the Excuse Suggestion (using the number 4 because there are 4 objects in each Excuse array)
        const randomNumber = Math.floor(Math.random() * 4);

        // STEP 8: Find out which values the user answered more of -- sick or emergency -- and generate an excuse for them, using randomNumber
        if (userSickAnswers.length > userEmergencyAnswers.length) {
            $(".results-content").html(`
            <h3 class="excuse-heading">${excuses.sick[randomNumber].heading}</h3>

            <p class="results-para"> <span class="bold">Say:</span> "${excuses.sick[randomNumber].sayThis}"</p>

            <p class="results-para"> <span class="bold">Repeatability:</span> ${excuses.sick[randomNumber].frequency}</p>

            <p class="results-para"> <span class="bold">Hot Tip:</span> ${excuses.sick[randomNumber].hotTip}</p>
        `);
        } else {
            $(".results-content").html(`
            <h3 class="excuse-heading">${excuses.emergency[randomNumber].heading}</h3>

            <p class="results-para"> <span class="bold">Say:</span> "${excuses.emergency[randomNumber].sayThis}"</p>

            <p class="results-para"> <span class="bold">Repeatability:</span> ${excuses.emergency[randomNumber].frequency}</p>

            <p class="results-para"> <span class="bold">Hot Tip:</span> ${excuses.emergency[randomNumber].hotTip}</p>
            `);
        };
    });

    // // STEP 9: Reset the quiz
    $(".restart").on("click", function () {
        location.reload(true);
    });
});