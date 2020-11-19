import logo from './logo.svg';
import './App.css';
import {sum , diff} from "./utility.js"
import NameTag from "./NameTag.js"


function App() {

  return (
    <div className="App">
     <NameTag name="🍔" tag="#햄버거는 맘스터치" img="./ontheborder.jpg" color="red" />
     <NameTag name="🍟" tag="#감튀는 맥도날드"/>
     <NameTag name="🍕" tag="#피자는 미스터피자"/>
     <NameTag name="🌭" tag="#핫도그는 명랑핫도그"/>
     <NameTag name="🥪" tag="#샌드위치는 서브웨이"/>
     <NameTag name="🌮" tag="#타코는 온더보더" img="./ontheborder.jpg"/>
     <NameTag name="🍦" tag="#아이스크림은 베스킨라빈스설의원"/>
    </div>
  );
}

export default App;
