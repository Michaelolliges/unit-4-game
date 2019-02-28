$(document).ready(function () {

    var random = Math.floor(Math.random() * 102 + 19);

    $("#numberToGet").text(random);

    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 120 + 19);
        console.log(random);
        $("#numberToGet").text(random);
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $("#score").text(userTotal);
    }

    function winner() {
        alert("You Won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function loser() {
        alert("You Lose!!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }


    // $("#image1").on("click", function () {
    //     userTotal = userTotal + num1;
    //     console.log("New userTotal " + userTotal);
    //     $("#score").text(userTotal);

    //     if (userTotal === random) {
    //         winner()
    //     }

    //     else if (userTotal > random) {
    //         loser()
    //     }
    // })

    $(".buttons").on("click", function () {
        // console.log($(this).val());
        // alert(this);
        // console.log($(this).val());
        console.log(this);
        var crystalVal = $(this).attr("data");
        console.log("crystalVal: ", crystalVal);

        
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#total").text(userTotal);
        // console.log("click"); not sure how to make the images act as buttons? i kust copy pasted what i thought would work below.
        if (userTotal === random) {
            winner()
        }

        else if (userTotal > random) {
            loser()
        }
    })
    // $("#image2").on("click", function () {
    //     userTotal = userTotal + num1;
    //     console.log("New userTotal " + userTotal);
    //     $("#score").text(userTotal);

    //     if (userTotal === random) {
    //         winner()
    //     }

    //     else if (userTotal > random) {
    //         loser()
    //     }
    //     $("#image3").on("click", function () {
    //         userTotal = userTotal + num1;
    //         console.log("New userTotal " + userTotal);
    //         $("#score").text(userTotal);

    //         if (userTotal === random) {
    //             winner()
    //         }

    //         else if (userTotal > random) {
    //             loser()
    //         }
    //         $("#image4").on("click", function () {
    //             userTotal = userTotal + num1;
    //             console.log("New userTotal " + userTotal);
    //             $("#score").text(userTotal);

    //             if (userTotal === random) {
    //                 winner()
    //             }

    //             else if (userTotal > random) {
    //                 loser()
    //             }

})