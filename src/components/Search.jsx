import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          type='text'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 1rem 1rem 1rem 1rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;