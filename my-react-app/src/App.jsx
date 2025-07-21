import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button/Button.jsx';
import Student from './student/Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import MyComponent from './MyComponent.jsx';
import OnChangeComponent from './OnChangeComponent.jsx';
import UpdateObjectsComponent from './UpdateObjectsComponent.jsx';

import styles from './App.module.css'
import UpdateArray from './UpdateArray.jsx';

function App() {
  const fruits = [{id: 1, name: "Apple", price: 5.0}, 
                    {id: 2, name: "Banana", price: 6.0}, 
                    {id: 3, name: "Orange", price: 5.5}, 
                    {id: 4, name: "Coconut", price: 6.5}, 
                    {id: 5, name: "Pineapple", price: 8.0}];
  
  const vegetables = [{id: 6, name: "Potatoes", price: 10.0}, 
                    {id: 7, name: "Celery", price: 6.5}, 
                    {id: 8, name: "Carrots", price: 5.5}, 
                    {id: 9, name: "Corn", price: 6.0}, 
                    {id: 10, name: "Broccoli", price: 6.5}];

  fruits.sort((a, b) => a.price - b.price);
  vegetables.sort((a, b) => a.price - b.price);

  return(
    <>
      <div>
        <div className={styles.innerDiv}>
          <UpdateArray />
        </div>
        <div className={styles.innerDiv}>
          <UpdateObjectsComponent />
        </div>
        <div className={styles.innerDiv}>
          <h2>On Change</h2>
          <OnChangeComponent />
        </div>
        <div className={styles.innerDiv}>
          <h2>Use State</h2>
          <MyComponent></MyComponent>
        </div>
        <div className={styles.innerDiv}>
          <h2>Click Events</h2>
          <Button></Button>
        </div>
        <div className={styles.innerDiv}>
          <h2>Rendered Lists</h2>
          {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
          {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
        </div>
        <div className={styles.innerDiv}>
          <h2>Props II</h2>
          <UserGreeting isLoggedIn={true} username={"User"}/>
        </div>
        <div className={styles.innerDiv}>
          <h2>Props</h2>
          <Student name={"Peter"} age={18} isStudent={true}></Student>
          <Student></Student>
        </div>
        <div className={styles.innerDiv}>
          <h2>Basic Basics</h2>
          <Card />
          <Header></Header>
          <Food></Food>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App
