package com.exam.examspringsever.helpers;

public class UserNotFoundException extends Exception{
	public UserNotFoundException()
	{
		super("User not available in Database...");
	}
	
	public UserNotFoundException(String msg)
	{
		super(msg);
	}
}
