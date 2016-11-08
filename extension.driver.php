<?php

	Class extension_materie extends Extension{

		public function getSubscribedDelegates(){
			return array(
				array(
					'page'     => '/backend/',
					'delegate' => 'InitaliseAdminPageHead',
					'callback' => 'appendAssets'
				),
			);
		}

	/*-------------------------------------------------------------------------
		Delegates:
	-------------------------------------------------------------------------*/

    public function appendAssets()
    {
        $callback = Symphony::Engine()->getPageCallback();

        if ($callback['driver'] == 'publish' && $callback['context']['page'] !== 'index') {
            Administration::instance()->Page->addStylesheetToHead(URL . '/extensions/materie/assets/materie.publish.css');
            Administration::instance()->Page->addScriptToHead(URL . '/extensions/materie/assets/materie.publish.js');
        }
    }

	}
