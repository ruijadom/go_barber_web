import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToostContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Error</strong>
          <p>Unable to login to the application</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Error</strong>
          {/* <p>Unable to login to the application</p> */}
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Error</strong>
          <p>Unable to login to the application</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToostContainer;
