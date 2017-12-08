<!-- todo thanks page for Lets Encrypt and http://konpa.github.io/devicon/ -->
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

    <?//= $this->Html->css('/nizzardini/css/nizz.css') ?>
    <?= $this->Html->css('https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css') ?>
    <?= $this->Html->css('https://fonts.googleapis.com/css?family=Pinyon+Script"') ?>
</head>
<body>
    <div id="wrapper">
        <?php echo $this->fetch('content'); ?>
    </div>
    <?php echo $this->Html->script('/nizzardini/dist/bundle.js?t=' . microtime(true)); ?>
</body>
</html>
