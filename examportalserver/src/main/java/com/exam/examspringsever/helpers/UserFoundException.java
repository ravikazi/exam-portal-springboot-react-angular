package com.exam.examspringsever.helpers;

public class UserFoundException extends Exception{
	public UserFoundException()
	{
		super("User already registered");
	}
	
	public UserFoundException(String msg)
	{
		super(msg);
	}
}
