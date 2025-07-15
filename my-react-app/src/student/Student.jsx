import styles from './Student.module.css'

function Student(props){

    return(
        <div className={styles.student_info}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

export default Student;