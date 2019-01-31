myApp.controller('empController', function ($scope, $route, $routeParams, $http, $q) {
	var employees = $http.get('/api/employees');
	var salaries = $http.get('/api/salaries');

	$scope.getEmployees = function () {
		employees.then(function (response) {
			$scope.employees = response.data.employees;
		});
	};
	$scope.getSalaries = function () {
		salaries.then(function (response) {
			$scope.salaries = response.data.salary;
		});
	};
	$scope.getCommon = function () {
		$scope.details = [];
		$q.all([employees, salaries]).then(function (response) {
			response[0].data.employees.forEach(function (employee) {
				response[1].data.salary.forEach(function (salary) {
					if (employee.id === salary.empId) {
						$scope.details.push({
							fullName: employee.firstName + ' ' + employee.lastName,
							id: employee.id,
							salary: salary.salary
						})
					}
				})
			})
		})
	};
});