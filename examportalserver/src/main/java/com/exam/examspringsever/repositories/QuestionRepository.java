package com.exam.examspringsever.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examspringsever.models.exam.Question;
import com.exam.examspringsever.models.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long>{

	Set<Question> findByQuiz(Quiz quiz);

}
