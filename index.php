<!DOCTYPE html>
<title>Grunt Project</title>

<?php if ($ENV == 'prod'): ?>
<link rel="stylesheet" href="css/main.build.css">
<?php else: ?>
<link rel="stylesheet" href="css/main.css">
<? php endif; ?>

<div class="browser firefox"></div>

<?php if ($ENV == 'prod'): ?>
<script data-main="js/main.build.js" src="vendor/require.js"></script>
<?php else: ?>
<script data-main="js/main.js" src="vendor/require.js"></script>
<? php endif; ?>