package com.exam.examspringsever.models.exam;

import javax.persistence.*;

@Entity
@Table(name="questions")
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(length = 500)
	private String content;
	private String img;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String answer;
	@Transient
	private String givenAnswer;
	//quiz_id
	//One quiz has multiple question
	//ie. many to one with quiz
	@ManyToOne(fetch = FetchType.EAGER)
	private Quiz quiz;
	public Question() {
	}
	public Question(String content, String img, String option1, String option2, String option3, String option4,
			String answer, Quiz quiz) {
		super();
		this.content = content;
		this.img = img;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.answer = answer;
		this.quiz = quiz;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getOption1() {
		return option1;
	}
	public void setOption1(String option1) {
		this.option1 = option1;
	}
	public String getOption2() {
		return option2;
	}
	public void setOption2(String option2) {
		this.option2 = option2;
	}
	public String getOption3() {
		return option3;
	}
	public void setOption3(String option3) {
		this.option3 = option3;
	}
	public String getOption4() {
		return option4;
	}
	public void setOption4(String option4) {
		this.option4 = option4;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public Quiz getQuiz() {
		return quiz;
	}
	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public String getGivenAnswer() {
		return givenAnswer;
	}

	public void setGivenAnswer(String givenAnswer) {
		this.givenAnswer = givenAnswer;
	}
}
