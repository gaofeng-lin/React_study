import { Select } from 'antd';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from '../home';
import {React,Component} from 'react';
import './About.css'



const { Option } = Select;

function onChange(value) {
  console.log(value);
  // <Route exact path={"/"+value} component={Home}/>
  // top.location.href={"localhost:3000/#/""+"value};
}

// function onSearch(val) {
//   console.log('search:', val);
// }

class SiderDemo extends Component {
  render() {
    return(
      <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    // onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
    )
  }
}

export default SiderDemo