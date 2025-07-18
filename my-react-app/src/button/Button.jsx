import styles from './Button.module.css'

function Button(){

    let clicked = false;

    const handleClick = (e) => {
        if(clicked == false){
            e.target.textContent = "OUCH!";
            e.target.style.backgroundColor = "red"
        }else{
            e.target.textContent = "Click me";
            e.target.style.backgroundColor = "blue"
        }

        clicked = !clicked;
    };

    return(
        <>
            <button onClick={(e) => handleClick(e)} className={styles.button}>Click me</button>
        </>
    );
}

export default Button;