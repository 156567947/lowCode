import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import ManageLayout from '../layout/ManageLayout'

import QuestionLayout from '../layout/QuestionLayout'

import Home from '../page/Home'
import Login from '../page/Login'
import Register from '../page/Register'
import NotFound from '../page/NotFound'

import List from '../page/manage/List'
import Star from '../page/manage/Star'
import Trash from '../page/manage/Trash'
import Edit from '../page/question/Edit/index'
import Stat from '../page/question/Stat/index'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'register', element: <Register /> },
            { path: 'login', element: <Login /> },
            {
                path: 'manage', element: <ManageLayout />,
                children: [
                    {
                        path: 'list',
                        element: <List />
                    },
                    {
                        path: 'star',
                        element: <Star />
                    },
                    {
                        path: 'trash',
                        element: <Trash />
                    }
                ]
            },
            
            {
                path: '*',
                element: <NotFound />
            },
           
        ]
    },
    {
        path: 'question',
        element: <QuestionLayout />,
        children: [
            {
                path: 'edit/:id',
                element: <Edit />
            },
            {
                path: 'stat/:id',
                element: <Stat />
            }
        ]
    },
])
export default router; 

