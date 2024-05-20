import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import ModuleCard from './submodule-card';

// ----------------------------------------------------------------------

export default function SubModuleCardList({ users }) {
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

SubModuleCardList.propTypes = {
  users: PropTypes.array,
};
