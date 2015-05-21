//angularFormsApp.factory('DataService',
//    function () {
//        return {
//            employee: {
//                fullName: "Sandra Muller",
//                notes: "The ideal employee ;p",
//                department: "Developer",
//                perkLaptop: true,
//                perkStock: false,
//                perkSixWeeks: true,
//                payrollType: "monthly"
//            }
//        }
//    });

angularFormsApp.service('DataService', function ($http) {

    //Create new record
   this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/Employees",
            data: Employee
        });
        return request;
    }
    //Get Single Records
   this.get = function (EmpNo) {
        return $http.get("/api/Employees/" + EmpNo);
    }

    //Get All Employees
   this.getEmployees = function () {
        return $http.get("/api/Employees");
    }


    //Update the Record
   this.put = function (EmpNo, Employee) {
        var request = $http({
            method: "put",
            url: "/api/Employees/" + EmpNo,
            data: Employee
        });
        return request;
    }
    //Delete the Record
   this.delete = function (EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/Employees/" + EmpNo
        });
        return request;
    }
});