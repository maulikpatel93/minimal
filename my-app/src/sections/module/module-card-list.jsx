import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import ModuleCard from './module-card';

// ----------------------------------------------------------------------

export default function ModuleCardList({ users }) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {users.map((user) => (
        <ModuleCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

ModuleCardList.propTypes = {
  users: PropTypes.array,
};
