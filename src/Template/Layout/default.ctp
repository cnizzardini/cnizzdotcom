<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
    
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title><?= $this->fetch('title'); ?></title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <?= $this->fetch('meta') ?>
    <?= $this->Html->css('/nizzardini/css/nizz.css') ?>
</head>
<body>
    <div id="shell-bar">
        <input type="text" id="shell" autocomplete="off" placeholder='Type "help" to get started, press enter to run command' />
    </div>
    <div id="wrapper">
        <?php echo $this->fetch('content'); ?>
    </div>
    <div id="task-bar">
        &nbsp;
    </div>
    <script src="/nizzardini/js/nizz.js"></script>
</body>
</html>
