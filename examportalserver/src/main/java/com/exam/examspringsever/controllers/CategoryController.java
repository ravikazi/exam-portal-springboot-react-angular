package com.exam.examspringsever.controllers;

import java.util.Set;

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

import com.exam.examspringsever.models.exam.Category;
import com.exam.examspringsever.services.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "*")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	//Add category
	@PostMapping("/")
	public ResponseEntity<Category> addCategory(@RequestBody Category category)
	{
		Category category2 = this.categoryService.addCategory(category);
		return ResponseEntity.ok(category2);
	}
	//Update Category
	@PutMapping("/")
	public Category updateCategory(@RequestBody Category category)
	{
		return this.categoryService.updateCategory(category);
	}
	//Get Single Category
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") Long categoryId)
	{	
		return this.categoryService.getCategory(categoryId);
	}
	
	//get All category
	@GetMapping("/")
	public ResponseEntity<?> getCategories()
	{
		return ResponseEntity.ok(this.categoryService.getCategories());
	}
	
	//Delete Category
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long categoryId)
	{
		this.categoryService.deleteCategory(categoryId);
	}
}
