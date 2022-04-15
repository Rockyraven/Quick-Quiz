import { categories } from "db/category-db";

const { createContext, useContext, useState } = require("react");

const questionContext = createContext();

const QuestionProvider = ({children}) => {
    const [ questionCategoryList, setQuestionCategoryList ] = useState();

    const fetchQuestion = (questionID) => {
        let questionCategoryExit = categories.find((item) => item._id === questionID)

        fetch(questionCategoryExit.link)
        .then(response => response.json() )
        .then( data => setQuestionCategoryList(data.results))
    }
    return(
        <questionContext.Provider value={{ fetchQuestion, questionCategoryList }}>
            {children}
        </questionContext.Provider>
    )
}

const useQuestion = () => useContext(questionContext)

export {QuestionProvider, useQuestion};