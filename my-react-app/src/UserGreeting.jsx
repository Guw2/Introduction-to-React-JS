import styles from './UserGreeting.module.css'
import PropTypes from 'prop-types';

function UserGreeting(props){

    if(props.isLoggedIn){
        return(
            <h2 className={styles.logged_title}>Welcome, {props.username}!</h2>
        );
    }
    return(
        <h2 className={styles.not_logged_title}>Please log in to continue</h2>
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting;