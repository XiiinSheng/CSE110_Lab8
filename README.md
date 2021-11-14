# CSE 110 Lab 8 
Member:  
Xin Sheng

### Question 1
Within GitHub action.  
Automated tests should be run automatically in GitHub action when the code is pushed, in order to decrease replicated manual workload, and provide verification on the code everytime it is updated. Tests in GitHub action gives a systematic workflow for development and avoid unnecessary mistakes. 

### Question 2
No.  
End-to-end testing is for emulating user action from start to finish, so it will not fit the case of testing a single component in a project. In this case, it's better to test this single function instead of the whole project. 

### Question 3
No.  
Messaging feature involves interaction between users, which is better tested with end-to-end testing method. Unit testing is only for testing a single function. 

### Question 4 
Yes.  
"max message length" is a small-scale single function without interaction, and testing it doesn't involve interaction with other features. 