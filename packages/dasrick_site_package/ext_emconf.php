<?php
$EM_CONF[$_EXTKEY] = [
  'title' => 'dasrick TYPO3 Distribution Site Package',
  'description' => 'An example site package for dasrick TYPO3 Distribution',
  'category' => 'TYPO3 Console',
  'state' => 'stable',
  'uploadfolder' => 0,
  'createDirs' => '',
  'modify_tables' => '',
  'clearCacheOnLoad' => 0,
  'author' => 'Enrico Hoffmann',
  'author_email' => 'dasrick@gmail.com',
  'author_company' => 'dasrick.de',
  'version' => '0.0.0',
  'constraints' => [
    'depends' => [
      'typo3' => '8.7.0-8.7.99',

      'flux' => '',
      'fluidcontent' => '',
      'fluidpages' => '',
      'vhs' => '',
    ],
    'conflicts' => [
    ],
    'suggests' => [
    ],
  ],
];
