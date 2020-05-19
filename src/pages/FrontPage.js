import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../parts/Header';
import Sidebar from '../parts/Sidebar';
import Tabs from '../parts/Tabs';
import { fetchPage } from '../store/actions/pagelink';

function FrontPage(props) {
  const pagelink = useSelector(state => state.frontpage.frontpage);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPage('/page-view'))
  }, [])

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar {...props} />
        </div>
        <div className="col-md-9 m-0" style={{ marginRight: 20 }}>
          <Tabs data={pagelink} />
        </div>
      </div>
    </>
  );
}

export default FrontPage;

// import React, { useState, useCallback, useEffect } from 'react';
// import update from 'immutability-helper';
// import Card from './CardExample';
// import axios from '../config';

// const url = process.env.REACT_APP_HOST;

// const style = {
//   width: 400,
// };
// const FrontPage = () => {
//   const [cards, setCards] = useState([]);
//   async function fetchData() {
//     try {
//       const res = await axios(`${url}/page-view`);
//       setCards(res.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const moveCard = useCallback(
//     (dragIndex, hoverIndex) => {
//       const dragCard = cards[dragIndex];
//       setCards(
//         update(cards, {
//           $splice: [
//             [dragIndex, 1],
//             [hoverIndex, 0, dragCard],
//           ],
//         }),
//       );
//     },
//     [cards],
//   );
//   const renderCard = (card, index) => (
//     <Card
//       key={card.id}
//       index={index}
//       id={card.id}
//       title={card.title}
//       url={card.url}
//       moveCard={moveCard}
//     />
//   );


//   return (
//     <>
//       <div style={style}>{JSON.stringify(cards)}</div>
//       <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
//     </>
//   );
// };
// export default FrontPage;
