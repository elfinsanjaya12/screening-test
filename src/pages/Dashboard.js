import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../parts/Header';
import Sidebar from '../parts/Sidebar';
import Jumrotron from '../components/Jumbotron';
import BoxInfo from '../components/BoxInfo';
import Feedback from '../components/Feedback';
// import dashboard from '../json/dashboard.json';
import { fetchPage } from '../store/actions/dashboard';

function Dashboard(props) {
  // const [hasError, setErrors] = useState(false);
  const [dashboard, setDashboard] = useState({});

  async function fetchData() {
    const res = await fetch('https://screening-test-frontend.herokuapp.com/dashboard');
    res.json()
      .then((res) => setDashboard(res.express))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // const { page } = props;
    <>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar {...props} />
        </div>
        <div className="col-md-9 m-0">
          <Jumrotron />
          <div className="container row box-info">
            <BoxInfo data={dashboard.visitor} />
            <BoxInfo data={dashboard.page} />
            <BoxInfo data={dashboard.product} />
            <BoxInfo data={dashboard.sales} />
          </div>
          <Feedback />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(Dashboard);
