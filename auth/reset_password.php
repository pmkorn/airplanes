<?php

    // script to reset the password of a user account when forgot
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // get the email from the form
        $email = $_POST['email'];

        // check if the email exists in the database
        require_once('./config/database.php');
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            // generate a new password
            $new_password = bin2hex(random_bytes(4)); // generates a random 8 character password

            // hash the new password
            $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

            // update the password in the database
            $stmt = $conn->prepare("UPDATE users SET password = ? WHERE email = ?");
            $stmt->bind_param("ss", $hashed_password, $email);
            $stmt->execute();

            // send the new password to the user's email
            mail($email, "Your New Password", "Your new password is: " . $new_password);

            echo "A new password has been sent to your email.";
        } else {
            echo "No account found with that email address.";
        }
    }

?>