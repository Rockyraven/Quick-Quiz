import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export const Category1 = () => {
    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
    const pickAnswer = (e) => {
        let userAnswer = e.target.outerText;
        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }


    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=17&category=18&difficulty=medium&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (
                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }
                )));
            })
            .catch(err => console.error(err))
    }, []);


    // useEffect(() => {
    //     fetch('https://opentdb.com/api.php?amount=10&category=19&type=multiple')
    //     .then(response=>response.json())
    //     .then(data=>setquestionCategory1(data.results));
    //     console.log("conrxt",questionCategory1)
    // },[])


    return (
       
        <div className='quiz-Ques'>
            {quiz[number] &&
                <>
                    <h3 dangerouslySetInnerHTML={{ __html: quiz[number].question }}></h3>

                    <div className='ans-Option'>
                        {quiz[number].options.map((item, index) => (
                            <button key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></button>
                        ))}
                    </div>
                </>
            }
            {/* {
                number === 5 && <GameOver pts={pts} />
            } */}
          
        </div>
    )
}


