<?php

namespace Kutny\FrontBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route(service = "controller.symfony_training_controller")
 */
class SymfonyTrainingController
{
    /**
     * @Route("/skoleni-symfony")
     * @Template()
     */
    public function symfonyTrainingAction()
    {
        return array();
    }
}
