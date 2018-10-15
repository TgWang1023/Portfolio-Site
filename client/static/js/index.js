$(document).ready(function() {

    $("#github").mousemove(function() {
        $("#contact-info").text("ID: TgWang1023");
        $(this).css("border", "2px solid white");
    });
    $("#github").mouseleave(function() {
        $(this).css("border", "");
    });
    $("#github").click(function() {
        console.log("came here");
        window.location = "https://github.com/TgWang1023";
    });

    $("#linkedin").mousemove(function() {
        $("#contact-info").text("Profile URL: https://www.linkedin.com/in/tiangewang/");
        $(this).css("border", "2px solid white");
    });
    $("#linkedin").mouseleave(function() {
        $(this).css("border", "");
    });
    $("#linkedin").click(function() {
        window.location = "https://www.linkedin.com/in/tiangewang/";
    });

    $("#email").mousemove(function() {
        $("#contact-info").text("Email: wtgkevin@gmail.com");
        $(this).css("border", "2px solid white");
    });
    $("#email").mouseleave(function() {
        $(this).css("border", "");
    });
    $("#email").click(function() {
        window.location = "mailto:wtgkevin@gmail.com";
    });

    $("#phone").mousemove(function() {
        $("#contact-info").text("Phone #: (650)224-5288");
        $(this).css("border", "2px solid white");
    });
    $("#phone").mouseleave(function() {
        $(this).css("border", "");
    });

    $("#hangout").mousemove(function() {
        $("#contact-info").text("Hangout Email: wtgkevin@gmail.com");
        $(this).css("border", "2px solid white");
    });
    $("#hangout").mouseleave(function() {
        $(this).css("border", "");
    });

    $("#skype").mousemove(function() {
        $("#contact-info").text("ID: live:wtg005");
        $(this).css("border", "2px solid white");
    });
    $("#skype").mouseleave(function() {
        $(this).css("border", "");
    });
    $("#skype").click(function() {
        window.location = "https://join.skype.com/invite/NJmwo4cw5soS";
    });

});