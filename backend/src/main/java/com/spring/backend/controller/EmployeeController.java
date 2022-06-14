package com.spring.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.backend.exception.ResourceNotFoundException;
import com.spring.backend.model.Employee;
import com.spring.backend.repository.EmployeeRepository;

import java.util.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employees")
	public List<Employee> getAll()
	{
		return employeeRepository.findAll();
	}
	
	@PostMapping("/employee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id)
	{
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee doesn't exist with that id : "+id));
		
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateDetails(@PathVariable Long id, @RequestBody Employee employeeDetails)
	{
			Employee employee= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee doesn't exist with that id:"+id));
			employee.setFirstName(employeeDetails.getFirstName());
			employee.setLastName(employeeDetails.getLastName());
			employee.setEmail(employeeDetails.getEmail());
			
			Employee updatedDetails = employeeRepository.save(employee);
			return ResponseEntity.ok(updatedDetails);
			
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id)
	{
		Employee employee= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee doesn't exist with that id:"+id));
		employeeRepository.delete(employee);
		Map<String,Boolean> response = new HashMap<>();
		response.put("Deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
