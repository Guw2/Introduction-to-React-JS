import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button/Button.jsx';
import Student from './student/Student.jsx';

function App() {
  return(
    <>
      <Student name="peter" age="18" isStudent={true}></Student>
      <Card />
      <Button></Button>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
    </>
  );
}

export default App
