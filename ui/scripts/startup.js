document.onreadystatechange = function () {
    if (document.readyState === "complete") { // PAGE HAS BEEN LOADED
        swal(
            {   title: "Do you want to login or signup",
                //text: "You will not be able to recover this imaginary file!",
                type: "success",   showCancelButton: true, // info
                confirmButtonColor: "#A5DC86",
                cancelButtonColor: "#A5DC86",
                confirmButtonText: "login", 
                cancelButtonText: "signup",
                closeOnConfirm: false, 
                showLoaderOnConfirm: true, 
                closeOnCancel: false },
                function(isConfirm){
                    if (isConfirm) {
                        swal("Good job!", "Redirecting you to login page... :)", "success")
                        setTimeout(window.location.href = "login.html", 2000)
                    }
                   else {
                        swal("Good job!", "Redirecting you to signup page... :)", "success")
                        setTimeout(window.location.href = "signup.html", 2000)
                   }
                }
            )
    }
}