<?php

	// Узнаем IP Адрес пользователя
	function getIp() {
		$keys = [
			'HTTP_CLIENT_IP',
			'HTTP_X_FORWARDED_FOR',
			'REMOTE_ADDR'
		];
		foreach ($keys as $key) {
			if (!empty($_SERVER[$key])) {
				$ipUser = trim(end(explode(',', $_SERVER[$key])));
				if (filter_var($ipUser, FILTER_VALIDATE_IP)) {
					return $ipUser;
				}
			}
		}
	}
	$ipUser = getIp();

	// Узнаем текущую дату и время на русском языке
	$month = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	];
	$months = date('n')-1;
	$dateTime = date('d').' '.$month[$months].' '.date('Y г. в H:i:s');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'libs/PHPMailer-6.6.5/src/Exception.php';
	require 'libs/PHPMailer-6.6.5/src/PHPMailer.php';

	// Общие настройки
	$siteName = 'bel-svai.by'; // Имя сайта
	$mailFrom = 'maksim_a.k@mail.ru'; // От кого отправится письмо
	$mailTo = 'info@bel-svai.by'; // Кому отпраится письмо

	// Получаем данные из полей форм,
	$spam = $_POST['name'];
	$fieldName = $_POST['fieldName'];
	$fieldPhone = $_POST['fieldPhone'];

	// Определение СПАМа
	if (!empty($spam)) {
		echo 'Ой, СПАМ какой-то! :)';
	} else {

		// Формируем тему письма
		$subject = 'Сообщение с сайта '.$siteName.'';

		$mail = new PHPMailer(true);
		$mail->CharSet = 'UTF-8'; // Подключаем необходимую кодировку
		$mail->setLanguage('ru', 'libs/PHPMailer-6.6.5/language/'); // Подключаем русские ошибки
		$mail->IsHTML(true); // Подключаем возможность вставки HTML тегов в письме.
		$mail->setFrom($mailFrom, $siteName); // От кого письмо
		$mail->addAddress($mailTo); // Кому отправится письмо 
		//$mail->AddBCC($email); // Кому отправится скрытая копия письма
		$mail->Subject = $subject; // Тема письма

		// Формируем письмо
		$body = '<h1>Сообщение с сайта '.$siteName.'</h1>';

		if (!empty($fieldName)) {
			$body .= '<p><b>Имя:</b> '.$fieldName.'</p>';
		}

		if (!empty($fieldPhone)) {
			$body .= '<p><b>Номер телефона:</b> <a href="tel:'.$fieldPhone.'">'.$fieldPhone.'</a></p>';
		}

		$body .= '<p><b>IP адрес:</b> '.$ipUser.'</p>';

		$body .= '<p><b>Дата и время отправки:</b> '.$dateTime.'</p>';

		$mail->Body = $body;

		if (!$mail->send()) {
			echo 'Ошибка!'.$mail->ErrorInfo;
		} else {
			include_once('thanks.html');
		}
	}

?>