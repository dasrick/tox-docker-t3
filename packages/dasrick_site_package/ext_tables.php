<?php
defined('TYPO3_MODE') || die();

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

// FTI global
ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/TypoScript',
    'dasrick'
);

ExtensionManagementUtility::registerPageTSConfigFile(
    $_EXTKEY,
    'Configuration/TypoScript/PageTSConfig.t3s',
    'dasrick PageTSconfig'
);
