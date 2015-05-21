angularFormsApp.controller('efController',
    function efController($scope, DataService) {
 
        // $scope.employee = DataService.employee;

        $scope.employee = {};
        $scope.editableEmployee = {};


        getEmployee();

        function getEmployee() {
            DataService.getEmployees()
                .success(function (empl) {
                    $scope.employee = {
                        id: empl.id,
                        fullName: empl.fullName,
                        notes: empl.notes,
                        department: empl.department,
                        perkLaptop: empl.perkLaptop,
                        perkStock: empl.perkStock,
                        perkSixWeeks: empl.perkSixWeeks,
                        payrollType: empl.payrollType
                    }
                    $scope.editableEmployee = angular.copy($scope.employee);
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        $scope.departments = [
             "FrontEnd",
             "BackEnd",
             "FullStack",
             "Developer"
        ];

        $scope.submitForm = function () {
            $scope.employee = angular.copy($scope.editableEmployee);

            DataService.put($scope.employee.id, $scope.employee)
              .success(function () {
                  alert('Updated Customer! Refreshing customer list.');
              })
              .error(function (error) {
                  alert('Unable to update customer: ' + error.message);
              });
            window.history.back();
        };
        $scope.cancelForm = function () {
            window.history.back();
        };

    });