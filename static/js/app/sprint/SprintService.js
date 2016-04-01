scrumModule.service('sprintService', ['$q', '$http', function($q, $http) {

  this.AActualizarEquipoSprint = function(fEquipo) {
        return  $http({
          url: "sprint/AActualizarEquipoSprint",
          data: fEquipo,
          method: 'POST',
        });
    //    var labels = ["/VEquipoSprint", "/VEquipoSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };
  
  this.ACrearElementoMeeting = function(fElementoMeeting) {
        return  $http({
          url: "sprint/ACrearElementoMeeting",
          data: fElementoMeeting,
          method: 'POST',
        });
    //    var labels = ["/VReunion", "/VCrearElementoMeeting", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.ACrearReunionSprint = function(fReunion) {
        return  $http({
          url: "sprint/ACrearReunionSprint",
          data: fReunion,
          method: 'POST',
        });
    //    var labels = ["/VSprint", "/VCrearReunionSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.ACrearSprint = function(fSprint) {
        return  $http({
          url: "sprint/ACrearSprint",
          data: fSprint,
          method: 'POST',
        });
    //    var labels = ["/VSprints", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AElimSprint = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/AElimSprint',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VSprints", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AModifElementoMeeting = function(fElementoMeeting) {
        return  $http({
          url: "sprint/AModifElementoMeeting",
          data: fElementoMeeting,
          method: 'POST',
        });
    //    var labels = ["/VReunion", "/VElementoMeeting", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AElimSprintHistoria = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/AElimSprintHistoria',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VSprint", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AModifReunionSprint = function(fReunion) {
        return  $http({
          url: "sprint/AModifReunionSprint",
          data: fReunion,
          method: 'POST',
        });
    //    var labels = ["/VReunion", "/VReunion", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AElimSprintTarea = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/AElimSprintTarea',
          method: 'GET',
          params: args
        });
    //    var labels = ["/VSprint", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AModifSprint = function(fSprint) {
        return  $http({
          url: "sprint/AModifSprint",
          data: fSprint,
          method: 'POST',
        });
    //    var labels = ["/VSprints", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VCrearElementoMeeting = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VCrearElementoMeeting',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.AResumenHistoria = function(fResumenHistoria) {
        return  $http({
          url: "sprint/AResumenHistoria",
          data: fResumenHistoria,
          method: 'POST',
        });
    //    var labels = ["/VSprint", "/VResumenHistoria", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VCrearReunionSprint = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VCrearReunionSprint',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.ASprintHistoria = function(fSprintHistoria) {
        return  $http({
          url: "sprint/ASprintHistoria",
          data: fSprintHistoria,
          method: 'POST',
        });
    //    var labels = ["/VSprint", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.ASprintTarea = function(fSprintTarea) {
        return  $http({
          url: "sprint/ASprintTarea",
          data: fSprintTarea,
          method: 'POST',
        });
    //    var labels = ["/VSprint", "/VSprint", ];
    //    var res = labels[0];
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VCrearSprint = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VCrearSprint',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VElementoMeeting = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VElementoMeeting',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VEquipoSprint = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VEquipoSprint',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VReunion = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VReunion',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };


    this.VResumenHistoria = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VResumenHistoria',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VSprint = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VSprint',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VSprintHistoria = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VSprintHistoria',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VSprintTarea = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VSprintTarea',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

    this.VSprints = function(args) {
        if(typeof args == 'undefined') args={};
        return $http({
          url: 'sprint/VSprints',
          method: 'GET',
          params: args
        });
    //    var res = {};
    //    var deferred = $q.defer();
    //    deferred.resolve(res);
    //    return deferred.promise;
    };

  }])
