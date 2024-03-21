//import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { courses } from "../Database";
//import * as db from "../Database";

type DashboardParams = {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
}

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: DashboardParams) {
    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "reactjs.jpg"
    // });

    // const addNewCourse = () => {
    //     const newCourse = {
    //         ...course,
    //         _id: new Date().getTime().toString()
    //     };
    //     setCourses([...courses, { ...course, ...newCourse }]);
    // };

    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };



    return (
        <div /*className="p-4"*/>
            <h1>Dashboard</h1>

            <h5>Course Editor</h5>

            <div className="gap-2 d-grid">
                <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <div className='d-flex gap-1'>
                    <button onClick={addNewCourse} className="btn btn-success">Add</button>
                    <button className="btn btn-info" onClick={updateCourse}>Update</button>
                </div>
            </div>

            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 justify-content-center justify-content-lg-start">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} alt="" />

                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.number} {course.name}
                                    </Link>
                                    <p className="card-text">Learn all about {course.name}</p>
                                    <div className="d-flex gap-1">
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary"> Go </Link>
                                        <button className="btn btn-info" onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>Edit</button>

                                        <button className="btn btn-danger" onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;