<?php
namespace Nizzardini\Controller;

use Nizzardini\Controller\AppController;

/**
 * Pages Controller
 *
 *
 * @method \Nizzardini\Model\Entity\Page[] paginate($object = null, array $settings = [])
 */
class PagesController extends AppController
{
    public function index() 
    {
        $this->set('testing','test');
    }
}
