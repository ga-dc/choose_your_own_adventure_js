// put code here!

name = prompt("what is your name?");//.toUpperCase();
  if (name != null) {
  alert("Welcome " + name + ", Congratulations on your new job as a web developer intern. Your annual salary is $35,000 per year. I'm here to help you find an apartment. Click OK to continue");
  var choice = prompt("What part of the city would you like to live? NW, SW, NE, SE").toString().toUpperCase(); // change input to string and uppercase
}
else {
  name;
}

  if (choice == "NW") { // display info for NW and prompt user to type answer
  var roomMateOrUber = prompt("Northwest has great bars, resturants and tons of night life. You have Champange taste on a beer budget. Unfortunately you cannot afford $,2000 per month in rent on your miserable intern salary Do you get 2 roommates or uber on nights and weekends. Type R for roommates or U for Uber").toUpperCase();
 // restrict input to either of the two answers only
      if (roomMateOrUber == "R"){
      var KickOrAirbnb =prompt("So you miss your college days, dorm rooms, roommates, and drama? Your first roommate is great and pay his rent on time but the secnd one loses her job and can't make the rent. Do you kick her out so you can find a new roommate or make her sleep on the couch and do AirBnB in her old room? Type 'K' to Kick her out or 'A' for AirBnB").toUpperCase();
        // make user choose btw Kick friend out or AirBnB

          if (KickOrAirbnb == "K") { // display the info if user chooses to kick friend out
          alert("Reasonable choice. Everyone needs to pay their own way, who cares if you loose your best friend from 5th grade in the process. As the saying goes, 'If you want a friend in DC get a dog!'");
          }
          else if (KickOrAirbnb == "A") { // display info if user chooses AirBnB
            prompt("AirBnB is a great way to cover your missing rent and help if he couldn't pay rent he should be glad you let him sleep on the couch. AirBnB works out well until your landlord notices all the traffic in and out the apartment. You are fined and evicted for violating your lease agreement. You have to sleep in your car and shower in your office gym.");
          }

          else {
            prompt("Please type either R or U"); // force user to make a choice by repeating KickOrAirbnb
           KickOrAirbnb; // figure this out!
          }


    }
    else if (roomMateOrUber == "U") { // display if user chooses to do Uber
      var UberXOrBlack = prompt("Uber is great way to make money on your time with your car. Uber black pays more but uber x has fewer rules. Do you decide on uber X or uber black? Type'X' for UberX or 'B' for Uber-Black").toString().toUpperCase();

          // decide if I want to keep using tostring or restrict user answer to only the 2 options
          if (UberXOrBlack == "X") {
            alert("on uber x you must work 5 hours a day 7 days a week to come up with the rent. You now have no social life outside of uber and your internship");
          }

          else if (UberXOrBlack == "B") { // display the info if user chooses Uber-Black
            alert("Uber black pays 3 times $40 per hour and you only have to work 15 hours a month to cover your rent. Uber requires you buy commercial auto insurance which takes an exra $300/ per month so you barely break even. Hey at least you don't have roommates and can make the rent every month.");
          }

          else {
            UberXOrBlack; // write a code to send user back to var Uber-Black
          }

    }
  }
  else if (choice == "SW") {
    alert("Very Resonable choice. In fact it is so reasonable that 50,000 people just like you made the same choice and Southwest becomes the the part of the city with the most rapidly increasing rents. You decide to sign a 5 year lease to lock-in a rent you can afford.  You better love this internship and stay in DC for a while because with the $5,000 deposit you can't afford to move again any time soon");
  }

  else if (choice == "NE") {
    var sellOrKeep = prompt("Northeast is a wise choice. Lots of up and coming nieghborhoods and your new place is in walking distance to your internship. You no longer use your car on a regular basis but you have to keep paying for parking.  Do you sell your car or keep it? Type 'S' to sell it or 'K' to keep it"); // force user to make a choice
        if (sellOrKeep == "S") {
          alert("You sell your car and use the money to buy a new matching set of apple products; Macbook, Ipad, and Iphone now you can code in style!");
        }
        else if (sellOrKeep == "K") {
          alert("Hey you never know when you might need a car.  You use it for random roadtrips and as a backup when you need to go shopping. As a bonus it becomes a free billboard to advertise your new startup.");
        }

        else {
          alert("Don't you wish you can live without having to make difficult choices?")
          var sellOrKeep;
         // write a code to return to the beginning of the NE section
        }

  }

  else if (choice == "SE") {
    var apartmentLevel = prompt("Anacostia is one of the last places you can still get a one bedroom for less than $1000 per month. You find the deal of a life time for $875 per month. The last decision you need to make is which apartment level you want. Do you want the top floor or the basement? Type'T' for top floor or 'B' for Basement").toUpperCase();
    // force user to make a choice
        if (apartmentLevel == "T") {
        alert("Choosing the top floor guarantees no one will be stomping above your head. You can sleep in on the weekends with no interruptions. The elevator breaks down after 2 weeks and you have to walk up 4 flights to your unit. On the bright side you don't have to pay for a gym membership.");
        }

        else if (apartmentLevel == "B") {
          alert("The basement seems like a great choice, its cool in the summer time and easy access to bring things in and out of your apartment. Your apartment is broken into and you learn the hard way that easy access isn't always good.");
        }

        else {
          alert ("Don't you wish you can live without having to make difficult choices?")
          apartmentLevel; // write a code to take user back to the beginning of SE section
        }
      }
