$("#contactf").validate({
        rules:{
            fname:{
                required:true,
                minlength:3,
                maxlength:15
            },
            email:{
                required:true
            },
            place:{
                required:true
            }
        },
        messages:{
            fname:{
                required: "enter first name",
               minlength:"enter at least min char"
            }
        }
    })
$(document).ready(function(){
    $("#sub").click(function(){
        alert("form submitted")
    })
})
