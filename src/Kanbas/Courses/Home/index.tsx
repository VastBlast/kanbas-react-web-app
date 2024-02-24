import ModuleList from "../Modules/List";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


function Home() {
    const buttons = [
        'Import Existing Content',
        'Import From Commons',
        'Choose Home Page',
        'View Course Stream',
        'New Announcement',
        'New Analytics',
        'View Course Notifications',
    ];

    const todos = [
        { message: 'Grade A1', subMessage: '100 points • Sep 18 at 11:59pm', count: 5, link: '#' },
        { message: 'Grade A2', subMessage: '50 points • Oct 2 at 11:59pm', count: 3, link: '#' },
    ]

    return (
        <>
            <div className='row'>
                <div className='col col-12 col-md-8 col-lg-9'>
                    <ModuleList />
                </div>
                <div className='col col-md-4 col-lg-3 d-none d-md-block'>
                    <div className="d-flex w-100">
                        <button className="col btn btn-gray d-flex align-items-center justify-content-center"
                            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                            <FaTimesCircle className="me-1" /> Unpublish
                        </button>
                        <button className="col btn btn-success disabled d-flex align-items-center justify-content-center"
                            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                            <FaCheckCircle className="me-1" /> Published
                        </button>
                    </div>

                    <ul className="list-unstyled mt-3">
                        {buttons.map((label, index) => (
                            <li key={index}>
                                <button className="btn btn-gray w-100 mt-1">{label}</button>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <h5>To Do</h5>
                        <hr />
                        <ul className="list-unstyled">
                            {todos.map((todo, index) => (
                                <li key={index}>
                                    <div className="d-flex">
                                        <div>
                                            <span className="badge rounded-pill me-2" style={{ backgroundColor: 'red' }}>{todo.count}</span>
                                        </div>
                                        <div>
                                            <a href={todo.link} className="" style={{ color: "red", textDecoration: "none", fontWeight: 500 }}>
                                                {todo.message}
                                            </a>
                                            <p style={{ opacity: 0.75 }}>{todo.subMessage}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;