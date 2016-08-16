/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-material';
import 'angular-material/angular-material.css';
// import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss';

import 'material-icons/css/material-icons.css';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router', 'ngMaterial'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
