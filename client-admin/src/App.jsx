import axios from 'axios';
import React, { Component } from 'react';
//Cấu hình axios
const api = axios.create({
  baseURL: "http://localhost:3000"
})
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "Loading..."
    }
  }
  //Render trang Admin
  render() {
    return (
      <div>
        <h2>Admin page</h2>
        <p>{this.state.message}</p>
      </div>
    )
  }
  //Lấy dữ liệu từ Backend API
  componentDidMount() {
    api.get('/').then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({ message: result.message });
    })
  }
}
export default App;