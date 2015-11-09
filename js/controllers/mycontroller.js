let MyController = function ($scope){


  $scope.name = 'Wes'
  $scope.word = 'kanyes'
  $scope.count = 0;

  $scope.doSomething = function(){
    $scope.count++;

    if ($scope.count === 1){
      $scope.word = 'kanye'
    } else {
      $scope.word = 'kanyes'
    };

  };

};

MyController.$inject = ['$scope'];

export default MyController;
