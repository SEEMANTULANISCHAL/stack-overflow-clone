import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
const HomeMainbar = () => {
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    var questionsList = [{
      _id: '1',
      upvotes: 3,
      downvotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It means to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "Mano",
      userId:1,
      askedOn: "Aug1",
      answer: [{
        answerbody: "Answer",
        userAnswered: 'kumar',
        answeredOn: "jan 2",
        userId: 2,
      }]
    },{
        _id: '2',
        upVotes: 2,
        downvotes: 3,
        noOfAnswers: 0,
        questionTitle: "Python sqlalchemy how to check if db empty?",
        questionBody: "It means to be",
        questionTags: ["python", "pycharm", "Dev", "sqlalchemy"],
        userPosted: "Mano",
        askedOn: "Aug1",
        userId:1,
        answer: [{
          answerbody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]
    },{
        id: '3',
        upVotes: 2,
        downvotes: 1,
        noOfAnswers: 3,
        questionTitle: "Extract data from a txt",
        questionBody: "It means to be",
        questionTags: ["python", "pycharm", "Data-exteaction", "DataSecurity"],
        userPosted: "Mano",
        askedOn: "Jan1",
        userId: 1,
        answer: [{
          answerbody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
        }]   
    }] 
    const checkAuth = () => {
      if(user === null){
          alert("login or signup to ask a question")
          navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
    }
    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
              {
                location.pathname === '/' ? <h1>Top Questions</h1> : <h1> All Questions</h1>
              }
              <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
              {
                questionsList === null ?
                <h1>Loading...</h1> :
                <>
                    <p>{questionsList.length} questions</p>
                    <QuestionList questionsList={questionsList} />
                </>
              }
            </div>  
        </div>
    )
}

export default HomeMainbar
