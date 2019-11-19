/**
 * Asynchronously loads the component for FeaturePage
 */
import loadable from 'loadable-components';

import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('../LoginPage/index'), {
  LoadingComponent: LoadingIndicator,
});
