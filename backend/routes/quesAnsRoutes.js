import {addQues,
        giveAns,
        allQues,
        quesWithAns,
        ques} from '../controllers/quesController'

import {register,
        login} from '../controllers/adminController';

const routes = (app) => {
    app.route('/questions')
        .get(allQues);

    app.route('/add_ques')
        .post(addQues);
    
    app.route('/questions/:ques_id')
        .get(ques)
        .put(giveAns);
    
    app.route('/')
        .get(quesWithAns);
    
    app.route('/register')
        .post(register);
    
    app.route('/login')
        .post(login);
}

export default routes;