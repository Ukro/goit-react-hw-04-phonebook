import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import { FilterWrapper, Input, Label } from './Filter.styled';

import { ImCross } from 'react-icons/im';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <>
      <Label htmlFor="filter">Find contact by name:</Label>
      <FilterWrapper>
        <Input type="text" name="filter" value={value} onChange={onChange} />
        {value && (
          <IconButton
            color="#400080"
            type="button"
            aria-label="Clear filter"
            onClick={onClick}
          >
            <ImCross />
          </IconButton>
        )}
      </FilterWrapper>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
