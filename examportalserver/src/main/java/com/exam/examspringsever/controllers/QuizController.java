package com.exam.examspringsever.controllers;

import java.util.List;
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
import com.exam.examspringsever.models.exam.Quiz;
import com.exam.examspringsever.services.QuizService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/quiz")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	//Add Quiz
	@PostMapping("/")
	public ResponseEntity<Quiz> add(@RequestBody Quiz quiz)
	{
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}
	
	//Update Quiz
	@PutMapping("/")
	public ResponseEntity<Quiz> update(@RequestBody Quiz quiz)
	{
		return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}
	
	//Get Quiz
	@GetMapping("/")
	public ResponseEntity<?> quizzes()
	{
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}
	
	//Get Single Quiz
	@GetMapping("/{qid}")
	public Quiz quiz(@PathVariable("qid") Long qid)
	{
		return this.quizService.getQuiz(qid);
	}
	
	//Get Quizzes by Category ID
	@GetMapping("/category/{categoryId}")
	public List<Quiz> quizByCategoryId(@PathVariable("categoryId") Long categoryId)
	{
		Category category =  new Category();
		category.setId(categoryId);
		return this.quizService.getQuizzesOfCategory(category);
	}
	
	//Get Active Quizzes
	@GetMapping("/active")
	public List<Quiz> getActiveQuizzes()
	{
		return this.quizService.getActiveQuizzes();
	}
	
	//Get Active Quizzes of category
	@GetMapping("/active/{categoryId}")
	public List<Quiz> getActiveQuizzesOfCategory(@PathVariable("categoryId") Long categoryId)
	{	
		Category category =  new Category();
		category.setId(categoryId);
		return this.quizService.getActiveQuizzesOfCategory(category);
	}
	
	//Delete Quiz
	@DeleteMapping("/{qid}")
	public void delete(@PathVariable("qid") Long qid)
	{
		this.quizService.deleteQuiz(qid);
	}
}
