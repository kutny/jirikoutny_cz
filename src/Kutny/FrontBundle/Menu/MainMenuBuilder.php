<?php

namespace Kutny\FrontBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\HttpFoundation\Request;

class MainMenuBuilder
{
    private $factory;

    /**
     * @param FactoryInterface $factory
     */
    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    public function createMainMenu(Request $request)
    {
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', 'menu');

        $menu->addChild('Domů', array('route' => 'route.homepage', 'class' => 'ahoj'));
        $menu->addChild('Školení Symfony2', array('route' => 'route.symfony_training'));

        $menu->setCurrentUri($request->getRequestUri());

        return $menu;
    }
}
