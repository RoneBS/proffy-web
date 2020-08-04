import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis.">
               <form id="search-teachers" >
                   <div className="input-block">
                       <label htmlFor="subjetc">Materia</label>
                       <input type="text" id="subjetc" />
                   </div>

                   <div className="input-block">
                       <label htmlFor="week-day">Dia da Semana</label>
                       <input type="text" id="subjetc" />
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="subjetc" />
                   </div>
                </form> 
           </PageHeader>

           <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
           </main>
        </div>
    )
}

export default TeacherList;