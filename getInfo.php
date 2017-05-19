#!/usr/bin/php

<?php

$conn_string = "host=178.62.38.12 dbname=market user=admin password=1330871Pp";
$dbconn = pg_connect($conn_string);
//connect to a database named "test" on the host "sheep" with a username and password

// Performing SQL query
$query = 'SELECT * FROM market_stock';
$result = pg_query($query) or die('Query failed: ' . pg_last_error());

// Printing results in HTML
echo "<table>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// Free resultset
pg_free_result($result);

// Closing connection
pg_close($dbconn);

?>
