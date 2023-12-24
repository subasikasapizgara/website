<?php
	header("Access-Control-Allow-Origin: *");
	if (isset($_POST['html']) && isset($_POST['path']))
	{
		echo urldecode($_POST['path']);
		file_put_contents(urldecode($_POST['path']).'index.html', urldecode($_POST['html']));
	}