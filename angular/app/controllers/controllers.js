﻿
//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('CustomersController', function ($scope, customersService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };
});

//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
app.controller('CustomerOrdersController', function ($scope, $routeParams, customersService) {
    $scope.customer = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab customerID off of the route        
        var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
        if (customerID > 0) {
            $scope.customer = customersService.getCustomer(customerID);
        }
    }

});

//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('OrdersController', function ($scope, customersService) {
    $scope.customers = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
});



app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.customer && $scope.customer.orders) {
            var total = 0.00;
            for (var i = 0; i < $scope.customer.orders.length; i++) {
                var order = $scope.customer.orders[i];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});

app.controller('titleController', function($scope, $route, $log) {
    $scope.$on('$routeChangeSuccess', function() {
        $scope.title = $route.current.title;
    });
});

app.controller('ConditionsController', function ($scope, customersService) {
    $scope.patients = [];
    $scope.conditions = [];
    $scope.diagnoses = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
        $scope.conditions = customersService.getConditions();
        $scope.diagnoses = customersService.getDiagnoses();
    }

    $scope.getRandom = function( min, max ){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $scope.orderby = 'title';
    $scope.reverse = false;

    $scope.setOrder = function (orderby) {
        if ( orderby === 'asc' ) 
        {
            $scope.reverse = false;
        }
        if ( orderby === 'desc' )
        {
            $scope.reverse = true;
        }
        if ( orderby === 'risk' )
        {
            $scope.orderby = orderby;
        }
    };
});


app.controller('MedsController', function ($scope, customersService) {
    $scope.patients = [];
    $scope.medications = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
        $scope.medications = customersService.getMedications();
    }

    $scope.orderby = 'title';
    $scope.reverse = false;

    $scope.setOrder = function (orderby) {
        if ( orderby === 'asc' ) 
        {
            $scope.reverse = false;
        }
        if ( orderby === 'desc' )
        {
            $scope.reverse = true;
        }
    };
});

app.controller('GoalsController', function ($scope, customersService) {
    $scope.patients = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
    }
});

app.controller('VitalsController', function ($scope, customersService) {
    $scope.patients = [];
    $scope.vitals = [];
    $scope.labs = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
        $scope.vitals = customersService.getVitals();
        $scope.labs = customersService.getLabs();
    }
});

app.controller('AssessmentsController', function ($scope, customersService) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
});

app.controller('ProceduresController', function ($scope, customersService) {
    $scope.patients = [];
    $scope.procedures = [];
    $scope.immunizations = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
        $scope.procedures = customersService.getProcedures();
        $scope.immunizations = customersService.getImmunizations();
    }

    $scope.getRandom = function( min, max ){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
});

app.controller('DocsController', function ($scope, customersService) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
});

app.controller('MessagesController', function ($scope, customersService) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
});

app.controller('TasksController', function ($scope, customersService) {
    $scope.patients = [];
    $scope.tasks = [];
    $scope.playlists = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
        $scope.tasks = customersService.getTasks();
        $scope.playlists = customersService.getPlaylists();
    }


    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.tasks, function(task) {
          count += task.today ? 1 : 0;
        });
        return count;
      };


});
