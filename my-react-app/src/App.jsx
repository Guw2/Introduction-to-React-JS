import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button/Button.jsx';
import Student from './student/Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

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
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
      <UserGreeting isLoggedIn={true} username={"User"}/>
      <Student name={"Peter"} age={18} isStudent={true}></Student>
      <Student></Student>
      <Card />
      <Button></Button>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
    </>
  );
}

export default App
