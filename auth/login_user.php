<?php

    $userID = $_POST['userID'];
    if (isset($userID)) {
        require_once './config/database.php';
        $sql = "DELETE FROM users WHERE id = ?";
        $stmt = $db_conn->prepare($sql);
        $stmt->bind_param("i", $userID);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'User deleted successfully.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Error deleting user.']);
        }
        $stmt->close();
        $db_conn->close();
    } else {
        echo json_encode(['success' => false, 'message' => 'User ID not provided.']);
    }    

?>