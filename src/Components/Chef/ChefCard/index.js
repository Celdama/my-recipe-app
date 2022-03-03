import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, Avatar, Username } from './chefCard.tw';
import PropTypes from 'prop-types';

const ChefCard = ({ chef }) => {
  const { avatar, userName, uid } = chef;
  return (
    <Wrapper>
      <Content>
        <Avatar src={avatar} alt='avatar' />
        <Username>{userName}</Username>
        <Link
          to={`/chef/${uid}`}
          className='inline-flex items-center text-sm font-semibold  text-center
            text-indigo-600 hover:text-indigo-700'
        >
          See Recipes
        </Link>
      </Content>
    </Wrapper>
  );
};

ChefCard.propTypes = {
  chef: PropTypes.object,
};

export default ChefCard;
