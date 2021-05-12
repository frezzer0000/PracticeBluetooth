import React from 'react';
import {storiesOf} from '@storybook/react';
import LoadingButton from '../../button/loading';

storiesOf('LoadingButton', module)
  .add('default', () => <LoadingButton />)
  .add('loading', () => <LoadingButton loading />);
