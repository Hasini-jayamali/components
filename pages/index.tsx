import React, { useState } from "react";
import { render } from "react-dom";
import Breadcrumb from "../components/breadCrumb";
import Button from "../components/button";
import Checkbox, { CheckBox } from "../components/checkbox";
import DatePicker from "../components/datePicker";
import Dropdown from "../components/dropdown";
import DropdownButton from "../components/dropdownButton";
import ImageCarousel from "../components/imageCarousel/imageCarousel";
import ImgComp from "../components/imageCarousel/imgComp";
import { ListBox } from "../components/listBox";
import ModalWindow from "../components/popup";
import Notifications from "../components/notification";
import Pagination from "../components/pagination";
import PaginationComponent from "../components/pagination";
import RadioButton from "../components/radioButton";
import Search from "../components/search";
import TextField from "../components/textField";
import Toggle from "../components/toggle";
import ToolTip from "../components/tooltip";
import Popup from "../components/popup";

export default function App() {
  const state = {
    acceptance: false,
    message: "",
    text: "",
  };
  const inputTextRef = React.createRef();
  const [setState] = useState()


//checkbox
  const handleCheckbox = (acceptance: any) => {
    setState({ acceptance });
  };
  const [selected, setSelected] = useState();

  const options = ["aaa", "bbb", "ccc"];

  // eslint-disable-next-line react/jsx-key
  let sliderArr = [
    // eslint-disable-next-line react/jsx-key
    <ImgComp src="./pics/first.png" />,
    // eslint-disable-next-line react/jsx-key
    <ImgComp src="./pics/second.png" />,
    // eslint-disable-next-line react/jsx-key
    <ImgComp src="./pics/third.png" />,
  ];

  const Users = [
    {
      name: "aaa",
      age: 20,
    },
    {
      name: "bbb",
      age: 20,
    },
    {
      name: "ccc",
      age: 20,
    },
  ];
  const handleChange = (key) => (value) => {
    setState({ [key]: value });
  };

  const { acceptance, message, text } = state;

  // const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);
  const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project one', href: '#', current: true },
  ]

  // const selected = (crumb: any) => {
  //   console.log(crumb);
  // }

  const ListBoxitems = [
    { id: 1, name: "AAAaaaaa" },
    { id: 2, name: "BBBaaaa" },
    { id: 3, name: "CCCaaaa" },
    { id: 4, name: "AAAaaa" },
    { id: 5, name: "BBBaaa" },
    { id: 6, name: "CCCaaaaa" },
    { id: 7, name: "AAAaaaaa" },
    { id: 8, name: "BBBaaa" },
    { id: 9, name: "CCCaaaa" },
    
  ];

  const items = [
    {
      able: "qqq",
      id: 1,
      cBoxId: "qqq1",
      value: "qqq2",
      name: "qqq3",
    },
   
   
  ];
  return (

    // <Checkbox label="hello" selected={selected} styleClass={style}></Checkbox>
      //  <Dropdown selected={selected} setSelected={setSelected} options = {options}/>
    //  <Button text="END"></Button>

    //    <Button> Choose</Button>
    // <Checkbox label="I Accept" onchange={this.handleCheckbox} selected={}/>
    // <ImageCarousel sliderArr={sliderArr}></ImageCarousel>

    // <Search list={Users} userList={undefined}></Search>
    // <RadioButton type="radio" name="react-radio-btn" value="radio1"></RadioButton>
    // <Button text="submit"></Button>
    // <Checkbox  id='name' lable="I Agree" styleClass="block text-sm font-medium text-gray-700"></Checkbox>

    // <TextField
    //   type="textarea"
    //   placeholder="h.j."
    // ></TextField>
    // <Breadcrumb items={pages} ></Breadcrumb>
    // <DropdownButton ></DropdownButton>
    // <Notifications text1="Successfully saved!" text2="Anyone with a link can now view this file."></Notifications>
    // <ModalWindow></ModalWindow>

    // <Pagination Previous="Previous" Next="Next"></Pagination>
    // <Toggle ></Toggle>

    // <ToolTip text="My Button" content="Coloured" placement='right' arrow={true}></ToolTip>

    // <DatePicker></DatePicker>
    // <ListBox lable="List " items={ListBoxitems} />
    // <CheckBox
    //       items={items}
    //       id="Name"
    //       lable="CheckBox"
    //       lableStyle="block text-sm font-medium text-gray-700"
    //     />
<Popup></Popup>

  );
}
