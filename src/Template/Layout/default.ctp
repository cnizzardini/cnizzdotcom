<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
    
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title><?= $this->fetch('title'); ?></title>
    <meta property="og:description" content="<?= $this->fetch('title'); ?>" />
    <meta name="description" content="<?= $this->fetch('title'); ?>" />

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

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
