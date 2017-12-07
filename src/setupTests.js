import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme needs a configuration with the specific react version
configure({ adapter: new Adapter() });
