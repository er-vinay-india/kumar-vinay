<?php

define('IMAGEPATH', './');

if (is_dir(IMAGEPATH)) {
    $handle = opendir(IMAGEPATH);
} else {
    echo 'No image directory';
}

$directoryfiles = [];

$i=0;

foreach(glob(IMAGEPATH . '*') as $filename) {
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    
    if($ext == 'jpg') {
        $i++;
        echo $filename . " \n";
        rename($filename, $i . "." . $ext);
    }

    // echo basename($filename) . "\n";
}

/* while (($file = readdir($handle)) !== false) {
    $newfile = str_replace(' ', '_', $file);
    rename(IMAGEPATH . $file, IMAGEPATH . $newfile);
    $directoryfiles[] = $newfile;
}

foreach($directoryfiles as $directoryfile) {
    if(strlen($directoryfile) > 3) {
        echo '<img src="' . IMAGEPATH . $directoryfile . '" alt="' . $directoryfile . '" /> <br>';
    }
}

closedir($handle);  */

?>