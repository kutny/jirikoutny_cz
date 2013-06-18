<?php

namespace Kutny\FrontBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route(service = "controller.homepage_controller")
 */
class HomepageController
{
    /**
     * @Route("/", name="route.homepage")
     * @Template()
     */
    public function homepageAction()
    {
        return array();
    }
}
