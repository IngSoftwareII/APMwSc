scrumModule.service('asignacionTareaService', ['$q', '$http', function($q, $http) {

    this.AActuralizarAsignacionTarea = function(fAsignacionTarea) {
        return  $http({
          url: "asignacionTarea/AActuralizarAsignacionTarea",
          data: fAsignacionTarea,
          method: 'POST',
        });
    //    var labels = ["/VAsignacionTarea", "/VAsignacionTarea", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VAsignacionTarea = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'asignacionTarea/VAsignacionTarea',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

}]);