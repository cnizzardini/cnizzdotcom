<?php
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

Router::plugin('Nizzardini', ['path' => '/'], function (RouteBuilder $routes) {
    
    $routes->connect('/', ['controller' => 'Pages', 'action' => 'index']);
    
    $routes->fallbacks(DashedRoute::class);
});
