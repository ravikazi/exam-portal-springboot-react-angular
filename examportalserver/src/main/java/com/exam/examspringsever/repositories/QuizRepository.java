package com.exam.examspringsever.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examspringsever.models.exam.Category;
import com.exam.examspringsever.models.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{
	public List<Quiz> findByCategory(Category category);
	//For Users
	public List<Quiz> findByCategoryAndPublished(Category c, Boolean b);
	public List<Quiz> findByPublished(boolean b);
}
