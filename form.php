<?php

$inp = $_POST['ourForm__inp'];

switch($inp){
   case 'Гарри':
      echo "Гриффиндор";
      break;
   case 'Гермиона':
      echo "Ко мне в кабинет";
      break;
   default:
   echo "Фу, магл";
}