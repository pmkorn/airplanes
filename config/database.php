<?php

    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', 'root');
    define('DB_NAME', 'airplanes');

    $db_conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if(!$db_conn) {
        die("Verbinding met de database is mislukt: " . mysqli_connect_error());
    } else {
        //echo "Verbinding met de database is gelukt!";
    }

?>