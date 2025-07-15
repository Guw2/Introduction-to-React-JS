import styles from './Student.module.css'
import PropTypes from 'prop-types'

function Student({name="Guest", age=0, isStudent=false}){

    return(
        <div className={styles.student_info}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>IsStudent: {isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student;