import React, { useState } from "react";
import "./index.css";
//import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();

    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();


    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
        <>
            <div className="control-buttons d-flex justify-content-end gap-2">
                <button className="btn btn-gray">Collapse All</button>
                <button className="btn btn-gray">View Progress</button>
                {/* <FaCheckCircle className="text-success me-1" /> Publish All */}
                <div className="dropdown">
                    <button className="btn btn-gray dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaCheckCircle className="text-success me-1" /> Publish All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </div>
                {/* <button className="btn btn-primary">+ Module</button> */}
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="d-flex">
                        <input value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            style={{ borderRight: '1px solid black' }}
                        />
                        <textarea value={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                            rows={1}
                            className="p-2"
                        />
                        <button className="btn btn-primary px-3" onClick={() => { dispatch(addModule({ ...module, course: courseId })) }}>Add Module</button>
                        <button className="btn btn-info px-3" onClick={() => dispatch(updateModule(module))}>Update Module</button>
                    </div>
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                    <button className="btn btn-info px-2 rounded mx-1"
                                        onClick={(event) => { dispatch(setModule(module)) }}>
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger px-2 rounded mx-1"
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                </span>
                            </div>
                            <span className='px-1'>
                                <b>Description:</b> {module.description}
                            </span>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: { name: String, _id: React.Key }, index: React.Key) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;