package com.exam.examspringsever.services;

import java.util.Set;

import com.exam.examspringsever.models.exam.Question;
import com.exam.examspringsever.models.exam.Quiz;

public interface QuestionService {
	public Question addQuestion(Question question);
	public Question updateQuestion(Question question);
	public Set<Question> getQuestions();
	public Question getQuestion(Long questionId);
	public void deteleQuestion(Long questionId);
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);
	public Question get(Long questionId);
}
