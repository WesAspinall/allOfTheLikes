import angular from 'angular';

// Controllers
import MyController from './controllers/mycontroller';


// Creating a Module
angular.module('app', [])

// Some Controllers
angular.module('app').controller('MyController', MyController);