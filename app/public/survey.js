$(function () {
    $("#submitForm").click(function (event) {
        event.preventDefault();
        let data = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            q1: $('input[name=q1]:checked').val(),
            q2: $('input[name=q2]:checked').val(),
            q3: $('input[name=q3]:checked').val(),
            q4: $('input[name=q4]:checked').val(),
            q5: $('input[name=q5]:checked').val(),
            q6: $('input[name=q6]:checked').val(),
            q7: $('input[name=q7]:checked').val(),
            q8: $('input[name=q8]:checked').val(),
            q9: $('input[name=q9]:checked').val(),
            q10: $('input[name=q10]:checked').val()
        }
        $.ajax({
            method: "POST",
            url: "./api/friends",
            data: data
        }).done( data => {
            console.log("======================AJAX DONE===============")
            console.log(data)
            $("#match-name").text(data.friend);
            let img = $("<img>");
            img.attr("src", data.photo);
            $("#match-photo").append(img);
            $('#exampleModal').modal('show');
        });
});
});