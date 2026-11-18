$(document).ready(function (){

    // function to register a new user
    $('#registerForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        let formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            url: '/register', // Replace with your server endpoint
            type: 'POST',
            data: formData,
            success: function (response) {
                alert('Registration successful! You can now log in.');
                window.location.href = '/login'; // Redirect to login page
            },
            error: function (xhr, status, error) {
                alert('An error occurred during registration. Please try again.');
            }
        });
    });

    // function to log in a user
    $('#loginForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        let formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            url: '/login', // Replace with your server endpoint
            type: 'POST',
            data: formData,
            success: function (response) {
                alert('Login successful! Redirecting to dashboard.');
                window.location.href = '/dashboard'; // Redirect to dashboard
            },
            error: function (xhr, status, error) {
                alert('Invalid username or password. Please try again.');
            }
        });
    });

    // function to log out a user
    $('#logoutButton').click(function () {
        $.ajax({
            url: '/logout', // Replace with your server endpoint
            type: 'POST',
            success: function (response) {
                alert('You have been logged out successfully.');
                window.location.href = '/login'; // Redirect to login page
            },
            error: function (xhr, status, error) {
                alert('An error occurred while logging out. Please try again.');
            }
        });
    });

    // function to update user profile
    $('#updateProfileForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        let formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            url: '/update_profile', // Replace with your server endpoint
            type: 'POST',
            data: formData,
            success: function (response) {
                alert('Profile updated successfully.');
                window.location.reload(); // Reload the page to reflect changes
            },
            error: function (xhr, status, error) {
                alert('An error occurred while updating the profile. Please try again.');
            }
        });
    });

   // function to delete user account
    $('#btnDeleteUser').click(function () {
        let userID = $(this).data('user-id');
        if (confirm('Are you sure you want to delete this user account? This action cannot be undone.')) {
            $.ajax({
                url: '/delete_user', // Replace with your server endpoint
                type: 'POST',
                data: { id: userID },
                success: function (response) {
                    alert('User account deleted successfully.');
                    // Optionally, redirect or update the UI
                    window.location.reload();
                },
                error: function (xhr, status, error) {
                    alert('An error occurred while deleting the user account. Please try again.');
                }
            });
        }
    });

    // function to reset password
    $('#resetPasswordForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        let formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            url: '/reset_password', // Replace with your server endpoint
            type: 'POST',
            data: formData,
            success: function (response) {
                alert('Password reset successful! You can now log in with your new password.');
                window.location.href = '/login'; // Redirect to login page
            },
            error: function (xhr, status, error) {
                alert('An error occurred during password reset. Please try again.');
            }
        });
    });

    // function to toggle password visibility
    $('#togglePassword').click(function () {
        let passwordField = $('#password');
        let type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).toggleClass('fa-eye fa-eye-slash');
    });

});