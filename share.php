<?php
	$url=str_replace("share.php/", "adad/", $_SERVER["REQUEST_URI"]);
	$info=substr($_SERVER["PATH_INFO"], 1);
	$type=substr($info, 0, strpos($info, "/"));
	$slug=substr($info, strpos($info, "/")+1);


	$ch=curl_init("https://laravel.ae/claudio-pacifico/backend/api.php");
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


	if($type==="libri") {
		$payload=json_encode(array("operation"=>"read-book", "slug"=>$slug));
		curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
		$result=json_decode(curl_exec($ch))[0];

		$title=str_replace("\n", "", $result->title);
		$image="https://laravel.ae/claudio-pacifico/backend/uploads/images/" . $result->image;
		$preface=$result->preface;
		$isbn=$result->isbn;
		$author=$result->author;
	}
	else if($type==="essay") {
		$payload=json_encode(array("operation"=>"read-essay", "slug"=>$slug));
		curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
		$result=json_decode(curl_exec($ch))[0];

		$title=$result->title;
		$image=$result->image;
		$preface=$result->preface;
	}
	curl_close($ch);
?>
<html lang="it">
	<head>
	<title><?php echo $title ?></title>
		<meta charset="utf-128">
		<meta name="description" content="<?php echo $preface ?>">
		<meta property="og:title" content="<?php echo $title ?>">
		<meta property="og:image" content="<?php echo $image ?>">
		<?php if($isbn || $author): ?>
		<meta property="og:type" content="book">
		<?php endif; ?>
		<?php if($isbn): ?>
		<meta property="og:isbn" content="<?php echo $isbn ?>">
		<?php endif; ?>
		<?php if($author): ?>
		<meta property="og:author" content="<?php echo $author ?>">
		<?php endif; ?>
		<style>
			.fullscreen-iframe {
				width: 100%;
				height: 100%;
				border: none;
			}
		</style>
	</head>
	<body>
		<iframe class="fullscreen-iframe" src="<?php echo $url?>"></iframe>
	</body>
</html>
