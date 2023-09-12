import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Products.css'
import left from './images/chevrons-left.svg'
import right from './images/chevrons-right.svg'
import ProductInfo from './ProductInfo';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';


const Products = ({ data }) => {
  
  const [state, setState] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard]=useState(null);
  const [showModal,setShowModal]=useState(false)
  const productsPerPage = 5;
  

  const openModal=(card)=>
  {
    console.log("the onclick button is clicked for opening modal",card)
setSelectedCard(card);
setShowModal(true);
  }
  const closeModal=()=>
  {
    setShowModal(false);
    setSelectedCard(null);
  }

  const button = ["All", "Medicines", "Personol Care", "Baby Care", "Health Devices"];

  let filteredCards;
          
  if (state === 'All') {
    filteredCards = data.flatMap((category) => category.Cards);
  } else {
    const categoryData = data.find((category) => category.category === state);
    filteredCards = categoryData?.Cards || [];
  }

  const filteredAndSearchedCards = filteredCards
  .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSearchedCards.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log('filteredAndSearchedCards:', filteredAndSearchedCards);
  const handleSearch = (query) => {
    setSearchTerm(query);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };
  return (
    <>
      <Navbar1/>
      <Navbar2/>

    <div className='container'>

      <div className='container'>
<div className='row'>
<div className='col-lg-7 col-sm-12'><div className='buttons'>
        {button.map((btn) => (
          <button
            key={btn}
            className={state === btn ? 'Button3 active' : 'Button3'}
            onClick={() => setState(btn)}
          >
            {btn}
          </button>
        ))}
      </div></div>
      <div className='col-lg-5 col-sm-12'>
      <div className="search-bar d-flex">
        <input
          type="text"
          className="input-1"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}/>
        
        
      </div></div>
      

      </div>
      </div>
<div className=' container-1'>
      <div className='row cards'>
      {currentProducts.map((card) => (
          <div key={card.id} className='col-lg-3 col-sm-12'>
            <div className='card-11'>
              <img src={card.image} alt={card.title} className='card-image'/>
              <a href='#' className='card-title1' onClick={()=>openModal(card)}>{card.title}</a>
             
           

            
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className='pagination'>
  {currentPage !== 1 && (
    <img
      onClick={() => setCurrentPage(currentPage - 1)}
      src={left}
      style={{ fontSize: 'smaller', width: '4%' }}
      alt='Previous Page'
    />
  )}

  {currentPage !== 0 && (
    <span className='mx-3' style={{ marginTop: '10px', fontWeight: 'bold' }}>
      Page {currentPage}
    </span>
  )}

  {indexOfLastProduct < filteredAndSearchedCards.length && (
    <img
      onClick={() => setCurrentPage(currentPage + 1)}
      src={right}
      style={{ width: '4%' }}
      alt='Next Page'
    />
  )}
</div>

{/*Modal open */}

{showModal && selectedCard && (
  <ProductInfo cardData={selectedCard} closeModal={closeModal} />
        
      )}
    </div>
    <Footer1/>
    <Footer2/>
    </>
  );
};

export default Products
