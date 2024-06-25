package com.exam.examspringsever.models.exam;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="quezzes")
public class Quiz {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String title;
	@Column(length = 500)
	private String description;
	private String max_marks;
	private String number_of_questions;
	private boolean published=false;
	//category_id;
	//Many to one with Category
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	//One to many with question
	@OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Question> questions = new HashSet<Question>();
	public Quiz() {
	
	}
	public Quiz(String title, String description, String max_marks, String number_of_questions, boolean published) {
		super();
		this.title = title;
		this.description = description;
		this.max_marks = max_marks;
		this.number_of_questions = number_of_questions;
		this.published = published;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getMax_marks() {
		return max_marks;
	}
	public void setMax_marks(String max_marks) {
		this.max_marks = max_marks;
	}
	public String getNumber_of_questions() {
		return number_of_questions;
	}
	public void setNumber_of_questions(String number_of_questions) {
		this.number_of_questions = number_of_questions;
	}
	public boolean isPublished() {
		return published;
	}
	public void setPublished(boolean published) {
		this.published = published;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Set<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}
	
	
}
