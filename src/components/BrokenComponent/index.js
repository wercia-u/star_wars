import React from 'react';
import { Alert } from 'antd';

const BrokenComponent = () => (
    <Alert
      message="Wystąpił błąd"
      description="Nasz zespół pracuje nad usunięciem błedu."
      type="warning"
    />
);

export default BrokenComponent;
