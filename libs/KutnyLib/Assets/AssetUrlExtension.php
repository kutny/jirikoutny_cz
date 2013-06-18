<?php

namespace KutnyLib\Assets;

use Twig_Extension;
use Twig_Function_Method;

class AssetUrlExtension extends Twig_Extension {

    private $assetsVersion;

    public function __construct($assetsVersion) {
        $this->assetsVersion = $assetsVersion;
    }

	public function getFunctions() {
		return array(
			'asset_url' => new Twig_Function_Method($this, 'getUrl'),
		);
	}

	public function getName() {
		return 'kutny_asset_url';
	}

	public function getUrl($path) {
        return $path . '?v' . $this->assetsVersion;
	}

}
