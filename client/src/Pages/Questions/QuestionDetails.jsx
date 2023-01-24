import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import upvote from '../../assets/sort-up-solid.svg'
import downvote from '../../assets/sort-down-solid.svg'
import './Questions.css'
import DisplayAnswer from './DisplayAnswer'
const QuestionDetails = () => {

    const { id } = useParams()
    console.log(id)
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
  return (
    <div className='question-details-page'>
        {
            questionsList === null ?
            <h1>Loading...</h1>:
            <>
                {
                    questionsList.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            {console.log(question)}
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className="question-votes">
                                        <img src={upvote} alt="" width='18' className='votes-icon'/>
                                        <p>{question.upvotes - question.downvotes}</p>
                                        <img src={downvote} alt="" width='18' className='votes-icon' />
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className='question-details-tags'>
                                            {
                                                question.questionTags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                                </Link>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers !==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        <DisplayAnswer key={question._id} question={question}/>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form>
                                    <textarea name="" id="" cols="30" rows="10"></textarea><br />
                                    <input type="Submit" className='post-ans-btn' value='Post Your Answwer' />
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) =>(
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or
                                    <Link tp ='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question.</Link>
                                </p>
                            </section>
                        </div>
                    ))

                    
                }
            </>
        }

    </div>
  )
}

export default QuestionDetails
