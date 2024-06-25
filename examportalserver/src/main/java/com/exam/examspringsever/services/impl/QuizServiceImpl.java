package com.exam.examspringsever.services.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examspringsever.models.exam.Category;
import com.exam.examspringsever.models.exam.Quiz;
import com.exam.examspringsever.repositories.QuizRepository;
import com.exam.examspringsever.services.QuizService;

@Service
public class QuizServiceImpl implements QuizService{
	
	@Autowired
	private QuizRepository quizRepository;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return this.quizRepository.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		return new HashSet<Quiz>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		return this.quizRepository.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		this.quizRepository.deleteById(quizId);
	}

	@Override
	public List<Quiz> getQuizzesOfCategory(Category category) {
		return this.quizRepository.findByCategory(category);
	}
	//Get Active Quizzes
	@Override
	public List<Quiz> getActiveQuizzes() {
		return this.quizRepository.findByPublished(true);
	}

	@Override
	public List<Quiz> getActiveQuizzesOfCategory(Category c) {
		return this.quizRepository.findByCategoryAndPublished(c, true);
	}

}
