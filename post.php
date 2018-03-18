<?php
	$Name = $_POST['UserMail'];
	$Email = $_POST['UserName'];
	$Subject = $_POST['UserSubject'];
	$Message = $_POST['UserMessage'];
	//Фильтруем данные
	//преобразуем все символы
	$Name = htmlspecialchars($Name);
	$Email = htmlspecialchars($Email);
	$Subject = htmlspecialchars($Subject);
	$Message = htmlspecialchars($Message);
	//декодируем url
	$Name = urldecode($Name);
	$Email = urldecode($Email);
	$Subject = urldecode($Subject);
	$Message = urldecode($Message);
	//Удалить пробелы с конца и начала строки
	$Name = trim($Name);
	$Email = trim($Email);
	$Subject = trim($Subject);
	$Message = trim($Message);
	$Text = "Имя ".$Name." с почтой ".$Email." отправил письмо с темой ".$Subject." и текстом:" .$Message. "";
    //Отправляем письмо
	/*"на какой адрес отправить", 
	"тема письма", 
	"Сообщение (тело письма)",
	"From: с какого email отправляется письмо 
	\r\n"*/

	if ( mail("danielsadovskiy@gmail.com@gmail.com", "Заявка с сайта", $Text) )
		echo "Send";
	else
		echo "Error";
?>
