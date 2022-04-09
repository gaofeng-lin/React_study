import { Select } from 'antd';


import {React,Component} from 'react';
import './About.css'



const { Option } = Select;

// function onChange(value) {
//   console.log(`selected ${value}`);
// }

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
    // onChange={onChange}
    // onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">{this.props.value[0]}</Option>
    <Option value="lucy">{this.props.value[1]}</Option>
    <Option value="tom">{this.props.value[2]}</Option>
  </Select>
    )
  }
}

export default SiderDemo