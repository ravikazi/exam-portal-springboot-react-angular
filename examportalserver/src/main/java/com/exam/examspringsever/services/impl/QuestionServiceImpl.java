package com.exam.examspringsever.services.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examspringsever.models.exam.Question;
import com.exam.examspringsever.models.exam.Quiz;
import com.exam.examspringsever.repositories.QuestionRepository;
import com.exam.examspringsever.services.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
	private QuestionRepository questionRepository;
	
	@Override
	public Question addQuestion(Question question) {
		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		return this.questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		return new LinkedHashSet<Question>(this.questionRepository.findAll());
	}

	@Override
	public Question getQuestion(Long questionId) {
		return this.questionRepository.findById(questionId).get();
	}

	@Override
	public void deteleQuestion(Long questionId) {
		Question question = new Question();
		question.setId(questionId);
		this.questionRepository.delete(question);
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public Question get(Long questionId) {
		return this.questionRepository.getOne(questionId);
	}

}
