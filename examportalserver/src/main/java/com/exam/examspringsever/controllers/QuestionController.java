package com.exam.examspringsever.controllers;

import java.util.*;

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

import com.exam.examspringsever.models.exam.Question;
import com.exam.examspringsever.models.exam.Quiz;
import com.exam.examspringsever.services.QuestionService;
import com.exam.examspringsever.services.QuizService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuizService quizService;
	
	//Add Question
	@PostMapping("/")
	public ResponseEntity<Question> add(@RequestBody Question question)
	{
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}
	
	@PutMapping("/")
	public ResponseEntity<Question> update(@RequestBody Question question)
	{
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
	}
	
	//All question of any Quiz
	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("quizId") Long quizId)
	{
		/*
		 * Quiz quiz = new Quiz(); quiz.setId(quizId); Set<Question> questionsOfQuiz =
		 * this.questionService.getQuestionsOfQuiz(quiz); return
		 * ResponseEntity.ok(questionsOfQuiz);
		 */
		Quiz quiz = this.quizService.getQuiz(quizId);
		Set<Question> questions = quiz.getQuestions();
		List<Question> list = new ArrayList<Question>(questions);
		 if(list.size()>Integer.parseInt(quiz.getNumber_of_questions()))
		 {
			 list = list.subList(0,Integer.parseInt(quiz.getNumber_of_questions()+1));
		 }
		 Collections.shuffle(list);
		 return ResponseEntity.ok(list);
	}
	
	//All question of any Quiz Admin
	@GetMapping("/quiz/all/{quizId}")
	public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("quizId") Long quizId)
	{
		 Quiz quiz = new Quiz(); 
		 quiz.setId(quizId); 
		 Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz); 
		 return ResponseEntity.ok(questionsOfQuiz); 
	}
	
	//Get Single question
	@GetMapping("/{quesId}")
	public Question getQuestion(@PathVariable("quesId") Long quesId)
	{
		return this.questionService.getQuestion(quesId);
	}
	
	//Delete Single Question
	@DeleteMapping("/{quesId}")
	public void deleteQuestion(@PathVariable("quesId") Long quesId)
	{
		this.questionService.deteleQuestion(quesId);
	}

	//Evaluate Questions
	@PostMapping("/eval-quiz")
	public ResponseEntity<?> evalQuiz(@RequestBody List<Question> questions)
	{
		System.out.println(questions);
		double marksGot = 0;
		int correctAnswers = 0;
		int attempted = 0;
		for(Question q: questions){
			System.out.println(q.getGivenAnswer());
			Question question = this.questionService.get(q.getId());
			if (question.getAnswer()==q.getGivenAnswer())
			{
				correctAnswers++;
				double markSingle = Double.parseDouble(questions.get(0).getQuiz().getMax_marks())/questions.size();
				marksGot += markSingle;
			}

			if (q.getGivenAnswer()!=null)
			{
				attempted++;
			}
		};

		Map<String, Object> map = Map.of("marksGot",marksGot, "correctAnswers",correctAnswers,"attempted",attempted);
		return ResponseEntity.ok(map);
	}
}
