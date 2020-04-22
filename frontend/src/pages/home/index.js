import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.css';

export default function Home() {
    const [update, setUpdate] = useState(0);
    const [Events, setEvents] = useState([]);
    const [data_str, setData_str] = useState('');
    const [data_end, setData_end] = useState('');
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState([]);
    const [Id, setId] = useState(0);

    //Função que salva as alterações dos nossos estados.
    function saveChanges() {
        if (titulo == null || titulo == '') {
            return alert('erro: titulo nulo');
        }

        if (data_str == null || data_str == '') {
            return alert('erro: data de inicio nula');
        }

        return setData({ titulo: titulo, data_str: data_str, data_end: data_end, id: Id });

    }

    //Função que faz o registro de um novo evento.
    async function newRegister() {
        try {
            const register = await api.post('new/event', data);
            Events.push(register.data);
            setUpdate(update + 1);

        } catch (err) {
            alert('erro: operação de registro falhou!');

        }
    }

    //excluir uma posição do array Events.
    async function deleteRegister(id) {
        try {
            api.delete(`delete/${id}`);
            setEvents(Events.filter(events => events.id !== id));

        } catch (err) {
            alert("erro: operação de deletar falhou!");

        }
    }

    //Atualiza um valor do array Events.
    async function updateRegister() {
        try {
            await api.put(`update/${Id}`, data);

            Events.map((valor) => {
                if (valor.id === Id) {
                    return valor = data;
                }

            });

            setUpdate(update - 1);

        } catch (err) {
            alert('erro: operação de update falhou!')

        }

        clean();

    }

    //Função que mostra os modais correspondentes.
    async function showModal(title, id) {
        // função responsável por abrir nossos modais do bootstrap
        if (title === 'updateModal')
            return updateModalShow(id);

        newRegisterShow();

    }

    //Função do modal de update.
    function updateModalShow(id) {
        const input_update = document.querySelectorAll('#updateModal input');

        //Aqui temos um ForEach que preeche nossos input do modal de update.
        Events.forEach(valor => {
            if (valor.id === id) {
                setId(valor.id);
                setTitulo(valor.titulo);
                setData_str(valor.data_str);
                setData_end(valor.data_end);

                input_update[0].value = valor.titulo;
                input_update[1].value = valor.data_str;
                input_update[2].value = valor.data_end;
                input_update[3].value = valor.id;

            }
        });
    }

    //Função que mostra o modal de registro.
    function newRegisterShow() {
        const registerModal = document.querySelector('#registerModal');
        registerModal.style.display = 'block';

    }

    //Função que insere os dados no array de Eventos.
    async function loadEvents() {
        try {
            const res = await api.get('/index');
            setEvents(res.data);

        } catch (err) {
            alert("erro: operação de listagem falhou!");

        }
    }

    //função que limpa ps input após os modal serem fechados, por qualquer ação.
    //Aqui eu admito a gambiarra de como eu obtenho os modals e peço desculpas, rs.
    function clean() {
        const inputs = document.querySelectorAll('input');
        const modals = document.querySelectorAll('.modal');

        if (modals[0].style.display === 'block' || modals[1].style.display === 'block') {
            inputs.forEach((valor) => valor.value = null);
        }

    }

    //Esta é uma função muito interessante do ReactJS, pois como o mesmo é reativo ou seja só se renderiza novamente após a alteração de um estado, essa função faz justamente isso, é como um addEventListener de mudanças de estados.
    useEffect(() => {
        loadEvents();

    }, [update]);

    return (

        <div className="cotainer">

            <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header w-100">
                            <h5 className="modal-title" id="exampleModalLabel">Update Modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">TITULO:</strong>
                                <input
                                    className="col-6"
                                    type="text"
                                    onChange={e => setTitulo(e.target.value)}
                                />
                            </div>

                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">DATA DE INICIO:</strong>
                                <input
                                    className="col-6"
                                    type="date"
                                    onChange={e => setData_str(e.target.value)}
                                />
                            </div>

                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">DATA DE TERMINO:</strong>
                                <input
                                    className="col-6"
                                    type="date"
                                    onChange={e => setData_end(e.target.value)}
                                />
                            </div>

                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">ID:</strong>
                                <input
                                    className="col-6"
                                    disabled type="text"
                                    onChange={e => setId(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => clean()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id="id" onClick={e => saveChanges()} type="button" className="btn btn-primary">Save changes</button>
                            <button id="id" onClick={e => updateRegister()} type="button" data-dismiss="modal" className="btn btn-success">Conclude</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => clean()} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">TITULO:</strong>
                                <input
                                    className="col-6"
                                    type="text"
                                    onChange={e => setTitulo(e.target.value)}
                                />
                            </div>

                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">DATA DE INICIO:</strong>
                                <input
                                    className="col-6"
                                    type="date"
                                    onChange={e => setData_str(e.target.value)}
                                />
                            </div>

                            <div className="row ml-0 w-100 my-2">
                                <strong className="col-6">DATA DE TERMINO:</strong>
                                <input
                                    className="col-6"
                                    type="date"
                                    onChange={e => setData_end(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => clean()}>Close</button>
                            <button type="button" onClick={() => saveChanges()} className="btn btn-primary">Save changes</button>
                            <button type="button" onClick={() => newRegister()} className="btn btn-success">Conclude</button>
                        </div>
                    </div>
                </div>
            </div>

            <header className="container-fluid bg-primary pb-3">
                <div>
                    <p className="display-3 font-weight-bold text-center">TITULO QUALQUER</p>
                </div>
            </header>

            <section>
                <div className="list-container container-fluid h-100 w-100 mt-5">
                    <ul className="list-events w-100 h-100">
                        {Events.map(events => (
                            <li className='row ml-0 w-100 h-100 my-4' key={events.id}>
                                <div className="col-3" id={events.titulo}>
                                    <strong >TITULO:</strong>
                                    <p>{events.titulo}</p>
                                </div>

                                <div className="col-3" id={events.data_str}>
                                    <strong>DATA DE INICIO:</strong>
                                    <p>{events.data_str}</p>
                                </div>

                                <div className="col-3" id={events.data_end}>
                                    <strong>DATA DE TERMINO:</strong>
                                    <p>{events.data_end}</p>
                                </div>

                                <div className="col-3 d-flex align-items-center justify-content-center">
                                    <button onClick={() => deleteRegister(events.id)} className="btn btn-danger mr-1 my-auto w-100"> Delete </button>
                                    <button data-toggle="modal" data-target="#updateModal" type="button" onClick={() => showModal('updateModal', events.id)} className="btn btn-primary mr-1 my-auto w-100" >update</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <footer className="container d-flex justify-content-center mt-5">
                <button data-toggle="modal" data-target="#registerModal" onClick={() => showModal('registerModal')} className="btn btn-success mr-1 my-auto w-75" >new register</button>
            </footer>

        </div >
    );
}